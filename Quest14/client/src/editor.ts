class Editor {
  #editorElement = document.querySelector('#editor');
  #tempData = new Map();

  constructor() {
    this.addChangeEvent();
  }

  private addChangeEvent(): void {
    const changeEvent = new CustomEvent('editorChange', { bubbles: true });

    this.#editorElement?.addEventListener('keyup', () => {
      this.#editorElement?.dispatchEvent(changeEvent);
    });
  }

  getContent(): string[] {
    if (this.#editorElement) return [...this.#editorElement.children].map((element) => element.innerHTML);
    else return [''];
  }

  showContent(fileName: string, savedContent: string[]): void {
    const fileData = this.#tempData.has(fileName) ? this.#tempData.get(fileName) : savedContent;
    // if (fileData === null) fileData = [''];
    if (this.#editorElement) this.#editorElement.innerHTML = '';
    fileData.forEach((text: string) => {
      this.#editorElement?.appendChild(new Line(text).getElement());
    });
  }

  getTemp(key: string): string[] {
    return this.#tempData.get(key);
  }

  setContentTemp(fileName: string): void {
    if (fileName) {
      const content = this.getContent();
      this.#tempData.set(fileName, content);
    }
  }

  removeTemp(key: string) {
    this.#tempData.delete(key);
  }

  isEqual(arr1: string[], arr2: string[]) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;

    return true;
  }
}
