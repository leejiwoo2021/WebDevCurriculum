class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  #explorer = new Explorer();
  #menu = new Menu(this.#explorer);
  #editor = new Editor();

  constructor() {
    this.#explorer.setEditor(this.#editor);
    this.#explorer.setFileList(Storage.getFileNameList());
  }
}
