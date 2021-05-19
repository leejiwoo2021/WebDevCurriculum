class Menu {
  #saveButton = document.querySelector('.l-save-button');
  #newButton = document.querySelector('.l-new-button');
  #saveAsButton = document.querySelector('.l-saveAs-button');
  #explorer;
  #editor;

  constructor(explorer, editor) {
    this.#explorer = explorer;
    this.#editor = editor;
    this.#addSaveEvent();
    this.#addNewFileEvent();
    this.#addSaveAsEvent();
  }

  #addSaveEvent() {
    this.#saveButton.addEventListener('click', function () {
      const fileName = Explorer.getActiveFileName();
      if (fileName) {
        const contents = Editor.getContent();
        Storage.saveFile(fileName, contents);
        Menu.setSaveButtonDisable();
        Explorer.setButtonStateSaved();
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
    this.#saveAsButton.addEventListener('click', function () {
      const fileName = prompt('파일 이름을 입력하세요');

      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }

      // 덮어씌우기
      // if (fileNameList.indexOf(fileName) !== -1) {
      //   alert('중복된 이름이 존재합니다');
      //   return;
      // }

      const contents = Editor.getContent();
      Storage.saveFileAs(fileName, contents);
      editor.removeTemp(fileName);
      explorer.appendButton(fileName);
    });
  }

  static setSaveButtonDisable() {
    const saveButton = document.querySelector('.l-save-button');

    saveButton.classList.remove('t-save-button');
    saveButton.classList.add('t-save-button-disable');
    saveButton.setAttribute('disable', true);
  }

  static setSaveButtonAvailable() {
    const saveButton = document.querySelector('.l-save-button');

    saveButton.classList.remove('t-save-button-disable');
    saveButton.classList.add('t-save-button');
    saveButton.setAttribute('disable', false);
  }
}
