import { verifyJWT } from './auth';
import httpMocks from 'node-mocks-http';
import request from 'supertest';
import app from '../app';

async function sendLoginRequest() {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ id: 'test1', pw: 'qwer1234' })
    .set('Accept', 'application/json')
    .type('application/json');

  return response;
}

describe('middleware auth 유닛 테스트', () => {
  test('JWT 토큰 검증 - 토큰 미포함', () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    verifyJWT(requestMock, responseMock, nextMock);

    const jsonData = responseMock._getJSONData();
    expect(jsonData).toStrictEqual({ message: 'no token' });
  });

  test('JWT 토큰 검증 - 잘못된 토큰 포함 ', async () => {
    const token = 'wrongToken';

    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'accept-encoding': 'gzip',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    verifyJWT(requestMock, responseMock, nextMock);

    const jsonData = responseMock._getJSONData();
    expect(jsonData).toStrictEqual({ message: 'invalid token' });
  });

  test('JWT 토큰 검증 - 정상 토큰 포함 ', async () => {
    const loginResponse = await sendLoginRequest();
    expect(loginResponse.body.token).not.toBeUndefined();

    const token = loginResponse.body.token;

    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'accept-encoding': 'gzip',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    verifyJWT(requestMock, responseMock, nextMock);

    expect(requestMock.token).toBe(token);
  });
});
