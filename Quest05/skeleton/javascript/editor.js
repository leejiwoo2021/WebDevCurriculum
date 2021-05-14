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

      if (activeElement.className === 'l-editor-line t-editor-line') {
        switch (key) {
          case 'Enter': {
            const newLine = new Line().getElement();
            activeElement.after(newLine);
            newLine.focus();
            break;
          }
          case 'ArrowUp': {
            const previousLine = activeElement.previousElementSibling;
            if (previousLine) previousLine.focus();
            break;
          }
          case 'ArrowDown': {
            const nextLine = activeElement.nextElementSibling;
            if (nextLine) nextLine.focus();
            break;
          }
        }
      }
    });
  }
}
