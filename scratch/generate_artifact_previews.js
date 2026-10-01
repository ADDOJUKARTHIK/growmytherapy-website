const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\107b972b-87b2-42db-bc0f-d20ff58df108';

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,960',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9226/json', res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    const page = listRes.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        const handler = (msg) => {
          const data = JSON.parse(msg.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    // 1. Desktop Hero
    await new Promise(r => setTimeout(r, 2000));
    const shotHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'hero_desktop_preview.png'), Buffer.from(shotHero.data, 'base64'));
    console.log('Saved hero_desktop_preview.png');

    // 2. Desktop About
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const shotAbout = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'about_desktop_preview.png'), Buffer.from(shotAbout.data, 'base64'));
    console.log('Saved about_desktop_preview.png');

    // 3. Mobile Device Emulation
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await new Promise(r => setTimeout(r, 1500));

    // Capture Mobile Hero
    const shotMobileHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'mobile_hero_preview.png'), Buffer.from(shotMobileHero.data, 'base64'));
    console.log('Saved mobile_hero_preview.png');

    // Mobile scroll to about
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const shotMobileAbout = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'mobile_about_preview.png'), Buffer.from(shotMobileAbout.data, 'base64'));
    console.log('Saved mobile_about_preview.png');

    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    edge.kill();
  }
}

run();
