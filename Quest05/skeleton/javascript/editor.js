class Editor {
  #editorElement = document.querySelector('#editor');
  #tempData = new Map();

  constructor() {
    this.#addChangeEvent();
  }

  showFile(name) {
    const fileData = this.#tempData.has(name)
      ? this.#tempData.get(name)
      : Storage.getFile(name);
    this.#editorElement.innerHTML = '';
    fileData.forEach((text) => {
      this.#editorElement.appendChild(new Line(text).getElement());
    });
  }

  saveTemp() {
    const currentFileName = Explorer.getActiveFileName();
    if (currentFileName) {
      const content = Editor.getContent();
      this.#tempData.set(currentFileName, content);
    }
  }

  getTemp(key) {
    return this.#tempData.get(key);
  }

  static getContent() {
    return [...document.querySelector('#editor').children].map(
      (element) => element.innerHTML
    );
  }

  #addChangeEvent() {
    const tempData = this.#tempData;
    const editor = this;
    this.#editorElement.addEventListener('keyup', function (e) {
      editor.saveTemp();
      const savedFile = Storage.getFile(Explorer.getActiveFileName());
      const tempedFile = tempData.get(Explorer.getActiveFileName());
      if (Editor.equals(savedFile, tempedFile)) {
        Menu.setSaveButtonDisable();
        Explorer.setButtonStateSaved();
      } else {
        Menu.setSaveButtonAvailable();
        Explorer.setButtonStateNotSaved();
      }
    });
  }

  static equals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;

    return true;
  }
}
