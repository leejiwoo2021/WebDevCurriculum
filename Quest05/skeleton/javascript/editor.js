class Editor{
  #editorElement = document.querySelector('#editor');
  constructor(){
    this.#init();
  }

  #init(){
    this.#addEvent();
    this.#addNewLine();
  }

  #addEvent(){
    this.#addKeydownEvent();
  };

  #addKeydownEvent(){
    const editor = this;
    document.addEventListener('keydown', function(e){
      if(e.key === 'Enter')
        editor.#addNewLine();
    })
  }

  #addNewLine(){
    const newLine = new Line().getElement();
    this.#editorElement.appendChild(newLine);
    newLine.focus();
  }

}

class Line{
  #lineElement;

  constructor(){
    this.#init();
  }

  #init(){
    this.#createLineElement();
    this.#addEvent();
  }

  #createLineElement(){
    const lineTemplate = document.querySelector('#template-editor-line');
    const lineClone = document.importNode(lineTemplate.content, true);
    this.#lineElement = lineClone.querySelector('p');
  }

  #addEvent(){
    this.#addClickEvent();
    this.#addKeydownEvent();
  };

  #addClickEvent(){
    const lineElement = this.#lineElement;
    lineElement.addEventListener('click', function(e){
      lineElement.focus();
    })
  }

  #addKeydownEvent(){
    const lineElement = this.#lineElement;
    lineElement.addEventListener('keydown', function(e){
      const key = e.key;
      const keyCode = e.keyCode;
      
      if(key.length === 1)
        lineElement.innerHTML += key;

        
    })
  }

  getElement(){
    return this.#lineElement;
  }
}