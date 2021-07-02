import { verifyJWT } from './auth';
import jwt from 'jsonwebtoken';
import express from 'express';

describe('middleware auth 유닛 테스트', () => {
  test('JWT 토큰 검증 - 토큰 미포함', () => {
    function nextMock() {
      return;
    }

    const requestMock = {
      headers: {},
      get(header) {
        return this.headers[header];
      },
    } as express.Request;

    const responseMock = {
      body: {},
      headers: {},
      append(header, value) {
        this.headers[header] = value;
      },
      status(code) {
        this.statusCode = code;
      },
      json(obj) {
        this.body = obj;
      },
    } as unknown as express.Response;

    verifyJWT(requestMock, responseMock, nextMock);

    expect(responseMock.body).toStrictEqual({ message: 'no token' });
  });

  test('JWT 토큰 검증 - 잘못된 토큰 포함 ', async () => {
    const requestMock = {
      headers: {
        Authorization: 'Bearer asdf',
      },
      get(header) {
        return this.headers[header];
      },
    } as unknown as express.Request;

    const responseMock = {
      body: {},
      headers: {},
      append(header, value) {
        this.headers[header] = value;
      },
      status(code) {
        this.statusCode = code;
      },
      json(obj) {
        this.body = obj;
      },
    } as unknown as express.Response;

    function nextMock() {
      return;
    }

    verifyJWT(requestMock, responseMock, nextMock);

    expect(responseMock.body).toStrictEqual({ message: 'invalid token' });
  });

  test('JWT 토큰 검증 - 정상 토큰 포함 ', async () => {
    const token = jwt.sign({ iss: 'jiwoo', id: 'test1', exp: Math.floor(Date.now() / 1000) + 10 * 60 }, 'jwSecret');

    const requestMock = {
      token: undefined,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      get(header) {
        return this.headers[header];
      },
    } as unknown as express.Request;

    const responseMock = {
      body: {},
      headers: {},
      append(header, value) {
        this.headers[header] = value;
      },
      status(code) {
        this.statusCode = code;
      },
      json(obj) {
        this.body = obj;
      },
    } as unknown as express.Response;

    function nextMock() {
      return;
    }

    verifyJWT(requestMock, responseMock, nextMock);

    expect(requestMock.token).toBe(token);
  });
});
