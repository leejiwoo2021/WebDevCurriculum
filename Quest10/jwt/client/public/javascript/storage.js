class Storage {
  #tempData = new Map();

  async getFileNameList() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/info', {
        headers: {
          token: token,
        },
      });
      const body = await response.json();

      if (response.ok) return body;
      else if (!response.ok) location.href = '/login';
    } catch (err) {
      throw new Error('파일 목록을 불러오는 중 오류가 발생했습니다');
    }
  }

  async getFile(name) {
    // if (this.#tempData.has(name)) return this.#tempData.get(name);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(
        `http://localhost:8000/api/file?name=${name}`,
        {
          headers: {
            token: token,
          },
        }
      );
      const body = await response.json();
      if (response.ok) {
        this.#tempData.set(name, body);
        return body;
      } else if (!response.ok) location.href = '/login';
    } catch (err) {
      throw new Error('파일을 불러오는 중 오류가 발생했습니다');
    }
  }

  getFileTemp(name) {
    return this.#tempData.get(name);
  }

  async saveFile(name, content) {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8000/api/file', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          token: token,
        },
        body: JSON.stringify({
          name: name,
          content: this.contentConcat(content),
        }),
      });
      if (response.ok)
        this.#tempData.set(name, { content: this.contentConcat(content) });
      else if (!response.ok) location.href = '/login';
    } catch (err) {
      throw new Error('파일을 저장하는 중 오류가 발생했습니다');
    }
  }

  async saveFileAs(newName, content) {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8000/api/file', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token: token,
        },
        body: JSON.stringify({
          name: newName,
          content: this.contentConcat(content),
        }),
      });
      if (response.ok)
        this.#tempData.set(newName, { content: this.contentConcat(content) });
      else if (!response.ok) location.href = '/login';
    } catch (err) {
      throw new Error('파일을 저장하는 중 오류가 발생했습니다');
    }
  }

  contentConcat(content) {
    let concated = '';
    content.forEach((line, index) => {
      concated += line;
      if (index < content.length - 1) concated += '\n';
    });
    return concated;
  }
}
