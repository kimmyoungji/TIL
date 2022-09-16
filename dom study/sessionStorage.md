# Window.sessionStorage
* sessionStorage는 읽기 전용 속성이다
* sessionStorage, LocalStorage 비슷하다
* localStorage의 데이터는 만료되지 않는다.
* 반면, sessionStorage 데이터는 페이지 세션이 끝날 때 비워진다.
* sessionStorage에 저장된 정보는, 페이지 프로토콜별로 구분한다. 
  * 예) http://example.com 과  https://example.com 은 다른 sessionStorage에 저장된다.
  
> 세션이란?  
> 사용자가 브라우저를 닫아 서버와의 연결을 끝내는 시점까지를 세션이라고 한다.
> 즉 한 웹페이지가 열리면 한 세션이 열리고, 그 창이 닫히면 해당 세션도 끝이난다.
> PHP에 대해 더 알아보면 자세히 알 수 있다. 
> 참조: http://www.tcpschool.com/php/php_cookieSession_session

## sessionStorage 사용법
### 구문
```myStoreage = window.sessionStorage```
- 값: Storage 객체
- 예외: SecurityError
### 제공 메소드
1. ```sessionStorage.setItem('key', 'value');``` : 세션저장소에 정보 저장
2. ```sessionStorage.getItem('key', 'value');``` : 세션저장소에 정보 받기



> 참조
> https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage