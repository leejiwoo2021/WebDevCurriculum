class Api {
  #tempData = new Map();

  async getFileNameList(): Promise<fileNameType> {
    const fileNameList = (await this.useFetch(
      'POST',
      {
        query: `
          query {
            info {
              list
              lastFile
            }
          }
        `,
      },
      '파일 목록을 불러오는 중 오류가 발생했습니다'
    )) as fileNameType;

    return fileNameList;
  }

  async getFile(name: string): Promise<fileType> {
    const resBody = (await this.useFetch(
      'POST',
      {
        query: `
          query {
            file(name: "${name}") {
              name
              content
            }
          }
        `,
      },
      '파일을 불러오는 중 오류가 발생했습니다'
    )) as fileType;

    if (resBody) this.#tempData.set(name, { content: this.contentConcat(resBody.data.file.content) });

    return resBody;
  }

  getFileTemp(name: string): string[] | undefined {
    return this.#tempData.get(name)?.content?.split('\n');
  }

  async saveFile(name: string, content: string[]): Promise<void> {
    const resBody = await this.useFetch(
      'POST',
      {
        query: `
          mutation {
            updateFile(name: "${name}" content: ${JSON.stringify(content)}){
              msg
            }
          }
        `,
      },
      'PUT 파일을 저장하는 중 오류가 발생했습니다'
    );

    if (resBody) this.#tempData.set(name, { content: this.contentConcat(content) });
  }

  async saveFileAs(newName: string, content: string[]): Promise<void> {
    const resBody = await this.useFetch(
      'POST',
      {
        query: `
          mutation {
            createFile(name: "${newName}" content:  ${JSON.stringify(content)}){
              msg
            }
          }
        `,
      },
      '파일을 저장하는 중 오류가 발생했습니다'
    );

    if (resBody) this.#tempData.set(newName, { content: this.contentConcat(content) });
  }

  contentConcat(content: string[]): string {
    let concated = '';
    content.forEach((line, index) => {
      concated += line;
      if (index < content.length - 1) concated += '\n';
    });
    return concated;
  }

  async useFetch(method: string, body: bodyType, errMsg: string): Promise<fileNameType | fileType> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://localhost:8000/graphql', {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
          'accept-encoding': 'gzip',
        },
        body: method === 'GET' ? undefined : JSON.stringify(body),
      });

      const resBody = await response.json();

      if (response.ok) return resBody;
      else {
        location.href = '/login';
        return Promise.reject(errMsg);
      }
    } catch (err) {
      console.log(err);
      console.log(errMsg);
      throw err;
    }
  }
}

interface bodyType {
  query: string;
}

interface fileNameType {
  data: {
    info: {
      list: string[];
      lastFile: string;
    };
  };
}

interface fileType {
  data: {
    file: {
      name: string;
      content: string[];
    };
  };
}
