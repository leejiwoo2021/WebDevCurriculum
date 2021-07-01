/* eslint-disable @typescript-eslint/no-var-requires */
const { default: axios } = require('axios');
const https = require('https');
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

jest.setTimeout(10000);

describe('Index 페이지 접속 확인', () => {
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

  test('페이지 헤더 제목 검사', async () => {
    await expect(page.title()).resolves.toMatch('Editor');
  });

  test('페이지 h1태그 제목 검사', async () => {
    const h1Handle = await page.$('.l-header-title');
    const html = await page.evaluate((h1Handle) => h1Handle.innerHTML, h1Handle);
    expect(html).toBe('Text Editor');
  });
});
