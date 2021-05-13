class Draggable {
  #draggableElement;
  #controlElement;
  constructor(draggableElement, controlElement) {
    this.#draggableElement = draggableElement;
    this.#controlElement = controlElement || draggableElement;
    this.#init();
  }

  #init() {
    this.#addEvent();
  }

  #addEvent() {
    const draggableElement = this.#draggableElement;
    const controlElement = this.#controlElement;
    controlElement.addEventListener('mousedown', function (e) {
      e.preventDefault();

      let shiftX = e.clientX - draggableElement.getBoundingClientRect().left;
      let shiftY = e.clientY - draggableElement.getBoundingClientRect().top;
      onMouseMove(e);

      document.addEventListener('mousemove', onMouseMove);
      controlElement.addEventListener('mouseup', onMouseUp);

      function onMouseMove(e) {
        draggableElement.style.left = e.pageX - shiftX + 'px';
        draggableElement.style.top = e.pageY - shiftY + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        controlElement.removeEventListener('mouseup', onMouseUp);
      }
    });
  }

  getElement() {
    return this.#draggableElement;
  }
}
