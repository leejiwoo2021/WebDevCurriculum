class Explorer {
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');
  #editor = new Editor();
  constructor() {}

  setFileList(fileNameList) {
    fileNameList.forEach((name) => {
      this.#navElement.appendChild(this.#createButtonElement(name, ''));
    });
  }

  #createButtonElement(name, state) {
    const buttonTemplate = document.querySelector('#template-nav-button');
    const buttonClone = document.importNode(buttonTemplate.content, true);
    const buttonElement = buttonClone.querySelector(
      '.l-nav-button.t-nav-button'
    );

    const buttonTitle = buttonElement.querySelector('h2');
    buttonTitle.innerText = name;

    const buttonState = buttonElement.querySelector('div');
    buttonState.innerText = state;

    const editor = this.#editor;

    buttonElement.addEventListener('click', function (e) {
      editor.showFile(name);
    });

    return buttonElement;
  }
}
