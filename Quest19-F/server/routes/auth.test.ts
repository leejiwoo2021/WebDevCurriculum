import { login } from './auth';
import express from 'express';

describe('route auth 유닛 테스트', () => {
  test('로그인 성공', async () => {
    const requestMock = {
      body: {
        id: 'test1',
        pw: 'qwer1234',
      },
    } as express.Request;

    const responseMock = {
      body: {},
      status(code) {
        this.statusCode = code;
      },
      json(obj) {
        this.body = obj;
      },
    } as unknown as express.Response;
    await login(requestMock, responseMock);

    expect(responseMock.statusCode).toBe(200);
    expect(responseMock.body.token).not.toBeUndefined();
  });

  test('로그인 실패', async () => {
    const requestMock = {
      body: {
        id: 'test1',
        pw: 'wrongPwd',
      },
    } as express.Request;

    const responseMock = {
      body: {},
      status(code) {
        this.statusCode = code;
      },
      json(obj) {
        this.body = obj;
      },
    } as unknown as express.Response;
    await login(requestMock, responseMock);

    expect(responseMock.statusCode).toBe(401);
    expect(responseMock.body).toStrictEqual({ msg: '존재하지 않는 ID거나, 패스워드가 일치하지 않습니다' });
  });
});
