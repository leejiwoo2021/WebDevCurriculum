class Line {
  #lineElement!: Element;

  constructor(text: string) {
    this.createLineElement(text);
  }

  private createLineElement(text: string) {
    const lineTemplate = document.querySelector('#template-editor-line') as HTMLTemplateElement;
    const lineClone = document.importNode(lineTemplate.content, true);
    const newLineElement = lineClone.querySelector('p');
    if (newLineElement) {
      this.#lineElement = newLineElement;
      this.#lineElement.innerHTML = text;
    }
  }

  getElement(): Element {
    return this.#lineElement;
  }
}
