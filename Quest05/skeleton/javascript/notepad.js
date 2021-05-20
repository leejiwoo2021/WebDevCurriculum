class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  #explorer = new Explorer();
  #editor = new Editor();
  #menu = new Menu();
  #storage = new Storage();

  constructor() {
    this.#menu.setEditor(this.#editor);
    this.#menu.setExplorer(this.#explorer);
    this.#menu.setStorage(this.#storage);

    this.#explorer.setEditor(this.#editor);
    this.#explorer.setMenu(this.#menu);
    this.#explorer.setStorage(this.#storage);

    this.#editor.setExplorer(this.#explorer);
    this.#editor.setStorage(this.#storage);
    this.#editor.setMenu(this.#menu);

    this.#editor.init();
    this.#explorer.init();
    this.#menu.init();
  }
}
