import request from 'supertest';
import app from './app';

async function sendLoginRequest() {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ id: 'test1', pw: 'qwer1234' })
    .set('Accept', 'application/json')
    .type('application/json');

  return response;
}

describe('API 통합 테스트', () => {
  test('서버 구동 확인', () => {
    return request(app).get('/').expect(200);
  });

  test('로그인 성공하기', async () => {
    const response = await sendLoginRequest();

    expect(response.body.token).not.toBeUndefined();
  });

  test('로그인 실패하기', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ id: 'test1', pw: 'wrongpwd' })
      .set('Accept', 'application/json')
      .type('application/json');

    expect(response.body.msg).not.toBeUndefined();
    expect(response.statusCode).toBe(401);
  });

  test('파일 목록 불러오기', async () => {
    const loginResponse = await sendLoginRequest();
    expect(loginResponse.body.token).not.toBeUndefined();

    const token = loginResponse.body.token;

    interface graphqlType extends request.Response {
      body: {
        data: {
          info: {
            list: string[];
            lastFile: string;
          };
        };
      };
    }

    const graphqlResponse: graphqlType = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            info {
              list
              lastFile
            }
          }
        `,
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .type('application/json');

    expect(graphqlResponse.body.data.info).not.toBeUndefined();
    expect(graphqlResponse.body.data.info.list).not.toBeUndefined();
    expect(graphqlResponse.body.data.info.lastFile).not.toBeUndefined();
  });

  test('파일 내용 불러오기', async () => {
    const loginResponse = await sendLoginRequest();
    expect(loginResponse.body.token).not.toBeUndefined();

    const token = loginResponse.body.token;

    interface infoType extends request.Response {
      body: {
        data: {
          info: {
            list: string[];
            lastFile: string;
          };
        };
      };
    }

    const infoResponse: infoType = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            info {
              list
              lastFile
            }
          }
        `,
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .type('application/json');

    const fileName = infoResponse.body.data.info.list[0];

    interface fileType extends request.Response {
      body: {
        data: {
          file: {
            name: string;
            content: string[];
          };
        };
      };
    }

    const fileResponse: fileType = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            file(name: "${fileName}") {
              name
              content
            }
          }
        `,
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .type('application/json');

    const { name, content } = fileResponse.body.data.file;
    expect(name).not.toBeUndefined();
    expect(content).not.toBeUndefined();
  });
});
