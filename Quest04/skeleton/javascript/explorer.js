class Explorer {
  #bodyElement = document.querySelector('body');
  #explorerElement;
  #desktopElementList = new Array();
  #buttonElementList = new Array();
  constructor() {
    this.#init();
  }

  #init() {
    this.#cloneTemplate();
    this.#render();
  }

  #cloneTemplate() {
    const explorerTemplate = document.querySelector('#template-explorer');
    const explorerClone = document.importNode(explorerTemplate.content, true);

    this.#explorerElement = explorerClone.querySelector('.explorer');
  }

  #render() {
    this.#bodyElement.appendChild(this.#explorerElement);
  }

  addExplorerButton(desktopElement) {
    this.#desktopElementList.push(desktopElement);
    const explorerButton = new ExplorerButton(
      this.#desktopElementList,
      this.#desktopElementList.length - 1
    );

    this.#explorerElement.appendChild(explorerButton.getElement());
  }
}

class ExplorerButton {
  #buttonElement;
  #desktopElementList;
  #index;
  constructor(desktopElementList, index) {
    this.#desktopElementList = desktopElementList;
    this.#index = index;
    this.#init();
  }

  #init() {
    this.#cloneTemplate();
    this.#addEvent();
  }

  #cloneTemplate() {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('explorer-button');
    buttonElement.innerHTML = 'Desktop' + this.#index;

    this.#buttonElement = buttonElement;
  }

  #addEvent() {
    const explorer = this;
    this.#buttonElement.addEventListener('click', function (e) {
      explorer.#desktopElementList.forEach((desktop, index) => {
        if (index === explorer.#index) {
          desktop.classList.remove('desktop-hide');
          desktop.classList.add('desktop-active');
        } else {
          desktop.classList.remove('desktop-active');
          desktop.classList.add('desktop-hide');
        }
      });
    });
  }

  getElement() {
    return this.#buttonElement;
  }
}
