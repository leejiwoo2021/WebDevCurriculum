import { fileName, fileNameBody, fileNameContent } from './check';
import httpMocks from 'node-mocks-http';

describe('middleware check 유닛 테스트', () => {
  test('파일 이름 검증 - 이름 포함 ', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'GET',
      url: '/graphql',
      query: {
        name: 'testFileName',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileName(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();

    expect(statusCode).toBe(200);
  });

  test('파일 이름 검증 - 이름 미포함 ', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'GET',
      url: '/graphql',
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileName(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();
    const message = responseMock._getData();

    expect(statusCode).toBe(400);
    expect(message).toBe('파일 이름 필드가 존재하지 않습니다');
  });

  test('파일 이름 검증 - 이름 포함 (req.body)', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        name: 'testFileName',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameBody(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();

    expect(statusCode).toBe(200);
  });

  test('파일 이름 검증 - 이름 미포함 (req.body)', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameBody(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();
    const message = responseMock._getData();

    expect(statusCode).toBe(400);
    expect(message).toBe('파일 이름 필드가 존재하지 않습니다');
  });

  test('파일 이름, 내용 검증 - 이름, 내용 포함', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        name: 'testFileName',
        content: 'testContent',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameContent(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();

    expect(statusCode).toBe(200);
  });

  test('파일 이름, 내용 검증 - 이름, 내용 미포함', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameContent(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();
    const message = responseMock._getData();

    expect(statusCode).toBe(400);
    expect(message).toBe('파일 이름 또는 내용 필드가 존재하지 않습니다');
  });

  test('파일 이름, 내용 검증 - 이름만 포함', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        name: 'testFileName',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameContent(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();
    const message = responseMock._getData();

    expect(statusCode).toBe(400);
    expect(message).toBe('파일 이름 또는 내용 필드가 존재하지 않습니다');
  });

  test('파일 이름, 내용 검증 - 내용만 포함', async () => {
    const requestMock = httpMocks.createRequest({
      method: 'POST',
      url: '/graphql',
      body: {
        content: 'testFileName',
      },
    });

    const responseMock = httpMocks.createResponse();

    function nextMock() {
      return;
    }

    fileNameContent(requestMock, responseMock, nextMock);

    const statusCode = responseMock._getStatusCode();
    const message = responseMock._getData();

    expect(statusCode).toBe(400);
    expect(message).toBe('파일 이름 또는 내용 필드가 존재하지 않습니다');
  });
});
