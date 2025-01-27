# Quest 10. 인증의 이해

## Introduction

- 이번 퀘스트에서는 웹에서의 인증에 관해 알아보겠습니다.

## Topics

- Cookie
- Session
- JWT

## Resources

- [MDN - HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [Cookies and Sessions](https://web.stanford.edu/~ouster/cgi-bin/cs142-fall10/lecture.php?topic=cookie)
- [JWT](https://jwt.io/)

## Checklist

- 쿠키란 무엇일까요?

  - HTTP 전송시, 헤더 필드에 담아 전송하는 데이터

  - 쿠키는 어떤 식으로 동작하나요?
    - 클라이언트 측에서는 서버 url에 따라서 쿠키를 저장해두고 해당 서버에 HTTP 요청시 헤더에 담아 전송하게 된다.
    - 서버측에서는 쿠키를 사용해 사용자를 식별하는 등의 요청을 처리하거나, set-cookie 헤더를 통해 클라이언트 측(현재 URL이 기본값)에 저장할 쿠키의 key-value를 전송할 수 있다

  * 쿠키는 어떤 식으로 서버와 클라이언트 사이에 정보를 주고받나요?
    - 클라->서버의 경우 cookie 헤더에 정보를 담아 전송하게 되며 반대의 경우에는 set-cookie 헤더에 key-value값을 지정하여 클라이언트 측에 저장할 쿠키의 내용을 전송하게 된다.

- 웹 어플리케이션의 세션이란 무엇일까요?

  - 쿠키와 연계하여, 서버측에서 사용자를 식별하기 위해 유지하는 데이터들

  * 세션의 ID와 내용은 각각 어디에 저장되고 어떻게 서버와 교환되나요?
    - 쿠키에 id(식별자)를 넣어두어 사용하며, 클라이언트가 HTTP 요청에 이를 담아 전송하게 됩니다
    - 전송된 식별자를 세션에서 검증하여 사용자를 인증하게됩니다.
      - 인증된 사용자는 API에 접근하는 등의 서버 기능을 활용하게 됩니다
      - 인증되지 않았다면, 서버의 기능을 사용할 수 없고 로그인 페이지로 이동하게 하는 등의 액션을 취하게 됩니다.

- JWT란 무엇인가요?

  - Json Web Token의 약자, 헤더 - 페이로드 - 시그니쳐가 연결된 각각의 JSON 구조로 되어있으며 각 부분은 .으로 구분됩니다.
    - 헤더는 일반적으로 암호화 알고리즘의 종류와, JWT인지의 유무를 나타내는 필드를 저장합니다
    - 페이로드는 데이터를 저장하는 부분으로, 이미 등록된 등록 클레임 (exp,iss,sub 등), 공개 클레임, 미공개 클레임으로 이루어져 있습니다.
    - 시그니쳐는 헤더+.+페이로드 버퍼를 secret key를 사용해 base64 형태로 인코딩한 값입니다. 이 필드를 검증하여 서버가 생성한 토큰인지, 변조된 토큰인지를 검증하게 됩니다.
  - JWT 토큰은 어디에 저장되고 어떻게 서버와 교환되나요?
    - 사용자의 인증 정보를 기반으로 서버에서 생성하여 client측에 전송
    - 보통 브라우저의 local 또는 session 스토리지에 저장합니다
    - 이후 클라이언트는 HTTP 요청의 헤더에 토큰을 넣어 전송하며 서버는 이를 인증의 수단으로 활용합니다
    - 서버측에서 token을 받으면, 토큰이 유효한지 검증하고, 이후 요청을 처리합니다

- 세션에 비해 JWT가 가지는 장점은 무엇인가요? 또 JWT에 비해 세션이 가지는 장점은 무엇인가요?

  - JWT
    - 유저 인증에 필요한 데이터 공간을 따로 준비하지 않아도 된다
    - 세션에 비해서 멀티 프로세스 환경(scale up)에 대한 부담이 적다
  - 세션
    - 토큰의 secret값이 탈취될 경우, JWT를 생성할 수 있다는 취약점에 비해서 안전하다
    - 구현이 상대적으로 쉽다 (토큰의 경우 만료에 대비해 refresh 관련 로직이 필요할 수 있다)

## Quest

- 이번에는 메모장 시스템에 로그인 기능을 넣고자 합니다.
  - 사용자는 딱 세 명만 존재한다고 가정하고, 아이디와 비밀번호, 사용자의 닉네임은 하드코딩해도 무방합니다.
  - 로그인했을 때 해당 사용자가 이전에 작업했던 탭들과 마지막으로 활성화된 탭 등의 상태가 로딩 되어야 합니다.
  - 세션을 이용한 버전과, JWT를 이용한 버전 두 가지를 만들어 보세요!
    - 세션을 이용할 경우 세션은 서버의 메모리나 파일에 저장하면 됩니다.

## Advanced

- Web Authentication API(WebAuthn)은 무엇인가요?
  - HTTPS에서 사용 가능한 API (현재까지는 실험적 기능)
  - 통상적인 id-비밀번호 형태를 사용하지 않아 보안성이 높다
