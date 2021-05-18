class Menu {
  #saveButton = document
    .querySelector('.l-menu-container.t-menu-container')
    .querySelector('button');
  constructor() {
    this.#addSaveEvent();
  }

  #addSaveEvent() {
    this.#saveButton.addEventListener('click', function () {
      const fileName = Explorer.getActiveFileName();
      if (fileName) {
        const contents = Editor.getContent();
        Storage.saveFile(fileName, contents);
        Menu.setButtonDisable();
        Explorer.setButtonStateSaved();
      }
    });
  }

  static setButtonDisable() {
    const saveButton = document
      .querySelector('.l-menu-container.t-menu-container')
      .querySelector('button');

    saveButton.classList.remove('t-menu-button');
    saveButton.classList.add('t-menu-button-disable');
    saveButton.setAttribute('disable', true);
  }

  static setButtonAvailable() {
    const saveButton = document
      .querySelector('.l-menu-container.t-menu-container')
      .querySelector('button');

    saveButton.classList.remove('t-menu-button-disable');
    saveButton.classList.add('t-menu-button');
    saveButton.setAttribute('disable', false);
  }
}
