class Storage {
  getFileNameList() {
    const result = new Array();
    for (let index = 0; index < localStorage.length; index++)
      result.push(localStorage.key(index));
    return result;
  }

  hasFile(name) {
    if (localStorage.getItem(name) === null) return false;
    return true;
  }

  getFile(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  removeFile(name) {
    if (localStorage.getItem(name) === null) return false;
    else {
      localStorage.removeItem(name);
      return true;
    }
  }

  saveFile(name, content) {
    localStorage.setItem(name, JSON.stringify(content));
  }

  saveFileAs(newName, content) {
    localStorage.setItem(newName, JSON.stringify(content));
  }
}
