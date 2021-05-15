## Checklist
### CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
- 외부 스타일 시트 (`<link rel>`)
  - `.css`인 별도의 파일로 작성한 뒤, HTML `<link>` 요소에서 참조하는 경우
  - 공통적으로 변해야하는 컴포넌트에 대해 유지보수 하기 쉽다.
  - css 파일을 가져오기 위해 HTTP 요청을 한번 더 수행해야하는 단점이 있다.
  - css를 모듈화하여 관리할 수 있고, 따라서 유지보수 하기가 쉽다.
- 내부 스타일 시트 (`<head> 속 <style>`)
  - 페이지마다 공통적으로 존재하는 컴포넌트의 CSS 수정이 필요한 경우, 매 페이지의 `<style>` 태그마다 수정하는 번거로움이 존재
  - 따라서 페이지가 변경될 경우, 다시 작성해야하는 번거로움이 존재한다.
- 인라인 스타일
  - 태그 요소마다 CSS를 정의하여 가독성이 떨어진다. 
  - 따라서 유지보수하기 힘들어진다.
  - 가능한 많은 전자 메일 클라이언트와 호환되도록 HTML 전자 메일에 많이 사용된다.

### CSS 규칙의 우선순위는 어떻게 결정될까요?
- 속성 값 뒤에 !important 를 붙인 속성
- inline style 속성
- #id 로 지정한 속성
- .클래스, :추상클래스 로 지정한 속성
- 태그이름 으로 지정한 속성
- 상위 객체에 의해 상속된 속성

### CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
- 각각의 요소를 사각형 박스로 표현하는것을 말한다.
- 박스모델은 4개의 영역으로, 내부의 콘텐츠 영역, 안쪽 여백(padding)영역, 테두리(border) 영역, 바깥 여백(margin) 영역으로 구성됩니다.
- 영역의 크기는 CSS box-sizng 속성에 따라 결정됩니다.
  - width: 20px로 가정시,
  - `content-box` : 내부의 콘텐츠 영역 가로 크기를 20px로 정하고, 이에 padding과 border의 크기를 더합니다. 
  - 즉, 영역 = `content`
  - `border-box` : 내부의 콘텐츠 영역과 padding, border 영역을 합하여 20px의 가로 영역을 갖게 됩니다. 
  - 즉 영역 = `content + padding + border`

### `float` 속성은 왜 좋지 않을까요?
- clear 속성을 사용하지 않으면, 선언 이후에 등장하는 태그들에게도 영향을 끼치게 된다.
- 줄바꿈 발생시, 레이아웃이 틀어질 가능성이 있다.
- 부모 요소의 크기를 지정하지 않고, 자식 float 요소의 높이 지정시, 부모 요소의 크기가 자동으로 커지지 않음

### Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
|구분|flex|grid|
|---|---|---|
|구분 축|1차원(평면)|2차원(평면 및 높이)|
|쓰기 방향|다양함(위,아래, 왼쪽, 오른쪽)|왼쪽 위부터 오른쪽 아래로|
|브라우저 지원률|98.57%|95.01%|
|위치 정하는 방법|해당 container 내에서만 가능|grid line이 있는곳 어디든|
### CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
- 겹치는 부분은 공통된 class를 생성하여 함께 관리한다.
- 다양한 방법론들이 존재하는데, layout이냐 theme color냐 와 같이 역할에 따라서 class를 구분하기도 하고 역할이나 특정 상태에 따라서 모듈화를 추구하기도 한다.

## Advanced
### 왜 CSS는 어려울까요?
- 다양한 기기 또는 화면을 고려해야해서
- CSS 속성들이 서로 연관되는 경우가 많고, 이를 전부 파악하기 힘들어서
- 특정 컴포넌트에 최종적으로 어떤 CSS들이 적용되는지 파악하기 힘들어서

### CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- bootstrap, material과 같이 미리 제작된 템플릿 라이브러리
- CSS 전처리기 (Sass, Less, Stylus 등)를 통한 개발
- styled-component와 같은 CSS-in-JS 방식

### CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
1. HTML 문서가 파싱되고, CSS 문서가 파싱되며 DOM과 CSSOM을 생성.
2. CSSOM을 기반으로 DOM의 어느 노드에 어떤 style을 적용할지 결정하고, 이를 통해 Render Tree 생성.
  2-1. 만약 브라우저가 알지 못하는 CSS 속성이 입력될 경우, 이를 건너뜁니다. (유효하지 않은 라인만 무시)
3. 브라우저를 통해 페이지를 화면에 표시.
### 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
- 일반적으로 두가지 방식으로 동작하게 됩니다
- Font 파일의 로딩 처리에 따라 FOUT(Flash Of Unstyled Text), FOIT(Flash of Invisible Text)로 나뉘게 된다.
- FOUT
  - font 파일을 받아오기 전까지 fallback font 혹은 기본 font로 해당 부분을 렌더링
  - IE 계열의 부라우저에서 사용했다.
- FOIT
  - font 파일을 받아오기 전까지 해당 부분의 렌더링을 blocking
  - Chrome, Firefox 등의 브라우저에서 사용한다
- 이외에도 로딩은 하되, 일정 시간 이후로 완료될 경우 다음에 페이지를 렌더링 할 때 폰트를 적용하거나, 무조건 fallback font로 렌더링 뒤, 일정 시간 이후에 웹 폰트로 전환하는 방식들이 있다.
## 참고문서
[MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
[MDN - CSS box model](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
[MDN - CSS flexbox](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
[MDN - CSS grid](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)
[MDN - Grid and Flexbox](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
[CSS tricks - Why is CSS Frustrating?](https://css-tricks.com/why-is-css-frustrating/)
[MDN - How CSS Works](https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps/How_CSS_works)
[웹 폰트 사용과 최적화의 최근 동향](https://d2.naver.com/helloworld/4969726)