const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,900',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get('http://localhost:9223/json', res => {
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
        document.getElementById('the-space')?.scrollIntoView({ behavior: 'instant' });
      `
    });
    await new Promise(r => setTimeout(r, 2000));

    const shotOffice = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('preview_v2_desktop_the_space.png', Buffer.from(shotOffice.data, 'base64'));
    console.log('Saved preview_v2_desktop_the_space.png');

    // Scroll to #faqs
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('faqs')?.scrollIntoView({ behavior: 'instant' });
      `
    });
    await new Promise(r => setTimeout(r, 1500));

    const shotFaq = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('preview_v2_desktop_faqs_contact.png', Buffer.from(shotFaq.data, 'base64'));
    console.log('Saved preview_v2_desktop_faqs_contact.png');

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    edge.kill();
  }
}

run();
