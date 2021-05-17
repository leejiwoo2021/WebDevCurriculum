class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  #storage = new Storage();
  #menu = new Menu();
  #explorer = new Explorer();
  #editor = new Editor();

  constructor() {
    this.#explorer.setFileList(this.#storage.getFileNameList());
  }
}
