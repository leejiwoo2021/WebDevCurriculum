class Storage {
  static getFileNameList() {
    const result = new Array();
    for (let index = 0; index < localStorage.length; index++)
      result.push(localStorage.key(index));
    return result;
  }

  static hasFile(name) {
    if (localStorage.getItem(name) === null) return false;
    return true;
  }

  static getFile(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  static removeFile(name) {
    if (localStorage.getItem(name) === null) return false;
    else {
      localStorage.removeItem(name);
      return true;
    }
  }

  static saveFile(name, content) {
    localStorage.setItem(name, JSON.stringify(content));
  }

  static saveFileAs(currentName, newName, content) {
    localStorage.setItem(name, JSON.stringify(content));
  }
}
