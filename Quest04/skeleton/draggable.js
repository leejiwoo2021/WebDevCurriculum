class Draggable {
  #draggableElement;
  constructor(element) {
    this.#draggableElement = element;
    this.#init();
  }

  #init() {
    this.#addEvent();
  }

  #addEvent() {
    const draggableElement = this.#draggableElement;
    draggableElement.addEventListener('mousedown', function (e) {
      e.preventDefault();

      let shiftX = e.clientX - draggableElement.getBoundingClientRect().left;
      let shiftY = e.clientY - draggableElement.getBoundingClientRect().top;
      onMouseMove(e);

      document.addEventListener('mousemove', onMouseMove);
      draggableElement.addEventListener('mouseup', onMouseUp);

      function onMouseMove(e) {
        draggableElement.style.left = e.pageX - shiftX + 'px';
        draggableElement.style.top = e.pageY - shiftY + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        draggableElement.removeEventListener('mouseup', onMouseUp);
      }
    });
  }

  getElement() {
    return this.#draggableElement;
  }
}
