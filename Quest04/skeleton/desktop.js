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
      this.#iconList.push(new Icon(index, './file.png'));
  }

  #render(){
    const desktopElement = this.#desktopElement;
    this.#iconList.forEach((icon) => {
      const iconElement = icon.getElement();
      desktopElement.appendChild(iconElement);
    })

    this.#bodyElement.appendChild(desktopElement);
 
  }

  getElement(){
    return this.#desktopElement;
  }

}
