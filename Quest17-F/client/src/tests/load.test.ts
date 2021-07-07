/* eslint-disable @typescript-eslint/no-var-requires */
import 'expect-puppeteer';
import 'jest-environment-puppeteer';

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

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    // (check) token not inclueded
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.evaluate((authToken) => {
      localStorage.setItem('token', authToken);
    }, token);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    // (check) token inclueded
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const content = await page.evaluate(() => document.querySelector('html')?.innerHTML);
    // The main component is expected to be rendered
    console.log(content);
  });

  test('페이지 제목 검사', async () => {
    await expect(page.title()).resolves.toMatch('client');
  });
});
