const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9222/json', res => {
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

    // Set mobile device emulation: iPhone 14 (390 x 844, scale 2)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });

    await new Promise(r => setTimeout(r, 1000));

    // Scroll down and up to trigger any image loading
    await send('Runtime.evaluate', {
      expression: `
        new Promise(resolve => {
          let distance = 300;
          let timer = setInterval(() => {
            window.scrollBy(0, distance);
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              setTimeout(resolve, 800);
            }
          }, 100);
        })
      `,
      awaitPromise: true
    });

    await new Promise(r => setTimeout(r, 1000));

    // Capture full-page mobile screenshot
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });

    fs.writeFileSync('preview_true_mobile_full.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved preview_true_mobile_full.png successfully!');

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    edge.kill();
  }
}

run();
