class Storage {
  async getFileNameList() {
    let response = await fetch('http://localhost:8000/api/info');
    response = response.json();

    return response;
  }

  hasFile(name) {
    if (localStorage.getItem(name) === null) return false;
    return true;
  }

  async getFile(name) {
    let response = await fetch(`http://localhost:8000/api/file?name=${name}`);
    response = response.json();

    return response;
  }

  removeFile(name) {
    if (localStorage.getItem(name) === null) return false;
    else {
      localStorage.removeItem(name);
      return true;
    }
  }

  async saveFile(name, content) {
    let concatContent = '';
    content.forEach((line) => {
      concatContent += line + '\n';
    });

    await fetch('http://localhost:8000/api/file', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        content: concatContent,
      }),
    });
  }

  async saveFileAs(newName, content) {
    let concatContent = '';
    content.forEach((line) => {
      concatContent += line + '\n';
    });

    await fetch('http://localhost:8000/api/file', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        content: concatContent,
      }),
    });
  }
}
