# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?
  - 프론트엔드를 거치지 않고, 임의의 HTTP 요청을 날릴 수 있기 때문에(변조된 요청이 존재할 수 있기 때문에)
  * 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?
    - script가 삽입되어 실행되는 일이 발생할 수 있다. (ex, 이미지 또는 링크 클릭시, 해커가 지정해둔 서버로 queryString + 쿠키/세션 형태로 정보를 전송할 수 있다)
    - 링크주신 Web Security Fundamentals 에서는 유저의 프로필에 `<script>` 를 저장해 둔 뒤, 다른 사용자가 해당 유저의 프로필을 열람하려고 링크를 클릭시 입력해둔 스크립트가 실행됨을 볼 수 있었다
  * XSS(Cross-site scripting)이란 어떤 공격기법일까요?
    - 웹 관리자 아닌, 악의를 가진 사용자가 웹 페이지에 스크립트를 삽입하는 방식
    - 크게는 지속적/비 지속적 기법으로 나뉜다.
  * CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?
    - 사용자가 자신의 의지와는 무관하게, 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말한다.
    - 과정은 다음과 같다
      1. 해커가 공격용 HTML을 생성한다
      2. 이용자는 평소처럼 특정 사이트에 로그인 하여 쿠키/세션을 획득한다
      3. 이용자가 접속한 사이트에서 해커가 준비한 공격용 HTML이 로드된다
      4. 이용자가 모르게, 브라우저가 공격용 HTML에 삽입된 HTTP 요청을 수행한다.
    - 관리자 비밀번호 변경 요청을 보내도록 하여 해킹한 사례가 있다.
  * SQL Injection이란 어떤 공격기법일까요?
    - 악의적인 사용자가 보안상의 취약점을 이용하여, 임의의 SQL 문을 주입하고 실행되게 하여 데이터베이스가 비정상적인 동작을 하도록 조작하는 행위
    - SQL문을 직접 넣을 수 있게 된 상태로, 다양한 SQL문을 활용하여 원하는 정보를 얻어낸다
    - 테이블 이름 정보를 얻거나, id,pw를 입력하지 않고 첫 번째 사용자로 로그인이 된다던가 ...etc
- 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?
  - 이유
    - 데이터를 암호화 하여 보안적인 이슈로부터 상대적으로 자유롭다
    - 검색엔진 최적화에 도움이 된다 (Google에서 노출 점수에 가산점+)
  - HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?
    - SSL이 1,2,3 버전에 이르러 TLS 표준으로 지정되었고, 이 표준을 기반으로 통신하는 HTTP를 Secure를 붙여 HTTPS로 부르기로 하였다.
  - HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

- TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
- HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
