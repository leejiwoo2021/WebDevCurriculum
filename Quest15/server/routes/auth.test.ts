import { login } from './auth';
import httpMocks from 'node-mocks-http';

describe('route auth 유닛 테스트', () => {
  test('로그인 성공', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        id: 'test1',
        pw: 'qwer1234',
      },
    });

    const responseMock = httpMocks.createResponse();

    await login(requestMock, responseMock);

    const statusCode = responseMock._getStatusCode();
    const body = responseMock._getJSONData();

    expect(statusCode).toBe(200);
    expect(body.token).not.toBeUndefined();
  });

  test('로그인 실패', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        id: 'test1',
        pw: 'wrongPwd',
      },
    });

    const responseMock = httpMocks.createResponse();

    await login(requestMock, responseMock);

    const statusCode = responseMock._getStatusCode();
    const body = responseMock._getJSONData();

    expect(statusCode).toBe(401);
    expect(body).toStrictEqual({ msg: '존재하지 않는 ID거나, 패스워드가 일치하지 않습니다' });
  });
});
