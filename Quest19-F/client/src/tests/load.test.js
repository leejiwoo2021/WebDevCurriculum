const puppeteer = require('puppeteer');

jest.setTimeout(10000);

describe('Index 페이지 접속 확인', () => {
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
    page = await browser.newPage();

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.type('#idInput', 'test1');
    await page.type('#pwInput', 'qwer1234');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.click('#loginBtn');
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  test('페이지 제목 검사', async () => {
    await expect(page.title()).resolves.toMatch('Development');
  });
});
