class Window {
  #name;
  #windowElement;
  #windowBar;
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
    const windowCloseButton = windowClone.querySelector('.window-close-button');
  }

  #addEvent() {
    this.#addDragEvent();
  }

  #addDragEvent() {
    this.#windowElement = new Draggable(
      this.#windowElement,
      this.#windowBar
    ).getElement();
  }

  getElement() {
    return this.#windowElement;
  }
}
