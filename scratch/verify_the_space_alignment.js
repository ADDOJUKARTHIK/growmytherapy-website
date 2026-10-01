const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\107b972b-87b2-42db-bc0f-d20ff58df108';

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9230',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,1100',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9230/json', res => {
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
    await new Promise(r => setTimeout(r, 2000));

    // Measure exact pixel geometry of both office image containers
    const metrics = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const img1 = document.querySelector('img[src*="office-1"]')?.parentElement;
          const img2 = document.querySelector('img[src*="office-2"]')?.parentElement;
          if (!img1 || !img2) return null;
          const r1 = img1.getBoundingClientRect();
          const r2 = img2.getBoundingClientRect();
          return {
            img1: { top: r1.top, bottom: r1.bottom, height: r1.height, width: r1.width, left: r1.left, right: r1.right },
            img2: { top: r2.top, bottom: r2.bottom, height: r2.height, width: r2.width, left: r2.left, right: r2.right },
            gap: r2.left - r1.right,
            topDelta: Math.abs(r1.top - r2.top),
            bottomDelta: Math.abs(r1.bottom - r2.bottom),
            heightDelta: Math.abs(r1.height - r2.height)
          };
        })()
      `,
      returnByValue: true
    });

    console.log('--- Desktop Alignment Metrics (1440px) ---');
    console.log(JSON.stringify(metrics.result.value, null, 2));

    const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'the_space_desktop_aligned.png'), Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved the_space_desktop_aligned.png');

    // 2. Tablet view: iPad (768 x 1024)
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
    await new Promise(r => setTimeout(r, 1500));

    const tabletMetrics = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const img1 = document.querySelector('img[src*="office-1"]')?.parentElement;
          const img2 = document.querySelector('img[src*="office-2"]')?.parentElement;
          if (!img1 || !img2) return null;
          const r1 = img1.getBoundingClientRect();
          const r2 = img2.getBoundingClientRect();
          return {
            img1: { top: r1.top, bottom: r1.bottom, height: r1.height, width: r1.width },
            img2: { top: r2.top, bottom: r2.bottom, height: r2.height, width: r2.width },
            topDelta: Math.abs(r1.top - r2.top),
            bottomDelta: Math.abs(r1.bottom - r2.bottom),
            heightDelta: Math.abs(r1.height - r2.height)
          };
        })()
      `,
      returnByValue: true
    });
    console.log('--- Tablet Alignment Metrics (820px) ---');
    console.log(JSON.stringify(tabletMetrics.result.value, null, 2));

    const shotTablet = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'the_space_tablet_aligned.png'), Buffer.from(shotTablet.data, 'base64'));
    console.log('Saved the_space_tablet_aligned.png');

    // 3. Mobile View (390 x 844)
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
    await new Promise(r => setTimeout(r, 1500));

    const mobileMetrics = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const img1 = document.querySelector('img[src*="office-1"]')?.parentElement;
          const img2 = document.querySelector('img[src*="office-2"]')?.parentElement;
          if (!img1 || !img2) return null;
          const r1 = img1.getBoundingClientRect();
          const r2 = img2.getBoundingClientRect();
          return {
            img1: { height: r1.height, width: r1.width },
            img2: { height: r2.height, width: r2.width },
            heightDelta: Math.abs(r1.height - r2.height)
          };
        })()
      `,
      returnByValue: true
    });
    console.log('--- Mobile Alignment Metrics (390px) ---');
    console.log(JSON.stringify(mobileMetrics.result.value, null, 2));

    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'the_space_mobile_aligned.png'), Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved the_space_mobile_aligned.png');

    ws.close();
  } catch (err) {
    console.error('Error during alignment test:', err);
  } finally {
    edge.kill();
  }
}

run();
