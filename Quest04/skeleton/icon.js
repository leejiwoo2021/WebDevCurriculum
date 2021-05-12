class Icon{
  #name;
  #src
  #position = {
    top: Math.floor(Math.random() * 500),
    left: Math.floor(Math.random() * 800),
  };
  #iconElement;
  #iconImg;
  #iconName;
  constructor(iconIndex, src){
    this.#name = 'icon' + iconIndex;
    this.#src = src;
    this.#init();
  }

  #init(){
    this.#cloneTemplate();
  }

  #cloneTemplate(){
    const iconTemplate = document.querySelector('#template-icon');
    const iconClone = document.importNode(iconTemplate.content, true);
  
    this.#iconElement = iconClone.querySelector('.icon');
    this.#iconImg = this.#iconElement.querySelector('.icon-image');
    this.#iconName = this.#iconElement.querySelector('.icon-name');

    this.#iconElement.style.top = this.#position.top + 'px';
    this.#iconElement.style.left = this.#position.left + 'px';

    this.#iconImg.setAttribute('src' , this.#src);

    this.#iconName.innerText = this.#name;
  }


  getElement(){
    return this.#iconElement;
  }
}