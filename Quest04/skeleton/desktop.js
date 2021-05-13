class Desktop {
  #count;
  #bodyElement = document.querySelector('body');
  #desktopElement;
  #active;
  #iconElementList = new Array();
  constructor(count, active) {
    this.#count = count;
    this.#active = active;
    this.#init();
  }

  #init() {
    this.#cloneTemplate();
    this.#createIconElements();
    this.#render();
  }

  #cloneTemplate() {
    const desktopTemplate = document.querySelector('#template-desktop');
    const desktopClone = document.importNode(desktopTemplate.content, true);

    this.#desktopElement = desktopClone.querySelector('.desktop.desktop-hide');

    if (this.#active) {
      this.#desktopElement.classList.add('desktop-active');
      this.#desktopElement.classList.remove('desktop-hide');
    }
  }

  #createIconElements() {
    for (let index = 0; index < this.#count.common; index++)
      this.#iconElementList.push(
        new Icon(`icon ${index}`, './file.png').getElement()
      );
  }

  #render() {
    const desktopElement = this.#desktopElement;
    this.#iconElementList.forEach((iconElement) => {
      desktopElement.appendChild(iconElement);
    });

    this.#bodyElement.appendChild(desktopElement);
  }

  getElement() {
    return this.#desktopElement;
  }
}
