class Explorer {
  #navElement = document.querySelector('.l-nav-container.t-nav-contaier');
  #api = new Api();

  constructor() {
    (async () => {
      const response = await this.#api.getFileNameList();
      response?.data?.info?.list?.forEach((fileName: string) => {
        this.addFileButton(fileName);
      });
      if (response?.data?.info?.lastFile) this.openFile(response.data.info.lastFile);
    })();
  }

  addFileButton(fileName: string): void {
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

  createButtonElement(name: string, state: string): Element {
    const buttonTemplate = document.querySelector('#template-nav-button') as HTMLTemplateElement;
    const buttonClone = document.importNode(buttonTemplate.content, true);
    const buttonElement = buttonClone.querySelector('.l-nav-button.t-nav-button') as Element;

    const buttonTitle = buttonElement?.querySelector('h2');
    if (buttonTitle) buttonTitle.innerText = name;

    const buttonState = buttonElement?.querySelector('div');
    if (buttonState) buttonState.innerText = state;

    return buttonElement;
  }

  appendNewButton(buttonElement: Element) {
    this.#navElement?.appendChild(buttonElement);
  }

  setButtonActive(name: string): void {
    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const fileName = button.querySelector('h2')?.innerHTML;
        if (name === fileName) {
          button.classList.remove('t-nav-button');
          button.classList.add('t-nav-button-active');
        } else {
          button.classList.remove('t-nav-button-active');
          button.classList.add('t-nav-button');
        }
      });
  }

  getButtonNameList(): string[] {
    const result: string[] = [];
    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const fileName = button.querySelector('h2')?.innerHTML;
        if (fileName) result.push(fileName);
      });

    return result;
  }

  getActiveFileName(): string {
    let result = '';

    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const fileName = button.querySelector('h2')?.innerHTML;
        if (button.classList.contains('t-nav-button-active') && fileName) result = fileName;
      });

    return result;
  }

  setStateNotSaved(): void {
    const activeName = this.getActiveFileName();
    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const fileName = button.querySelector('h2')?.innerHTML;
        if (activeName === fileName) {
          const stateLabel = button.querySelector('div');
          if (stateLabel) stateLabel.innerHTML = 'Not Saved';
        }
      });
  }

  setStateSaved(): void {
    const activeName = this.getActiveFileName();
    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const fileName = button.querySelector('h2')?.innerHTML;
        if (activeName === fileName) {
          const stateLabel = button.querySelector('div');
          if (stateLabel) stateLabel.innerHTML = '';
        }
      });
  }

  openFile(name: string) {
    if (this.#navElement)
      [...this.#navElement.children].forEach((button) => {
        const buttonElement = button as HTMLButtonElement;
        const fileName = buttonElement.querySelector('h2')?.innerHTML;
        if (fileName === name) buttonElement.click();
      });
  }
}
