class Menu {
  #saveButton = document.querySelector('.l-save-button');
  #newButton = document.querySelector('.l-new-button');
  #saveAsButton = document.querySelector('.l-saveAs-button');

  constructor() {
    this.#addNewEvent();
    this.#addSaveEvent();
    this.#addSaveAsEvent();
  }

  #addNewEvent() {
    const newEvent = new CustomEvent('newFile', {
      bubbles: true,
    });

    this.#newButton.addEventListener('click', () => {
      this.#newButton.dispatchEvent(newEvent);
    });
  }

  #addSaveEvent() {
    const saveEvent = new CustomEvent('saveFile', {
      bubbles: true,
    });

    this.#saveButton.addEventListener('click', () => {
      this.#saveButton.dispatchEvent(saveEvent);
    });
  }

  #addSaveAsEvent() {
    const saveAsEvent = new CustomEvent('saveAsFile', {
      bubbles: true,
    });

    this.#saveAsButton.addEventListener('click', () => {
      this.#saveAsButton.dispatchEvent(saveAsEvent);
    });
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
