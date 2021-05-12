class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(count, desktopIndex) {
    this.desktopElements = document.getElementsByClassName('desktop');
    this.explorerButtons = document.getElementsByClassName('explorer-button');
    this.count = count;
    this.desktopIndex= desktopIndex
    this.setDesktopIcons();
    this.addExplorerEvent();
  }

  getIconList() {
    const renderList = new Array();
    for (let index = 0; index < this.count.folder; index++)
      renderList.push(new FolderComp('folder'+index, this.desktopIndex));
      // renderList.push(new Folder(index, desktopIndex));

    for (let index = 0; index < this.count.common; index++)
      renderList.push(new IconComp('file'+index,'./file.png', this.desktopIndex));
      // renderList.push(new Icon(index, desktopIndex));

    return renderList;
  }

  setDesktopIcons() {
    const desktopElements = this.desktopElements;
    const desktopIndex = this.desktopIndex;
    this.getIconList().forEach((element) => {
      desktopElements[desktopIndex].appendChild(element.createIcon());
    });
  }

  addExplorerEvent() {
    const desktop = this;
    const desktopIndex = this.desktopIndex;
    this.explorerButtons[desktopIndex].addEventListener('click', function () {
      desktop.setDesktopVisible(desktopIndex);
    });
  }

  setDesktopVisible(clickedIndex) {
    [...this.desktopElements].forEach((desktop, index) => {
      desktop.classList.remove(
        clickedIndex === index ? 'desktop-hide' : 'desktop-active'
      );
      desktop.classList.add(
        clickedIndex === index ? 'desktop-active' : 'desktop-hide'
      );
    });
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(index, desktopIndex) {
    this.src = './file.png';
    this.type = 'icon';
    this.name = 'icon' + index;
    this.position = {
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 800),
    };
    this.desktopIndex = desktopIndex;
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
  constructor(index, desktopIndex) {
    super(index, desktopIndex);
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
    const desktopIndex = this.desktopIndex;
    icon.addEventListener('dblclick', function (e) {
      const windowLayer = new Window(name);
      windowLayer.setWindow(desktopIndex);
    });
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(title) {
    this.title = title;
  }

  setWindow(desktopIndex) {
    const desktopElements = document.getElementsByClassName('desktop')[
      desktopIndex
    ];
    desktopElements.appendChild(this.createWindow(this.title));
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

class IconComp {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(name, src, desktopIndex) {
    this.name = name;
    this.src = src
    this.desktopIndex = desktopIndex;
    this.position = {
      top: Math.floor(Math.random() * 500),
      left: Math.floor(Math.random() * 800),
    };
  }

  createIcon(){
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

class FolderComp {
  constructor(name, desktopIndex) {
    this.name = name;
    this.desktopIndex = desktopIndex;
    this.icon = new IconComp(name , './folder.png', desktopIndex).createIcon();
  }

  createIcon(){
    this.addOpenEvent();

    return this.icon;
  }

  addOpenEvent(){
    const name = this.name;
    const desktopIndex = this.desktopIndex;
    this.icon.addEventListener('dblclick', function (e) {
      const windowLayer = new Window(name);
      windowLayer.setWindow(desktopIndex);
    });
  }
}
