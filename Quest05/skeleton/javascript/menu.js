class Menu {
  #saveButton = document.querySelector('.l-save-button');
  #newButton = document.querySelector('.l-new-button');
  constructor() {
    this.#addSaveEvent();
    // this.#addNewFileEvent();
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

  // #addNewFileEvent() {
  //   this.#newButton.addEventListener('click', function () {
  //     const fileName = prompt('파일 이름을 입력하세요');
  //     const fileNameList = Storage.getFileNameList();

  //     if (fileNameList.indexOf(fileName) !== -1) {
  //       alert('중복된 이름이 존재합니다');
  //     } else {
  //       //to-do
  //       Explorer.appendButton(fileName);
  //     }
  //   });
  // }

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
