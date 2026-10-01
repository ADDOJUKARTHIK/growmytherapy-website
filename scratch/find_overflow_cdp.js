const { spawn } = require('child_process');
const http = require('http');

async function run() {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=430,900',
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
    console.log('Connecting to:', page.webSocketDebuggerUrl);

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.onopen = () => {
      // Evaluate overflow
      const code = `
        (() => {
          const vw = window.innerWidth;
          const overflows = [];
          document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > vw + 1) {
              overflows.push({
                tag: el.tagName,
                id: el.id,
                className: (el.className || '').toString().slice(0, 80),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                text: (el.innerText || '').slice(0, 30)
              });
            }
          });
          return { vw, bodyScrollWidth: document.body.scrollWidth, overflows: overflows.slice(0, 10) };
        })()
      `;

      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: code, returnByValue: true }
      }));
    };

    ws.onmessage = (msg) => {
      const res = JSON.parse(msg.data);
      if (res.id === 1) {
        console.log('RESULT:', JSON.stringify(res.result.result.value, null, 2));
        ws.close();
        edge.kill();
      }
    };

    await new Promise(r => setTimeout(r, 4000));
  } catch (err) {
    console.error(err);
  } finally {
    edge.kill();
  }
}

run();
