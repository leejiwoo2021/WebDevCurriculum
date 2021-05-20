class Editor {
  #editorElement = document.querySelector('#editor');
  #storage;
  #explorer;
  #menu;
  #tempData = new Map();

  setExplorer(explorer) {
    this.#explorer = explorer;
  }

  setMenu(menu) {
    this.#menu = menu;
  }

  setStorage(storage) {
    this.#storage = storage;
  }

  init() {
    this.#addChangeEvent();
  }

  showFile(name) {
    let fileData = this.#tempData.has(name)
      ? this.#tempData.get(name)
      : this.#storage.getFile(name);
    if (fileData === null) fileData = [''];
    this.#editorElement.innerHTML = '';
    fileData.forEach((text) => {
      this.#editorElement.appendChild(new Line(text).getElement());
    });
  }

  saveTemp() {
    const currentFileName = this.#explorer.getActiveFileName();
    if (currentFileName) {
      const content = this.getContent();
      this.#tempData.set(currentFileName, content);
    }
  }

  getTemp(key) {
    return this.#tempData.get(key);
  }

  removeTemp(key) {
    this.#tempData.delete(key);
  }

  getContent() {
    return [...this.#editorElement.children].map(
      (element) => element.innerHTML
    );
  }

  #addChangeEvent() {
    const tempData = this.#tempData;
    const explorer = this.#explorer;
    const storage = this.#storage;
    const menu = this.#menu;
    const editor = this;
    this.#editorElement.addEventListener('keyup', function (e) {
      editor.saveTemp();
      const activeFileName = explorer.getActiveFileName();
      const savedFile = storage.getFile(activeFileName);
      const tempedFile = tempData.get(activeFileName);
      if (savedFile && tempedFile && editor.equals(savedFile, tempedFile)) {
        menu.setSaveButtonDisable();
        explorer.setButtonStateSaved();
      } else {
        menu.setSaveButtonAvailable();
        explorer.setButtonStateNotSaved();
      }
    });
  }

  equals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;

    return true;
  }
}
