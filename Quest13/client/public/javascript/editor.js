class Editor {
  #editorElement = document.querySelector('#editor');
  #tempData = new Map();

  constructor() {
    this.#addChangeEvent();
  }

  #addChangeEvent() {
    const changeEvent = new CustomEvent('editorChange', {
      bubbles: true,
    });

    this.#editorElement.addEventListener('keyup', () => {
      this.#editorElement.dispatchEvent(changeEvent);
    });
  }

  getContent() {
    return [...this.#editorElement.children].map((element) => element.innerHTML);
  }

  showContent(fileName, savedContent) {
    let fileData = this.#tempData.has(fileName) ? this.#tempData.get(fileName) : savedContent;
    if (fileData === null) fileData = [''];
    this.#editorElement.innerHTML = '';
    fileData.forEach((text) => {
      this.#editorElement.appendChild(new Line(text).getElement());
    });
  }

  getTemp(key) {
    return this.#tempData.get(key);
  }

  setContentTemp(fileName) {
    if (fileName) {
      const content = this.getContent();
      this.#tempData.set(fileName, content);
    }
  }

  removeTemp(key) {
    this.#tempData.delete(key);
  }

  isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;

    return true;
  }
}
