/* eslint-disable @typescript-eslint/no-var-requires */
const { default: axios } = require('axios');
const https = require('https');
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

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
    await page.goto('https://localhost:3000');
    // await page.pdf({ path: 'hn.pdf' });
  });

  it('제목 일치 검사 "Editor"', async () => {
    await expect(page.title()).resolves.toMatch('Editor');
  });
});
