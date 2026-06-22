const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('http://localhost:3000');
  
  const btn = page.locator('button:has-text("Explore Services")').first();
  await btn.hover();
  await page.waitForTimeout(1000);
  
  const spanStyles = await btn.locator('span[aria-hidden]').evaluate(el => {
    const s = window.getComputedStyle(el);
    return {
      width: s.width,
      height: s.height,
      transform: s.transform,
      zIndex: s.zIndex,
      backgroundColor: s.backgroundColor
    };
  });
  console.log('SPAN:', spanStyles);
  
  await browser.close();
})();
