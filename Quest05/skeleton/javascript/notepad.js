class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  #explorer = new Explorer();
  #editor = new Editor();
  #menu = new Menu();
  #storage = new Storage();
  #dom = document.querySelector('body');

  constructor() {
    this.addFileButtons();
    this.addEditorChangeEvent();
    this.addSaveEvent();
    this.addNewFileEvent();
    this.addSaveAsEvent();
  }

  addFileButtons() {
    this.#storage.getFileNameList().forEach((fileName) => {
      const fileButton = this.#explorer.createButtonElement(fileName, '');
      this.addFileClickEvent(fileButton);
      this.#explorer.appendNewButton(fileButton);
    });
  }

  addFileClickEvent(fileButton) {
    fileButton.addEventListener('click', () => {
      const fileName = fileButton.querySelector('h2').innerHTML;
      const currentFileName = this.#explorer.getActiveFileName();
      this.#editor.setContentTemp(currentFileName);
      this.#explorer.setButtonActive(fileName);

      const savedContent = this.#storage.getFile(fileName);
      this.#editor.showContent(fileName, savedContent);

      if (this.#editor.getTemp(fileName)) {
        const savedFile = this.#storage.getFile(fileName);
        const tempedFile = this.#editor.getTemp(fileName);
        if (
          savedFile &&
          tempedFile &&
          this.#editor.isEqual(savedFile, tempedFile)
        )
          this.#menu.setSaveButtonDisable();
        else this.#menu.setSaveButtonAvailable();
      } else {
        this.#menu.setSaveButtonDisable();
      }
    });
  }

  addEditorChangeEvent() {
    this.#dom.addEventListener('editorChange', (e) => {
      const activeFileName = this.#explorer.getActiveFileName();
      this.#editor.setContentTemp(activeFileName);

      const savedFile = this.#storage.getFile(activeFileName);
      const tempedFile = this.#editor.getTemp(activeFileName);
      if (
        savedFile &&
        tempedFile &&
        this.#editor.isEqual(savedFile, tempedFile)
      ) {
        this.#menu.setSaveButtonDisable();
        this.#explorer.setStateSaved();
      } else {
        this.#menu.setSaveButtonAvailable();
        this.#explorer.setStateNotSaved();
      }
    });
  }

  addSaveEvent() {
    this.#dom.addEventListener('saveFile', () => {
      const fileName = this.#explorer.getActiveFileName();
      if (fileName) {
        const contents = this.#editor.getContent();
        this.#storage.saveFile(fileName, contents);
        this.#menu.setSaveButtonDisable();
        this.#explorer.setStateSaved();
      }
    });
  }

  addNewFileEvent() {
    this.#dom.addEventListener('newFile', () => {
      const fileName = prompt('파일 이름을 입력하세요');
      const fileNameList = this.#storage.getFileNameList();
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      if (fileNameList.indexOf(fileName) !== -1) {
        alert('중복된 이름이 존재합니다');
        return;
      }
      const newFileButton = this.#explorer.createButtonElement(fileName, '');
      this.addFileClickEvent(newFileButton);
      this.#explorer.appendNewButton(newFileButton);
    });
  }

  addSaveAsEvent() {
    this.#dom.addEventListener('saveAsFile', () => {
      const fileName = prompt('파일 이름을 입력하세요');
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      const contents = this.#editor.getContent();
      this.#storage.saveFileAs(fileName, contents);
      this.#editor.removeTemp(fileName);
      const fileButton = this.#explorer.createButtonElement(fileName, '');
      this.addFileClickEvent(fileButton);
      this.#explorer.appendNewButton(fileButton);
    });
  }
}
