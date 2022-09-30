# localStorage
* window 인터페이즈의 read-only한 속성이다.  
* 웹 문서의 origin을 위한 Storage 객체로 접근하게 해준다.
    * origin 이란:  프로토콜, 도메인(hostname), URL의 port 로 정의된다.
    * origin 예시) http://example.com/app1
    * 오직 이 3가지 요소가 동일 할때만, 두 객체가 같은 origin을 갖고 있다고 볼 수 있다.


#  localStorgae 함수들
1. ```localStorage.setItem('key','value')``` : 로컬 스토리지에 키:값 저장하기
2. ```localStorage.getItem('key','value')``` : 로컬 스토리지에 키:값 받아오기
3. ```localStorage.removeItem('key','value')``` : 로컬 스토리지에 키:값 지우기
4. ```localStorage.clear``` : 로컬 스토리지에 키:값 모두 지우기



> 참조 페이지
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
