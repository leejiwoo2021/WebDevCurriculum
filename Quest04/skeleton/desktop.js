class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(count) {
    this.display(this.getRenderList(count));
  }

  getRenderList(count) {
    const renderList = new Array();
    for (let index = 0; index < count.folder; index++)
      renderList.push(new Folder(index));

    for (let index = 0; index < count.common; index++)
      renderList.push(new Icon(index));

    return renderList;
  }

  display(renderList) {
    const desktopElement = document.getElementsByClassName('desktop')[0];
    renderList.forEach((element) => {
      desktopElement.appendChild(element.createIcon());
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
      // if (false) {
      //   icon.style.top = originPosition.top + 'px';
      //   icon.style.left = originPosition.left + 'px';
      // }
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
    icon.addEventListener('dblclick', function (e) {
      alert('double clicked');
    });
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}
