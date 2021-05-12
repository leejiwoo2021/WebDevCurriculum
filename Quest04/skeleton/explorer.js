class Explorer {
  #bodyElement = document.querySelector('body');
  #explorerElement;
  #desktopList = new Array();
  #buttonList = new Array();
  constructor() {
    this.#init();
  }

  #init(){
    this.#cloneTemplate();
    this.#render();
  }

  #cloneTemplate(){
    const explorerTemplate = document.querySelector('#template-explorer');
    const explorerClone = document.importNode(explorerTemplate.content, true);
    
    this.#explorerElement = explorerClone.querySelector('.explorer');
  }

  #render(){
    this.#bodyElement.appendChild(this.#explorerElement);
  }

  // add Desktop

  addDesktop(desktopElement){
    this.#desktopList.push(desktopElement);
    this.#cloneButton();
    this.#addButtonEvent();
    this.#explorerElement.appendChild(this.#buttonList[this.#buttonList.length-1]);
  }

  #cloneButton(){
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('explorer-button');
    buttonElement.innerHTML = 'Desktop' + this.#desktopList.length;

    this.#buttonList.push(buttonElement);
  }

  #addButtonEvent(){
    const newButton = this.#buttonList[this.#buttonList.length-1];
    const buttonIndex = this.#buttonList.length-1;
    const explorer = this;

    newButton.addEventListener('click', function(e){
      explorer.#desktopList.forEach((desktop, index) => {
        const desktopElement = desktop.getElement();
        if(index === buttonIndex){
          desktopElement.classList.remove('desktop-hide')
          desktopElement.classList.add('desktop-active');
        }
        else{
          desktopElement.classList.remove('desktop-active')
          desktopElement.classList.add('desktop-hide');
        }
      })
    })
  }

}
