# Quest 04. OOP의 기본

## Checklist

- 객체지향 프로그래밍은 무엇일까요?
  - `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
    - Class 내부의 정보를 잘못 사용하는 경우를 방지할 수 있다.
    - 캡슐화 및 모듈화를 통해 독립적이고, 확장이 용이한 코드를 만들 수 있다.
  - 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
    - 여러 형태를 받아들일 수 있는 형질 또는 그 특성.
    - 오버로딩, 오버라이딩 등의 방법이 있다.
    - 기능을 확장하거나, 객체를 변경해야할 때 타입 변경 없이 객체 주입만으로 수정이 일어나게 할 수 있다.
    - 특정 모듈을 불러와 사용함에 있어서 해당 모듈의 인터페이스만을 알고, 내부 로직의 구현은 신경을 쓰지 않아도 된다는 장점이 있다.
  - 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
    - 부모-자식 관계의 객체로서, 부모의 속성을 물려받아 사용하는 것.
    - 중복 요소를 한번에 관리함으로써 생산성을 높일 수 있다.
    - 의존성이 발생하여 코드의 변경을 어렵게 한다.
    - 다단계의 상속 구조가 발생할 경우 상속 지옥에 빠질 수 있다.
  - OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
    - 상속이 아닌, 어떤 객체를 자기 자신의 한 요소(속성)로써 갖는 설계 방식.
    - 의존성을 줄이면서, 부모 또는 합성할 객체의 내용 또는 인터페이스가 변경되더라도 수정 부담이 적다.
- 자바스크립트의 클래스는 어떻게 정의할까요?
  - 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
    - 객체의 prototype 생성자를 사용해 새로운 객체를 생성하는 방식의 패러다임.
    - 이를 통해 생성된 객체의 구조는 모두 동일하다.
    - JS 클래스의 경우 상속을 프로토타입 체이닝을 통해 구현하고, 객체의 메소드 탐색에 이를 활용하는 방식.
  - 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
    - JS의 클래스는 프로토타입 기반으로 구현된 문법적인 기믹.
    - 프로토타입 체이닝을 통해 상속을 구현.

## Quest

- 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
- 요구사항은 다음과 같습니다:
  - 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  - 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  - 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  - 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  - 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  - Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced

- 객체지향의 역사는 어떻게 될까요?
- Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?

## Resources

- [MDN - Private class fields](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN - Class static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)
- [Wikipedia - 프로토타입 기반 프로그래밍](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EA%B8%B0%EB%B0%98_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)