class Explorer {
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');
  #editor;
  #menu;
  #storage;

  setEditor(editor) {
    this.#editor = editor;
  }

  setMenu(menu) {
    this.#menu = menu;
  }

  setStorage(storage) {
    this.#storage = storage;
  }

  init() {
    this.#setFileButtons();
  }

  #setFileButtons() {
    this.#storage.getFileNameList().forEach((name) => {
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
    const menu = this.#menu;
    const storage = this.#storage;
    const explorer = this;

    buttonElement.addEventListener('click', function () {
      if (buttonElement.classList.contains('t-nav-button')) {
        editor.setContentTemp();
        explorer.setButtonActive(name);
        editor.showContent(name);
        if (editor.getTemp(name)) {
          const savedFile = storage.getFile(explorer.getActiveFileName());
          const tempedFile = editor.getTemp(explorer.getActiveFileName());
          if (savedFile && tempedFile && editor.isEqual(savedFile, tempedFile))
            menu.setSaveButtonDisable();
          else menu.setSaveButtonAvailable();
        } else {
          menu.setSaveButtonDisable();
        }
      }
    });

    return buttonElement;
  }

  appendNewButton(name) {
    const buttonList = this.getButtonNameList();
    if (buttonList.indexOf(name) === -1) {
      this.#navElement.appendChild(this.#createButtonElement(name, ''));
    }
  }

  setButtonActive(name) {
    [...this.#navElement.children].forEach((button) => {
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

  getButtonNameList() {
    const result = new Array();
    [...this.#navElement.children].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      result.push(fileName);
    });

    return result;
  }

  getActiveFileName() {
    let result;

    [...this.#navElement.children].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (button.classList.contains('t-nav-button-active')) result = fileName;
    });

    return result;
  }

  setStateNotSaved() {
    const activeName = this.getActiveFileName();
    [...this.#navElement.children].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (activeName === fileName) {
        button.querySelector('div').innerHTML = 'Not Saved';
      }
    });
  }

  setStateSaved() {
    const activeName = this.getActiveFileName();
    [...this.#navElement.children].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (activeName === fileName) {
        button.querySelector('div').innerHTML = '';
      }
    });
  }
}
