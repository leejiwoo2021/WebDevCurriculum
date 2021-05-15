class Icon {
  #name;
  #src;
  #position = {
    top: Math.floor(Math.random() * 500),
    left: Math.floor(Math.random() * 800),
  };
  #iconElement;
  constructor(name, src) {
    this.#name = name;
    this.#src = src;
    this.#init();
  }

  #init() {
    this.#cloneTemplate();
    this.#iconElement = new Draggable(this.#iconElement).getElement();
  }

  #cloneTemplate() {
    const iconTemplate = document.querySelector('#template-icon');
    const iconClone = document.importNode(iconTemplate.content, true);

    this.#iconElement = iconClone.querySelector('.icon');

    const iconImgElement = this.#iconElement.querySelector('.icon-image');
    const iconNameElement = this.#iconElement.querySelector('.icon-name');

    this.#iconElement.style.top = this.#position.top + 'px';
    this.#iconElement.style.left = this.#position.left + 'px';

    iconImgElement.setAttribute('src', this.#src);
    iconNameElement.innerText = this.#name;
  }

  getElement() {
    return this.#iconElement;
  }
}
