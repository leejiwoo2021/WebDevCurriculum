class Menu {
  #saveButton = document.querySelector('.l-save-button');
  #newButton = document.querySelector('.l-new-button');
  #saveAsButton = document.querySelector('.l-saveAs-button');
  #explorer;
  #editor;
  #storage;

  setEditor(editor) {
    this.#editor = editor;
  }

  setExplorer(explorer) {
    this.#explorer = explorer;
  }

  setStorage(storage) {
    this.#storage = storage;
  }

  init() {
    this.#addNewFileEvent();
    this.#addSaveEvent();
    this.#addSaveAsEvent();
  }

  #addSaveEvent() {
    const explorer = this.#explorer;
    const editor = this.#editor;
    const menu = this;
    const storage = this.#storage;
    this.#saveButton.addEventListener('click', function () {
      const fileName = explorer.getActiveFileName();
      if (fileName) {
        const contents = editor.getContent();
        storage.saveFile(fileName, contents);
        menu.setSaveButtonDisable();
        explorer.setButtonStateSaved();
      }
    });
  }

  #addNewFileEvent() {
    const explorer = this.#explorer;
    this.#newButton.addEventListener('click', function () {
      const fileName = prompt('파일 이름을 입력하세요');
      const fileNameList = Storage.getFileNameList();

      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }

      if (fileNameList.indexOf(fileName) !== -1) {
        alert('중복된 이름이 존재합니다');
        return;
      }

      explorer.appendButton(fileName);
    });
  }

  #addSaveAsEvent() {
    const explorer = this.#explorer;
    const editor = this.#editor;
    const storage = this.#storage;

    this.#saveAsButton.addEventListener('click', function () {
      const fileName = prompt('파일 이름을 입력하세요');

      if (!fileName) return;

      const contents = editor.getContent();
      storage.saveFileAs(fileName, contents);
      editor.removeTemp(fileName);
      explorer.appendButton(fileName);
    });
  }

  setSaveButtonDisable() {
    this.#saveButton.classList.remove('t-save-button');
    this.#saveButton.classList.add('t-save-button-disable');
    this.#saveButton.setAttribute('disable', true);
  }

  setSaveButtonAvailable() {
    this.#saveButton.classList.remove('t-save-button-disable');
    this.#saveButton.classList.add('t-save-button');
    this.#saveButton.setAttribute('disable', false);
  }
}
