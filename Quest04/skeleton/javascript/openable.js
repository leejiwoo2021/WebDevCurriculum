class Openable {
  #openableElement;
  #name;
  constructor(element, name) {
    this.#openableElement = element;
    this.#name = name;
    this.#init();
  }

  #init() {
    this.#addEvent();
  }

  #addEvent() {
    const name = this.#name;
    const openableElement = this.#openableElement;
    openableElement.addEventListener('dblclick', function (e) {
      const windowElement = new Window(name).getElement();
      openableElement.parentNode.appendChild(windowElement);
    });
  }

  getElement() {
    return this.#openableElement;
  }
}
