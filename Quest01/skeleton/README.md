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
### `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?
### 시맨틱 태그는 무엇일까요?
### 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
### `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
### 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?

### 참고문서
[HTML Standard - History](https://html.spec.whatwg.org/#history-2)
[W3C Standards](https://www.sitepoint.com/importance-web-standards/)
[웹 접근성과 웹 표준](https://seulbinim.github.io/WSA/accessibility.html)
[History of web browsers](https://smartbear.com/blog/history-of-web-browsers/)
[Wikipedia - Browser Engine](https://ko.wikipedia.org/wiki/브라우저_엔진)
[Browser Trends for 2021/2022](https://financesonline.com/browser-trends/)