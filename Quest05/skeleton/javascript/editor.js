class Editor {
  #editorElement = document.querySelector('#editor');
  constructor() {
    this.#init();
  }
  #init() {
    this.#addEvent();
    this.#initNewLine();
  }

  #addEvent() {
    this.#addkeydownEvent();
  }

  #initNewLine() {
    const newLine = new Line().getElement();
    this.#editorElement.appendChild(newLine);
  }

  #addkeydownEvent() {
    document.addEventListener('keydown', function (e) {
      const activeElement = document.activeElement;
      const key = e.key;

      switch (key) {
        case 'Enter':
          if (activeElement.className === 'l-editor-line t-editor-line') {
            const newLine = new Line().getElement();
            activeElement.after(newLine);
            newLine.focus();
          }
          break;
      }
    });
  }
}
