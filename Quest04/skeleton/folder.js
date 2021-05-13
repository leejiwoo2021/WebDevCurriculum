class Folder {
  #name;
  #folderElement;
  constructor(name, src) {
    this.#name = name;
    this.#folderElement = new Icon(name, src).getElement();
    this.#init();
  }

  #init() {
    this.#folderElement = new Openable(
      this.#folderElement,
      this.#name
    ).getElement();
  }

  getElement() {
    return this.#folderElement;
  }
}
