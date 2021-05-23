class Menu {
  #saveButton = document.querySelector('.l-save-button');
  #newButton = document.querySelector('.l-new-button');
  #saveAsButton = document.querySelector('.l-saveAs-button');

  getSaveButtonElement() {
    return this.#saveButton;
  }

  getNewButtonElement() {
    return this.#newButton;
  }

  getSaveAsButtonElement() {
    return this.#saveAsButton;
  }

  setSaveButtonDisable() {
    this.#saveButton.classList.remove('t-save-button');
    this.#saveButton.classList.add('t-save-button-disable');
    this.#saveButton.setAttribute('disable', true);
  }

  setSaveButtonAvailable() {
    this.#saveButton.classList.remove('t-save-button-disable');
    this.#saveButton.classList.add('t-save-button');
    this.#saveButton.setAttribute('disable', false);
  }
}
