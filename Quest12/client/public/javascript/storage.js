class Storage {
  #tempData = new Map();

  async getFileNameList() {
    const fileNameList = await this.useFetch(
      'GET',
      'info',
      {},
      '파일 목록을 불러오는 중 오류가 발생했습니다'
    );

    return fileNameList;
  }

  async getFile(name) {
    const resBody = await this.useFetch(
      'GET',
      `file?name=${name}`,
      {},
      '파일을 불러오는 중 오류가 발생했습니다'
    );

    if (resBody) this.#tempData.set(name, resBody);

    return resBody;
  }

  getFileTemp(name) {
    return this.#tempData.get(name);
  }

  async saveFile(name, content) {
    const resBody = await this.useFetch(
      'PUT',
      'file',
      {
        name,
        content: this.contentConcat(content),
      },
      'PUT 파일을 저장하는 중 오류가 발생했습니다'
    );

    if (resBody)
      this.#tempData.set(name, { content: this.contentConcat(content) });
  }

  async saveFileAs(newName, content) {
    const resBody = await this.useFetch(
      'POST',
      'file',
      {
        name: newName,
        content: this.contentConcat(content),
      },
      '파일을 저장하는 중 오류가 발생했습니다'
    );

    if (resBody)
      this.#tempData.set(newName, { content: this.contentConcat(content) });
  }

  contentConcat(content) {
    let concated = '';
    content.forEach((line, index) => {
      concated += line;
      if (index < content.length - 1) concated += '\n';
    });
    return concated;
  }

  async useFetch(method, url, body, errMsg) {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`https://localhost:8000/api/${url}`, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
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
