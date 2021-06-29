class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  #explorer = new Explorer();
  #editor = new Editor();
  #menu = new Menu();
  #api = new Api();
  #dom = document.querySelector('body');

  constructor() {
    this.addFileClickEvent();
    this.addEditorChangeEvent();
    this.addSaveEvent();
    this.addNewFileEvent();
    this.addSaveAsEvent();
  }

  addFileClickEvent(): void {
    this.#dom?.addEventListener('openFile', async (e) => {
      const customEvent = e as CustomEvent;
      const fileName = customEvent.detail.fileName;
      const currentFileName = this.#explorer.getActiveFileName();
      if (fileName === currentFileName) return;

      this.#editor.setContentTemp(currentFileName);
      this.#explorer.setButtonActive(fileName);

      const response = await this.#api.getFile(fileName);
      const savedContent = response.data.file.content;
      this.#editor.showContent(fileName, savedContent);
      if (this.#editor.getTemp(fileName)) {
        const savedFile = response.data.file.content;
        const tempedFile = this.#editor.getTemp(fileName);
        if (savedFile && tempedFile && this.#editor.isEqual(savedFile, tempedFile)) this.#menu.setSaveButtonDisable();
        else this.#menu.setSaveButtonAvailable();
      } else {
        this.#menu.setSaveButtonDisable();
      }
    });
  }

  addEditorChangeEvent(): void {
    this.#dom?.addEventListener('editorChange', () => {
      const activeFileName = this.#explorer.getActiveFileName();
      this.#editor.setContentTemp(activeFileName);

      const savedFile = this.#api.getFileTemp(activeFileName);
      const tempedFile = this.#editor.getTemp(activeFileName);
      if (savedFile && this.#editor.isEqual(savedFile, tempedFile)) {
        this.#menu.setSaveButtonDisable();
        this.#explorer.setStateSaved();
      } else {
        this.#menu.setSaveButtonAvailable();
        this.#explorer.setStateNotSaved();
      }
    });
  }

  addSaveEvent(): void {
    this.#dom?.addEventListener('saveFile', async () => {
      const fileName = this.#explorer.getActiveFileName();
      if (fileName) {
        const contents = this.#editor.getContent();
        await this.#api.saveFile(fileName, contents);
        this.#menu.setSaveButtonDisable();
        this.#explorer.setStateSaved();
      }
    });
  }

  addNewFileEvent(): void {
    this.#dom?.addEventListener('newFile', async () => {
      const fileName = prompt('파일 이름을 입력하세요');
      const response = await this.#api.getFileNameList();

      const fileNameList = response.data.info.list;
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      if (fileNameList?.indexOf(fileName) !== -1) {
        alert('중복된 이름이 존재합니다');
        return;
      }
      await this.#api.saveFileAs(fileName, ['']);
      this.#explorer.addFileButton(fileName);
    });
  }

  addSaveAsEvent(): void {
    this.#dom?.addEventListener('saveAsFile', async () => {
      const fileName = prompt('파일 이름을 입력하세요');
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      const contents = this.#editor.getContent();
      await this.#api.saveFileAs(fileName, contents);
      this.#editor.removeTemp(fileName);
      this.#explorer.addFileButton(fileName);
    });
  }
}
