/* eslint-disable @typescript-eslint/no-var-requires */
const { default: axios } = require('axios');
const { v4: uuidv4 } = require('uuid');
const https = require('https');
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

jest.setTimeout(10000);

describe('파일 생성 및 수정(저장)', () => {
  beforeAll(async () => {
    const loginResponse = await instance.post(
      'https://localhost:8000/api/auth/login',
      JSON.stringify({
        id: 'test1',
        pw: 'qwer1234',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const token = loginResponse.data.token;

    await page.goto('https://localhost:3000');
    await page.evaluate((authToken) => {
      localStorage.setItem('token', authToken);
    }, token);
    await page.goto('https://localhost:3000', { waitUntil: 'domcontentloaded' });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });

  test('새 파일 생성', async () => {
    const newFileName = uuidv4();
    const newFileButton = await page.$('.l-new-button');

    async function dialogHandler(dialog) {
      await dialog.accept(newFileName);
    }
    page.on('dialog', dialogHandler);

    await newFileButton.click();
    await new Promise((resolve) => setTimeout(resolve, 500));
    const lastButtonText = await page.$eval(
      '.l-nav-container',
      (el) => el.lastElementChild.firstElementChild.innerHTML
    );

    expect(lastButtonText).toBe(newFileName);
    page.off('dialog', dialogHandler);
  });

  test('새 파일 내용 작성 및 저장', async () => {
    const newFileName = 'newFileByJiwoo';
    const fileNavBtnList = await page.$x(`//h2[contains(text(),'${newFileName}')]/..`);

    if (fileNavBtnList.length > 0) {
      const newFileNavBtn = fileNavBtnList[0];
      await newFileNavBtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const activeNavBtnText = await page.$eval('.t-nav-button-active', (fileBtn) => fileBtn.firstElementChild.innerHTML);

    expect(activeNavBtnText).toBe('newFileByJiwoo');

    const editorLines = await page.$$('.l-editor-line');

    if (editorLines.length > 0) {
      const newText = uuidv4();
      const lastLine = editorLines[editorLines.length - 1];
      await lastLine.evaluate((el, newText) => (el.innerHTML = newText + 'testLine'), newText);
      const lastLineText = await lastLine.evaluate((el) => el.innerHTML);
      expect(lastLineText).toMatch(new RegExp('testLine'));
    } else throw new Error('파일 작성 오류');

    const saveBtn = await page.$('.l-save-button');
    await saveBtn.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    await page.goto('https://localhost:3000', { waitUntil: 'domcontentloaded' });
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newEditorLines = await page.$$('.l-editor-line');

    if (newEditorLines.length > 0) {
      const lastLine = newEditorLines[newEditorLines.length - 1];
      const lastLineText = await lastLine.evaluate((el) => el.innerHTML);
      expect(lastLineText).toMatch(new RegExp('testLine'));
    } else throw new Error('파일 작성 오류');
  });

  test('기존 파일 다른 이름으로 저장', async () => {
    const newFileName = uuidv4();
    const saveAsButton = await page.$('.l-saveAs-button');
    const currentEditorHTML = await page.$eval('.l-editor-container', (el) => el.innerHTML);

    async function dialogHandler(dialog) {
      await dialog.accept(newFileName);
    }

    page.on('dialog', dialogHandler);

    await saveAsButton.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    const fileNavBtnList = await page.$x(`//h2[contains(text(),'${newFileName}')]/..`);

    if (fileNavBtnList.length > 0) {
      const newFileNavBtn = fileNavBtnList[0];
      await newFileNavBtn.click();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const newEditorHTML = await page.$eval('.l-editor-container', (el) => el.innerHTML);
    const currentFileName = await page.$eval('.t-nav-button-active', (el) => el.firstElementChild.innerHTML);
    expect(currentEditorHTML).toBe(newEditorHTML);
    expect(currentFileName).toBe(newFileName);

    page.off('dialog', dialogHandler);
  });
});
