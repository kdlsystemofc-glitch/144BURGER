import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--hide-scrollbars',
    'file:///c:/CLI/144BURGER/index.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const tabs = await res.json();
    const pageTab = tabs.find(t => t.type === 'page');
    if (!pageTab) throw new Error('No page tab found');

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    function call(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    // Wait for fonts and assets
    await new Promise(r => setTimeout(r, 1500));

    const viewports = [
      { name: '1440', width: 1440, height: 900, mobile: false, file: 'reports/phase08-desktop-1440.png' },
      { name: '768',  width: 768,  height: 1024, mobile: true,  file: 'reports/phase08-tablet-768.png' },
      { name: '390',  width: 390,  height: 844,  mobile: true,  file: 'reports/phase08-mobile-390.png' }
    ];

    for (const vp of viewports) {
      await call('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });
      await new Promise(r => setTimeout(r, 500));

      const docLayout = await call('Page.getLayoutMetrics');
      const fullHeight = Math.ceil(docLayout.contentSize.height);

      await call('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: fullHeight,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });
      await new Promise(r => setTimeout(r, 400));

      const resSnap = await call('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      });
      fs.writeFileSync(vp.file, Buffer.from(resSnap.data, 'base64'));
      console.log(`Saved ${vp.file} (${vp.width}x${fullHeight})`);
    }

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
