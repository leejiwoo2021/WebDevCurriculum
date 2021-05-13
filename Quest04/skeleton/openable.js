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
    this.#openableElement.addEventListener('dblclick', function (e) {
      // const windowLayer = new Window(name, desktopIndex);
      // windowLayer.setWindow();
    });
  }

  getElement() {
    return this.#openableElement;
  }
}
