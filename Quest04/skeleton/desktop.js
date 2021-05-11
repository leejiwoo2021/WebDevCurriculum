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
      desktop.classList.remove(
        index === desktopIndex ? 'desktop-hide' : 'desktop-active'
      );
      desktop.classList.add(
        index === desktopIndex ? 'desktop-active' : 'desktop-hide'
      );
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
    const iconTemplate = document.querySelector('#template-icon');
    const iconClone = document.importNode(iconTemplate.content, true);

    const iconElement = iconClone.querySelector('.icon');
    const iconImg = iconElement.querySelector('.icon-image');
    const iconName = iconElement.querySelector('.icon-name');

    iconElement.style.top = this.position.top + 'px';
    iconElement.style.left = this.position.left + 'px';
    iconImg.setAttribute('src', this.src);
    iconName.innerText = this.name;

    this.addDragEvent(iconElement);

    return iconElement;
  }

  addDragEvent(icon) {
    let isClicked = false;
    let shiftX, shiftY;

    icon.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isClicked = true;

      shiftX = e.clientX - icon.getBoundingClientRect().left;
      shiftY = e.clientY - icon.getBoundingClientRect().top;
      moveAt(e.pageX, e.pageY);
    });

    document.addEventListener('mousemove', function (e) {
      if (isClicked) {
        moveAt(e.pageX, e.pageY);
      }
    });

    icon.addEventListener('mouseup', function (e) {
      isClicked = false;
    });

    function moveAt(pageX, pageY) {
      icon.style.left = pageX - shiftX + 'px';
      icon.style.top = pageY - shiftY + 'px';
    }
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
    const iconTemplate = document.querySelector('#template-icon');
    const iconClone = document.importNode(iconTemplate.content, true);

    const iconElement = iconClone.querySelector('.icon');
    const iconImg = iconElement.querySelector('.icon-image');
    const iconName = iconElement.querySelector('.icon-name');

    iconElement.style.top = this.position.top + 'px';
    iconElement.style.left = this.position.left + 'px';
    iconImg.setAttribute('src', this.src);
    iconName.innerText = this.name;

    this.addDragEvent(iconElement);
    this.addOpenEvent(iconElement);

    return iconElement;
  }

  addOpenEvent(icon) {
    const name = this.name;
    icon.addEventListener('dblclick', function (e) {
      const windowLayer = new Window(name);
      windowLayer.setWindow();
    });
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(title) {
    this.title = title;
  }

  setWindow() {
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(this.createWindow(this.title));
  }

  createWindow(title) {
    const windowTemplate = document.getElementById('template-window');
    const windowClone = document.importNode(windowTemplate.content, true);

    const windowElement = windowClone.querySelector('.window');
    const windowBar = windowClone.querySelector('.window-bar');
    const windowTitle = windowClone.querySelector('p');

    windowTitle.innerText = title;
    const windowCloseButton = windowClone.querySelector('.window-close-button');

    this.addDragEvent(windowBar, windowElement);
    this.addCloseEvent(windowCloseButton, windowElement);

    return windowElement;
  }

  addDragEvent(windowBar, windowElement) {
    let isClicked = false;
    let shiftX, shiftY;

    windowBar.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isClicked = true;

      shiftX = e.clientX - windowElement.getBoundingClientRect().left;
      shiftY = e.clientY - windowElement.getBoundingClientRect().top;
      moveAt(e.pageX, e.pageY);
    });

    document.addEventListener('mousemove', function (e) {
      if (isClicked) {
        moveAt(e.pageX, e.pageY);
      }
    });

    windowBar.addEventListener('mouseup', function (e) {
      isClicked = false;
    });

    function moveAt(pageX, pageY) {
      windowElement.style.left = pageX - shiftX + 'px';
      windowElement.style.top = pageY - shiftY + 'px';
    }
  }

  addCloseEvent(button, windowElement) {
    button.addEventListener('click', function () {
      windowElement.remove();
    });
  }
}
