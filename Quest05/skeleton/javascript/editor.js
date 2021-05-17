class Editor {
  #editorElement = document.querySelector('#editor');
  #menu = new Menu();

  constructor() {
    this.#init();
  }
  #init() {
    this.#initNewLine();
  }

  #initNewLine() {
    const newLine = new Line().getElement();
    this.#editorElement.appendChild(newLine);
  }
}
