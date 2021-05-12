class Desktop {
  #count;
  #bodyElement = document.querySelector('body');
  #desktopElement;
  #iconList = new Array();
  constructor(count, active) {
    this.#count = count;
    this.#init();
  }

  #init(){
    this.#cloneTemplate();
    this.#createIconElements();
    this.#render();
  }

  #cloneTemplate(){
    const desktopTemplate = document.querySelector('#template-desktop');
    const desktopClone = document.importNode(desktopTemplate.content, true);
      
    this.#desktopElement = desktopClone.querySelector('.desktop.desktop-hide');
  }

  #createIconElements(){
    for(let index=0; index<this.#count.common; index++)
      this.#iconList.push(new Icon(index));
  }

  #render(){
    const desktopElement = this.#desktopElement;

    this.#bodyElement.appendChild(desktopElement);
    this.#iconList.forEach((icon) => {
      const iconElement = icon.getElement();
      desktopElement.appendChild(iconElement);
    })
  }

  getElement(){
    return this.#desktopElement;
  }

}
