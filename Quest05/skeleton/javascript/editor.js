class Editor {
  #editorElement = document.querySelector('#editor');

  showFile(name) {
    const fileData = Storage.getFile(name);
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
