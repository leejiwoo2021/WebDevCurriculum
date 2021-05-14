class Line {
  #lineElement;

  constructor() {
    this.#init();
  }

  #init() {
    this.#createLineElement();
  }

  #createLineElement() {
    const lineTemplate = document.querySelector('#template-editor-line');
    const lineClone = document.importNode(lineTemplate.content, true);
    this.#lineElement = lineClone.querySelector('p');
  }

  getElement() {
    return this.#lineElement;
  }
}
