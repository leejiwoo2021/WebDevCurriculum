class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(count, index) {
    this.desktopElements = document.getElementsByClassName('desktop');
    this.explorerButtons = document.getElementsByClassName('explorer-button');
    this.setDesktop(this.getIconList(count), index);
    this.setExplorer(index);
  }

  getIconList(count) {
    const renderList = new Array();
    for (let index = 0; index < count.folder; index++)
      renderList.push(new Folder(index));

    for (let index = 0; index < count.common; index++)
      renderList.push(new Icon(index));

    return renderList;
  }

  setDesktop(renderList, index) {
    const desktopElements = this.desktopElements;
    renderList.forEach((element) => {
      desktopElements[index].appendChild(element.createIcon());
    });
  }

  setExplorer(index) {
    const that = this;
    this.explorerButtons[index].addEventListener('click', function () {
      that.setDesktopVisible(index);
    });
  }

  setDesktopVisible(index) {
    [...this.desktopElements].forEach((desktop, desktopIndex) => {
      if (index === desktopIndex) {
        desktop.classList.remove('desktop-hide');
        desktop.classList.add('desktop-active');
      } else {
        desktop.classList.remove('desktop-active');
        desktop.classList.add('desktop-hide');
      }
    });
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(index) {
    this.src = './file.png';
    this.type = 'icon';
    this.name = 'icon' + index;
    this.position = {
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 800),
    };
  }

  createIcon() {
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.style.top = this.position.top + 'px';
    icon.style.left = this.position.left + 'px';

    icon.appendChild(this.createImg());
    icon.appendChild(this.createName());

    this.addDragEvent(icon);

    return icon;
  }

  createImg() {
    const img = document.createElement('img');
    img.className = 'icon-image';
    img.src = this.src;
    return img;
  }

  createName() {
    const name = document.createElement('p');
    name.className = 'icon-name';
    name.innerHTML = this.name;
    return name;
  }

  addDragEvent(icon) {
    let isClicked = false;
    // let originPosition = this.position;
    icon.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isClicked = true;
    });

    icon.addEventListener('mousemove', function (e) {
      if (isClicked) {
        const top = e.clientY - 50;
        const left = e.clientX - 50;

        icon.style.top = top + 'px';
        icon.style.left = left + 'px';
      }
    });

    icon.addEventListener('mouseup', function (e) {
      isClicked = false;
    });
  }
}

class Folder extends Icon {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(index) {
    super(index);
    this.type = 'folder';
    this.src = './folder.png';
    this.name = 'folder' + index;
  }

  createIcon() {
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.style.top = this.position.top + 'px';
    icon.style.left = this.position.left + 'px';

    icon.appendChild(this.createImg());
    icon.appendChild(this.createName());

    this.addDragEvent(icon);
    this.addOpenEvent(icon);

    return icon;
  }

  addOpenEvent(icon) {
    const name = this.name;
    icon.addEventListener('dblclick', function (e) {
      const windowLayer = new Window(name);
      windowLayer.display();
    });
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(title) {
    this.title = title;
  }

  display() {
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(this.createWindow(this.title));
  }

  createWindow(title) {
    const windowElement = document.createElement('section');
    windowElement.classList.add('window');

    const windowBar = document.createElement('div');
    windowBar.classList.add('window-bar');

    const windowTitle = document.createElement('p');
    windowTitle.innerHTML = title;

    const windowCloseButton = document.createElement('button');
    windowCloseButton.innerHTML = '닫기';
    windowCloseButton.classList.add('window-close-button');

    this.addDragEvent(windowBar, windowElement);
    this.addCloseEvent(windowCloseButton, windowElement);

    windowBar.appendChild(windowTitle);
    windowBar.appendChild(windowCloseButton);
    windowElement.appendChild(windowBar);

    return windowElement;
  }

  addDragEvent(windowBar, windowElement) {
    let isClicked = false;
    windowBar.addEventListener('mousedown', function (e) {
      isClicked = true;
    });

    windowBar.addEventListener('mousemove', function (e) {
      if (isClicked) {
        const top = e.clientY - 15;
        const left = e.clientX - 100;

        windowElement.style.top = top + 'px';
        windowElement.style.left = left + 'px';
      }
    });

    windowBar.addEventListener('mouseup', function (e) {
      isClicked = false;
    });
  }

  addCloseEvent(button, windowElement) {
    button.addEventListener('click', function () {
      windowElement.remove();
    });
  }
}
