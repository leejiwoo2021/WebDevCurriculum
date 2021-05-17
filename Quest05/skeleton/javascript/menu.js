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
      }
    });
  }
}
