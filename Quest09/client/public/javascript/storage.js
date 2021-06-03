class Storage {
  #tempData = new Map();

  async getFileNameList() {
    let response = await fetch('http://localhost:8000/api/info');
    response = response.json();

    return response;
  }

  // hasFile(name) {
  //   if (localStorage.getItem(name) === null) return false;
  //   return true;
  // }

  async getFile(name) {
    if (this.#tempData.has(name)) return this.#tempData.get(name);
    let response = await fetch(`http://localhost:8000/api/file?name=${name}`);
    response = await response.json();

    this.#tempData.set(name, response);
    return response;
  }

  // removeFile(name) {
  //   if (localStorage.getItem(name) === null) return false;
  //   else {
  //     localStorage.removeItem(name);
  //     return true;
  //   }
  // }

  async saveFile(name, content) {
    await fetch('http://localhost:8000/api/file', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        content: this.contentConcat(content),
      }),
    });

    this.#tempData.set(name, { content: this.contentConcat(content) });
  }

  async saveFileAs(newName, content) {
    await fetch('http://localhost:8000/api/file', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        content: this.contentConcat(content),
      }),
    });

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
}
