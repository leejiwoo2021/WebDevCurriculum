class Window {
  #name;
  #windowElement;
  #windowBar;
  #windowCloseButton;
  constructor(name) {
    this.#name = name;
    this.#init();
  }

  #init() {
    this.#cloneTemplate();
    this.#addEvent();
  }

  #cloneTemplate() {
    const windowTemplate = document.getElementById('template-window');
    const windowClone = document.importNode(windowTemplate.content, true);

    this.#windowElement = windowClone.querySelector('.window');
    this.#windowBar = windowClone.querySelector('.window-bar');
    const windowTitle = windowClone.querySelector('p');

    windowTitle.innerText = this.#name;
    this.#windowCloseButton = windowClone.querySelector('.window-close-button');
  }

  #addEvent() {
    this.#addDragEvent();
    this.#addCloseEvent();
  }

  #addDragEvent() {
    this.#windowElement = new Draggable(
      this.#windowElement,
      this.#windowBar
    ).getElement();
  }

  #addCloseEvent() {
    const windowElement = this.#windowElement;
    this.#windowCloseButton.addEventListener('click', function (e) {
      windowElement.remove();
    });
  }

  getElement() {
    return this.#windowElement;
  }
}
