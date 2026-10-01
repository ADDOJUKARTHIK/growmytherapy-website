const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\107b972b-87b2-42db-bc0f-d20ff58df108';

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9232',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,1100',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9232/json', res => {
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

    // Scroll to #the-space
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('the-space')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 1500));

    const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'our_office_desktop.png'), Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved our_office_desktop.png');

    // Tablet
    await send('Emulation.setDeviceMetricsOverride', {
      width: 820,
      height: 1180,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await new Promise(r => setTimeout(r, 1000));
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('the-space')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 1200));

    const shotTablet = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'our_office_tablet.png'), Buffer.from(shotTablet.data, 'base64'));
    console.log('Saved our_office_tablet.png');

    // Mobile
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await new Promise(r => setTimeout(r, 1000));
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('the-space')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await new Promise(r => setTimeout(r, 1200));

    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'our_office_mobile.png'), Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved our_office_mobile.png');

    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    edge.kill();
  }
}

run();
