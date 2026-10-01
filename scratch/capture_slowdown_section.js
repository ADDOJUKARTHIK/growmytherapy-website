const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\107b972b-87b2-42db-bc0f-d20ff58df108';

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9227',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,1050',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9227/json', res => {
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

    // Scroll to "A SPACE TO SLOW DOWN"
    await send('Runtime.evaluate', {
      expression: `
        const el = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('A SPACE TO SLOW DOWN'));
        if (el) {
          el.closest('section').scrollIntoView({ behavior: 'instant' });
        }
      `
    });
    await new Promise(r => setTimeout(r, 2000));

    const shotSlowDownDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'slowdown_desktop_preview.png'), Buffer.from(shotSlowDownDesktop.data, 'base64'));
    console.log('Saved slowdown_desktop_preview.png');

    // Mobile View
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await new Promise(r => setTimeout(r, 1000));

    await send('Runtime.evaluate', {
      expression: `
        const el = Array.from(document.querySelectorAll('p')).find(p => p.textContent.includes('A SPACE TO SLOW DOWN'));
        if (el) {
          el.closest('section').scrollIntoView({ behavior: 'instant' });
        }
      `
    });
    await new Promise(r => setTimeout(r, 1500));

    const shotSlowDownMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'slowdown_mobile_preview.png'), Buffer.from(shotSlowDownMobile.data, 'base64'));
    console.log('Saved slowdown_mobile_preview.png');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    edge.kill();
  }
}

run();
