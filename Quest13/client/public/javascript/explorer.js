class Explorer {
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');
  #storage = new Storage();

  constructor() {
    (async () => {
      const response = await this.#storage.getFileNameList();
      response.data.info.list.forEach((fileName) => {
        this.addFileButton(fileName);
      });
      this.openFile(response.data.info.lastFile);
    })();
  }

  addFileButton(fileName) {
    const fileButton = this.createButtonElement(fileName, '');
    const openEvent = new CustomEvent('openFile', {
      bubbles: true,
      detail: {
        fileName: fileName,
      },
    });

    fileButton.addEventListener('click', () => {
      fileButton.dispatchEvent(openEvent);
    });
    this.appendNewButton(fileButton);
  }

  createButtonElement(name, state) {
    const buttonTemplate = document.querySelector('#template-nav-button');
    const buttonClone = document.importNode(buttonTemplate.content, true);
    const buttonElement = buttonClone.querySelector('.l-nav-button.t-nav-button');

    const buttonTitle = buttonElement.querySelector('h2');
    buttonTitle.innerText = name;

    const buttonState = buttonElement.querySelector('div');
    buttonState.innerText = state;

    return buttonElement;
  }

  appendNewButton(buttonElement) {
    this.#navElement.appendChild(buttonElement);
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

  openFile(name) {
    [...this.#navElement.children].forEach((button) => {
      const fileName = button.querySelector('h2').innerHTML;
      if (fileName === name) button.click();
    });
  }
}
