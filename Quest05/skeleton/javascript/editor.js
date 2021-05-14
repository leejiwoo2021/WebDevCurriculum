class Editor {
  #editorElement = document.querySelector('#editor');
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
