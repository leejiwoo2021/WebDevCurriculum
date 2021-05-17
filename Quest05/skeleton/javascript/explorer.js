class Explorer {
  #storage = new Storage();
  #editor = new Editor();
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');

  constructor() {
    const fileNameList = this.#storage.getNameList();

    fileNameList.forEach((name) => {
      this.#navElement.appendChild(this.#createButtonElement(name, ''));
    });
  }

  #createButtonElement(title, state) {
    const buttonTemplate = document.querySelector('#template-nav-button');
    const buttonClone = document.importNode(buttonTemplate.content, true);
    const buttonElement = buttonClone.querySelector(
      '.l-nav-button.t-nav-button'
    );

    const buttonTitle = buttonElement.querySelector('h2');
    buttonTitle.innerText = title;

    const buttonState = buttonElement.querySelector('div');
    buttonState.innerText = state;

    return buttonElement;
  }

  #addButtonClickEvent() {}
}
