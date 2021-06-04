class Line {
  #lineElement;

  constructor(text) {
    this.#createLineElement(text);
  }

  #createLineElement(text) {
    const lineTemplate = document.querySelector('#template-editor-line');
    const lineClone = document.importNode(lineTemplate.content, true);
    this.#lineElement = lineClone.querySelector('p');
    this.#lineElement.innerHTML = text;
  }

  getElement() {
    return this.#lineElement;
  }
}
