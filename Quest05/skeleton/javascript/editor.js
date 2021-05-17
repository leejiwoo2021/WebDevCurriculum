class Editor {
  #editorElement = document.querySelector('#editor');
  #storage = new Storage();

  constructor() {}

  #initNewLine() {
    const newLine = new Line().getElement();
    this.#editorElement.appendChild(newLine);
  }

  showFile(name) {
    const fileData = this.#storage.getFile(name);
    this.#editorElement.innerHTML = '';
    fileData.forEach((text) => {
      this.#editorElement.appendChild(new Line(text).getElement());
    });
  }

  static getContent() {
    return [...document.querySelector('#editor').children].map(
      (element) => element.innerHTML
    );
  }
}
