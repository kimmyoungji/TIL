# JSX
* 리액트에서 생김새를 정의할 때, 사용하는 문법
* html 처럼 생겼으나, 사실 JS이다
* 예시:  
  ```return <div>hellooo??</div>```
* 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 barbel이 JSX를 JS로 변환해준다.
  * https://bit.ly/2wMpkk2


### JSX를 JS로 잘 변환하기위한 5가지 주의점
1. 닫혀야 하는 태그 닫기
2. 컴포넌트 1개를 구성하는 요소가 2개 이상일 때, 하나의 div로 묶어주어야 한다.
3. JSX 내부에서 JS변수 사용시, {변수}로
4. inline-css 정의시, camelCase 사용
5. {/*주석*/}