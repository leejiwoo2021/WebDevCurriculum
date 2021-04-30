## Checklist
### HTML 표준의 역사는 어떻게 될까요?
- 1990년에 등장하여 CERN(연구자와 대학 사이에서 정보 교환을 위해 만들었다고 한다)과 IETF(국제 인터넷 표준화 기구)에 의해 개발
- 1994년, W3C(웹 컨소시엄, 모질라 + 오페라)의 등장과 함께 1995 3.0, 3.2, 1997 4.0까지 발전
- 이후 브라우저 단에서 DOM과 관련된 API들이 구현되기 시작
- 2004년, 브라우저 개발사들이 W3C의 방식에 답답함을 느끼고 WHATWG 단체 설립
- WHATWG에서 자체적으로 HTML5 표준을 수립
- 2014년, W3C의 HTML5 수용. 
- 2019년, 그동안의 분쟁을 끝내며 함께 Standard 문서를 만들어가기로 합의
- 위 과정으로 보아 W3C는 안정적인, 혹은 상대적으로 보수적인 자세를 취하는 단체의 느낌이었고, WHATWG는 실험적 기능의 개발과 빠른 적용을 원하는 단체의 느낌이었음.

### HTML 표준을 지키는 것은 왜 중요할까요?
- 브라우저마다 구현이 다를경우, 사용자에게 동일한 경험을 제공하려면 매번 다르게 개발해야 하고, 이를 유지보수 하기 위한 작업이 계속 발생된다
- 표준을 지킨다면, 브라우저 호환성이나, 웹 접근성을 향상시킬 수 있다.
### XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?
- 브라우저 개발사와 W3C(XHTML 개발)의 의견 차이로 인해 빛을 보지 못했다. 
### HTML5 표준은 어떤 과정을 통해 정해질까요?
- WHATWG와 W3C에 의해 정해진다.
- WHATWG가 HTML과 DOM의 Living Standard를 관리한다.
- W3C가 위 repository를 참고하여 개발자 커뮤니티를 활성화 시킨다(이슈 및 문제, 테스트 관리)
- WHATWG와 W3C의 의견 충돌시, 해결 프로세스를 통해 의견을 합의하려고 노력한다.
- ![W3C Standardization Process](https://seulbinim.github.io/WSA/images/standards/process.png)

### 브라우저의 역사는 어떻게 될까요?
- 1990 Nexus W3C 디렉터인 Tim Berners-Lee가 개발한 당시 유일한 브라우저.
- 1992 Lynx 텍스트 기반의 브라우저.
- 1993 Mosaic 이미지를 삽입 할 수 있는 최초의 브라우저. 
- 1994 Netscape Navigator 출시
- 1995 Microsoft에서 Internet Explorer를 출시
- 1996 94년 연구 프로젝트로 시작되어 2년 뒤, Opera 브라우저 출시
- 2003 Macintosh용 브라우저인 Safari 출시
- 2004 Netscape 출신 개발자들이 Mozila 재단을 설립하고, Firefox 브라우저를 출시
- 2007 Apple이 iOS를 지원하는 Mobile Safari 출시
- 2008 Google Chrome 브라우저 출시
- 2011 모바일 브라우저 시장을 타겟으로 Opera Mini 브라우저 출시
- 2015 Microsoft가 Edge 브라우저를 출시

### Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
- 시장을 독점하고, 비표준 기능들을 추가하면서 IE는 웹 표준을 무시하게 되었고 우리가 잘 아는 ActiveX가 등장하게 된다.
- 독점적 지위 덕분에 많은 웹사이트들이 IE만을 지원하고 나머지 브라우저를 지원하지 않는 경우도 발생했다.
- 이 문제는 결국 모바일 시장의 등장과 동시에 타 브라우저(Firefox나 Chrome)의 등장으로 IE가 점유율을 뺏기며 자연스럽게 해결되었다

### 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?
- 2021.04 현재 대한민국 기준 (PC)
    1. Chrome 약 70%
    2. Edge 약 12%
    3. IE 약 7%
    4. Whale 약 4%
    5. Safari 2%
- 2021.04 현재 대한민국 기준(Mobile)
    1. Chrome 약 38%
    2. Samsung Internet 약 26%
    3. Safari 약 22%
    4. Whale Browser 약 9%
    5. Puffin 약 1%
- 웹 표준을 지향하고 있긴 하나 브라우저마다 동일한 기능을 구현하는 방법이 다른 경우가 존재하고, 따라서 동일한 코드가 각 환경에 100% 호환되지 않아 대응이 필요하기 때문에.

### 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?
- HTML 문서를 파싱하여 DOM을 구현하고 이를 사용자가 볼 수 있도록 화면에 그리는 소프트웨어 장치를 말한다. 통상적으로 레이아웃 + 렌더링 엔진을 통틀어 말한다
- Blink (크롬, 오페라), Gecko(Firefox), Trident(IE), Webkit(Safari) 등이 존재한다.
### 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?
- 유료 브라우저의 등장 (G-suite 광고 제거 Enterprise Chrome)
- 음성인식
- 빠른 페이지 로딩 속도
- 브라우저 광고 차단 기능의 삭제(예정)
- Ai 앱 구동
- 개인 정보 보호
    - 개인 정보 트래킹 방지
    - 브라우징 기록, 쿠키 저장 X

### HTML 문서는 어떤 구조로 이루어져 있나요?
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

- `<!DOCTYPE html>` : 문서의 타입(형식)을 나타내는 구문입니다.
- `<html> ~ </html>` : html 태그 요소입니다. 전체 페이지의 컨텐츠를 포함하며 기본 요소입니다.
- `<head> ~ </head>` : 사용자에게는 보이지 않지만 홈페이지 설명, CSS 스타일, 문자 인코딩 등의 내용을 담고 있습니다.
- `<meta charset="">` : HTML 문서의 인코딩을 지정합니다. UTF-8을 사용하면 대부분의 문자를 처리할 수 있습니다. 
- `<title> ~ </title>` : 페이지의 제목이 설정되며, 브라우저 탭에 표시되는 제목으로 사용됩니다.
- `<body> ~ </body>` : 페이지에 표시되는 모든 컨텐츠가 포함됩니다. (ex. 텍스트, 이미지, 비디오, 오디오 등)

### `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?
- 앞서 말한 `<title>` 태그와 `<meta charset="">` 이 존재합니다.
- `<meta>` 태그의 `name`과 `content` 속성을 사용할 수 있습니다.
    - ex. `<meta name="author" content="jiwoo">`
    - `name`은 어떤 정보의 형태를 가지고 있는지,
    - `content`는 실제 메타데이터의 컨텐츠 입니다.
    - image나 페이지 설명도 추가할 수 있습니다.
- `<link>` 태그를 사용하여 페이지 메타데이터에 아이콘을 추가할 수 있습니다.
    - ex. 북마크 favicon : `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
- css와 javaScript 추가가 가능하다
    - ex. css : `<link rel="stylesheet" href="my-css-file.css">`
    - ex. Js : `<script src="my-js-file.js"></script>`
    - js의 경우 head 부분보다, body 태그가 끝나기 직전에 삽입하는것이 좋다.

### 시맨틱 태그는 무엇일까요?
- HTML에서 시맨틱 태그란, 태그 자체가 정해진 역할 또는 의미를 가지고 있는 태그를 말합니다.

### 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
시맨틱 마크업을 사용하면 다음과 같은 이점이 있습니다

- 검색 엔진이 시맨틱 마크업을 페이지의 검색 랭킹에 영향을 줄 수 있는 중요 키워드로 간주합니다.
- 시각 장애가 있는 사용자가 화면 판독기로 페이지를 탐색할 때 시맨틱 마크업을 푯말로 사용할 수 있습니다.
- 의이없고 클래스 이름이 붙여져있거나 그렇지 않은 `div`태그들을 탐색하는 것보다, 의미있는 코드 블록을 찾는 것이 훨씬 쉽습니다.
- 개발자에게 태그 안에 채워질 유형을 제안합니다.
- 의미있는 이름짓기(Semantic naming)는 적절한 사용자 정의 요소 / 구성 요소의 이름짓기(naming)를 반영합니다

### `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
- `<section>` : 문서의 독립적인 구획을 나타낸다. 
- `<div>` : 순수히 영역만을 구분하기 위한 컨테이너 입니다. (단순한 스타일링이 목적)
- `<article>` : 독립적으로 구분해 배포하거나, 재사용할 수 있는 구획을 나타냅니다. ex) 게시판, 블로그 글, 매거진, 뉴스 기사 등
- `<header>` : 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함될 수 있습니다.
- `<footer>` : 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다. 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.

- ![](https://t1.daumcdn.net/cfile/tistory/261BFE435539390B1B)
### 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?
| 구분 | 블록 레벨 | 인라인 |
| --- | --- | --- |
| 포함 가능한 요소 | 데이터, 인라인, 블록레벨 | 데이터, 인라인 |
| 콘텐츠 흐름 | 끊고, 새로운 줄에서 시작(좌우 너비를 모두 차지)| 끊지 않고 할당된 공간만 차지|
### 참고문서
[HTML Standard - History](https://html.spec.whatwg.org/#history-2)
[W3C Standards](https://www.sitepoint.com/importance-web-standards/)
[웹 접근성과 웹 표준](https://seulbinim.github.io/WSA/accessibility.html)
[History of web browsers](https://smartbear.com/blog/history-of-web-browsers/)
[Wikipedia - Browser Engine](https://ko.wikipedia.org/wiki/브라우저_엔진)
[Browser Trends for 2021/2022](https://financesonline.com/browser-trends/)
[MDN - HTML introduction](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
[MDN - HTML Metadata](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
[MDN - Semantics](https://developer.mozilla.org/ko/docs/Glossary/Semantics)
[MDN - Inline Element vs Block Level Element](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements#인라인_vs._블록_레벨_요소)