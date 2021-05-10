class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(count) {
    this.iconList = this.initIconlist(count);
  }

  initIconlist(count) {
    const iconList = new Array();
    for (let index = 0; index < count.folder; index++)
      iconList.push(new Icon('folder', index));

    for (let index = 0; index < count.common; index++)
      iconList.push(new Icon('file', index));

    return iconList;
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(type, index) {
    this.src = type === 'folder' ? './folder.png' : './file.png';
    this.type = type;
    this.name = type + index;
    this.position = {
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 800),
    };

    this.displayIcon();
  }

  displayIcon() {
    const desktop = document.getElementsByClassName('desktop')[0];
    desktop.appendChild(this.createIcon());
  }

  createIcon() {
    const element = document.createElement('img');
    element.src = this.src;
    element.className = 'icon';
    element.style.top = this.position.top + 'px';
    element.style.left = this.position.left + 'px';
    return element;
  }
}

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}
