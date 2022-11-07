# handbook 훑!

## 1. 기본들
1. Static type-checking :   
   타입스크립트는 동적형지정을 하는 자바스크립트를 위해, 정적인형확인을 해주는 녀석이다.   
2. Non-exception Failures:   
   자바스크립트에서 잡지 않는 오류를 타입스크립트는 다 잡음!   
   미선언필드, 오타, 로직오류 등   
3. Types for Tooling:  
    자동완성기능 제공함  
4. tsc, the TypeScript compiler:   
   npm에서 다운받기,    
   ts->js 바꿔주고 debugging안됨,   
   바꾸면서 오류도 찾음   
5. Emitting with Errors:   
   에러 건너뛰기 여부를 설정할 수 있다.   
   tsc --noEmitOnError hello.ts  
6. Explicit Types:   
   형을 명시할 수 있다. 꼭 명시 안해도 ㅇㅋㅇㅋ left typing/right typing  
7. Erased Types:  
   타입스크립트 파일을 직접 실행될 수 없다. 꼭 tsc를 통해 컴파일 되어야 한다. 이과정에서 실행에  불필요한 타입스크립트 문법들은 삭제된다.  
8. Downleveling:  
   상위버전의ECMAScript에서 하위버전으로 바꾸는 작업을 downleveling이라고 한다.  
   tsc --target es2015 hello.ts 이 명령어로 파일을 변환하면, ECMAScript 2015(ES6,ES2015)에 호환되는 js 파일이 만들어진다. 여기서는 리터럴 템블릿이 없어지지 않고 js파일에 반영이 된다.  
   반면, ES3 그렇지 않다. tsc는 기본적으로 ES3에 호환되도록 컴파일한다. 여기서는 리터럴 템블릿이 일반 스트링 조합으로 대체되어 js파일이 출력된다.  
9.  Strictness:  
    타입스크립트의 엄격함 타입체킹을 켜거나 끌수 있다  
        - CLI 에서 strict flag를 사용하거나
        - tsconfig.json 에서 "strict":true로 설정하면된다.
        - 추가적으로 세부적인 조정을 할 수 있는데 크게 두가지 선택지가 있다. noImplicitAny, strictNullChecks이다
10. noImplicitAny:  이 flag가 켜져있으면 암묵적으로 any형이 된 변수들을 에러처리한다.
11. strictNullChecks: 이 flag가 켜져있으면 미처 처리하지 못한 null과 undefined가 있을 경우 에러처리한다.


