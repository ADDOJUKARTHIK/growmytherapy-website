const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,900',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9224/json', res => {
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

    // Capture Hero on Desktop
    await new Promise(r => setTimeout(r, 1500));
    const shotHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('preview_hero_desktop_new.png', Buffer.from(shotHero.data, 'base64'));
    console.log('Saved preview_hero_desktop_new.png');

    // Scroll to About section (#about)
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
      `
    });
    await new Promise(r => setTimeout(r, 1500));
    const shotAbout = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('preview_about_desktop_new.png', Buffer.from(shotAbout.data, 'base64'));
    console.log('Saved preview_about_desktop_new.png');

    // Also mobile view
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await new Promise(r => setTimeout(r, 1500));
    const shotHeroMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('preview_hero_mobile_new.png', Buffer.from(shotHeroMobile.data, 'base64'));
    console.log('Saved preview_hero_mobile_new.png');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    edge.kill();
  }
}

run();
