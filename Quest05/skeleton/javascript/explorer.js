class Explorer {
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');
  #editor;

  setEditor(editor) {
    this.#editor = editor;
  }

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

    buttonElement.addEventListener('click', function () {
      if (buttonElement.classList.contains('t-nav-button')) {
        editor.saveTemp();
        Explorer.setButtonActive(name);
        editor.showFile(name);
        if (editor.getTemp(name)) {
          const savedFile = Storage.getFile(Explorer.getActiveFileName());
          const tempedFile = editor.getTemp(Explorer.getActiveFileName());
          if (savedFile && tempedFile && Editor.equals(savedFile, tempedFile)) {
            Menu.setSaveButtonDisable();
          } else {
            Menu.setSaveButtonAvailable();
          }
        } else {
          Menu.setSaveButtonDisable();
        }
      }
    });

    return buttonElement;
  }

  appendButton(name) {
    document
      .querySelector('.l-nav-container.t-nav-contaier')
      .appendChild(this.#createButtonElement(name, ''));
  }

  static setButtonActive(name) {
    [
      ...document.querySelector('.l-nav-container.t-nav-contaier').children,
    ].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (name === fileName) {
        button.classList.remove('t-nav-button');
        button.classList.add('t-nav-button-active');
      } else {
        button.classList.remove('t-nav-button-active');
        button.classList.add('t-nav-button');
      }
    });
  }

  static getActiveFileName() {
    let result;

    [
      ...document.querySelector('.l-nav-container.t-nav-contaier').children,
    ].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (button.classList.contains('t-nav-button-active')) result = fileName;
    });

    return result;
  }

  static setButtonStateNotSaved() {
    const activeName = Explorer.getActiveFileName();
    [
      ...document.querySelector('.l-nav-container.t-nav-contaier').children,
    ].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (activeName === fileName) {
        button.querySelector('div').innerHTML = 'Not Saved';
      }
    });
  }

  static setButtonStateSaved() {
    const activeName = Explorer.getActiveFileName();
    [
      ...document.querySelector('.l-nav-container.t-nav-contaier').children,
    ].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (activeName === fileName) {
        button.querySelector('div').innerHTML = '';
      }
    });
  }
}
