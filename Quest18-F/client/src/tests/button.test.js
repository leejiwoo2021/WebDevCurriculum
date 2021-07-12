const puppeteer = require('puppeteer');
const { v4: uuidv4 } = require('uuid');

jest.setTimeout(10000);

describe('버튼 기능 테스트', () => {
  let page;
  const newFileName = uuidv4();
  const secondFileName = uuidv4();
  const sampleText = 'new sample text';

  beforeAll(async () => {
    const browser = await puppeteer.launch({ignoreHTTPSErrors: true});
    page = await browser.newPage();

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.type('#idInput','test1');
    await page.type('#pwInput','qwer1234');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.click('#loginBtn');
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  test('새 파일 생성', async () => {
    const newFileButton = await page.$('.l-newFileBtn-container');

    async function dialogHandler(dialog) {
      await dialog.accept(newFileName);
    }
    page.on('dialog', dialogHandler);

    await newFileButton.click();
    await new Promise((resolve) => setTimeout(resolve, 500));
    const lastButtonText = await page.$eval(
      '.l-navigator-container',
      (el) => {
        el.lastElementChild.click();
        return el.lastElementChild.firstElementChild.innerHTML
      }
    );

    expect(lastButtonText).toBe(newFileName);

    page.off('dialog', dialogHandler);
  });

  test('새 파일 내용 작성 및 저장', async () => {

    await page.click('.l-line-container');
    await page.keyboard.type(sampleText);
    await page.click('.l-saveFileBtn-container');

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    const contentText = await page.$eval('.l-line-container',(el) => el.innerHTML);

    expect(contentText).toBe(sampleText);
  });

  test('다른 이름으로 저장', async () => {
    async function dialogHandler(dialog) {
      await dialog.accept(secondFileName);
    }

    page.on('dialog', dialogHandler);

    await page.click('.l-saveAsFileBtn-container');

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    const contentText = await page.$eval('.l-line-container',(el) => el.innerHTML);

    expect(contentText).toBe(sampleText);
    page.off('dialog', dialogHandler);
  });
});
