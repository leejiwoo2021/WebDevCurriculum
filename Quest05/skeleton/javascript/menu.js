class Menu {
  #saveButton = document
    .querySelector('.l-menu-container.t-menu-container')
    .querySelector('button');
  #storage = new Storage();
  constructor() {
    this.#addSaveEvent();
  }

  #addSaveEvent() {
    const storage = this.#storage;
    this.#saveButton.addEventListener('click', function () {
      const fileName = Explorer.getActiveFileName();
      if (fileName) {
        const contents = Editor.getContent();
        storage.saveFile(fileName, contents);
      }
    });
  }
}
