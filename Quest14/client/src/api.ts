class Api {
  #tempData = new Map();

  async getFileNameList(): Promise<resType | undefined> {
    const fileNameList = await this.useFetch(
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
    );

    return fileNameList;
  }

  async getFile(name: string): Promise<resType | undefined> {
    const resBody = await this.useFetch(
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
    );

    if (resBody) this.#tempData.set(name, resBody);

    return resBody;
  }

  getFileTemp(name: string): resType {
    return this.#tempData.get(name);
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

  async useFetch(method: string, body: bodyType, errMsg: string): Promise<resType | undefined> {
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
      else if (!response.ok) location.href = '/login';
    } catch (err) {
      console.log(err);
      console.log(errMsg);
    }
  }
}

interface bodyType {
  query: string;
}

interface resType {
  data?: {
    info?: {
      list?: string[];
      lastFile?: string;
    };
    file?: {
      name?: string;
      content?: string[];
    };
    msg?: string;
  };
  errors?: string[];
}
