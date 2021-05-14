class Line {
  #lineElement;

  constructor() {
    this.#init();
  }

  #init() {
    this.#createLineElement();
    this.#addEvent();
  }

  #createLineElement() {
    const lineTemplate = document.querySelector('#template-editor-line');
    const lineClone = document.importNode(lineTemplate.content, true);
    this.#lineElement = lineClone.querySelector('p');
  }

  #addEvent() {
    this.#addClickEvent();
    this.#addKeydownEvent();
  }

  #addClickEvent() {
    const lineElement = this.#lineElement;
    lineElement.addEventListener('click', function (e) {
      lineElement.focus();
    });
  }

  #addKeydownEvent() {
    const lineElement = this.#lineElement;
    let meta = false;

    lineElement.addEventListener('keydown', function (e) {
      const key = e.key;

      switch (key) {
        case 'Backspace': {
          const currentText = lineElement.innerHTML;
          lineElement.innerHTML = currentText.substr(0, currentText.length - 1);
          break;
        }
        case 'Meta': {
          meta = true;
          break;
        }
        case 'Enter': {
          break;
        }
        default: {
          if (!meta) {
            lineElement.innerHTML += key;
          }
        }
      }

      lineElement.addEventListener('keyup', keyUpHandler);

      function keyUpHandler(e) {
        const key = e.key;
        switch (key) {
          case 'Meta':
            meta = false;
        }
        lineElement.removeEventListener('keyup', keyUpHandler);
      }
    });
  }

  getElement() {
    return this.#lineElement;
  }
}
