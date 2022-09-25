# Typescript in 50 lessons 요약

## Intro
이 책의 목적은, 독자가 타입스크립트의 타입 시스템을 마스터 하는 것
총 49가지의 상황 제시, 각 10분 소요
### 내용 사전 요약 
1. Functions
2. Union and Intersection types
3. Generics: 미결정 타입을 대비하여, 정의 할 수 있는 타입으로 / generic constrains, binding generics, mapped types
,type modifier 를 배울 것이다.
4. Conditional Types: 
5. Thinking in Types

## Chapter1. TypeScript for Smashing People
### Lesson.1 Red Stringgly Line
- 빨간줄 그려줌. 
- 타입스크립트의 목적은 자바스크립트의 잡재적 오류를 미리 알아내는 것이다. 
- 타입스크립트는 자바스크립트 코드 분석 기능을 제공하고, 문제가 발생할 수 있는 부분을 미리 빨간 줄로 표시해준다.
- vs code 는 따로 설치하지 않아도, 기본적으로 자바스크립트를 검사해준는 타입스크립트가 작동하고 있다.
- typescript의 분석을 직접 보고 싶다면, js 코드 파일의 첫줄에 @ts-check를 붙여주어야 한다. 

### Lesson.2 Hunting Bugs
#### 1) readonly is Not Assignable / type check & autocomplete
- 오류: readonly 대신에 writable을 사용해야 한다.
- object.defineProperty : 객체에 새로운 속성을 직접 정의하거나, 이미 존재하는 속성을 수정한 후, 해당 객체를 반환
- typescript의 첫번째 특성: 올바른 변수명을 사용하도록 도와준다. === type check
- ctrl + space —> 코드 흐름에서 적절한 자동완성정보를 얻을 수 있다.
#### 2) Type Inference 
- let currentStorage = ‘undefined’; —> let currentStorage = undefined;
- type inference : 타입스크립트는, 처음 할당 되는 데이터형을 참조한다. 그리고 이를 고수한다.
	- 예) let v1 = 0 이면, 앞으로도, v1에는 숫자만 올 수 있다.
	- undefined 가 할당될 경우, 확실한 형이 결정 될 때까지 무엇이든 올 수 있다.
- 특정 변수가 반환값인 함수의 경우, 특정 변수의 형태가 지정되면, 그 함수의 반환형도 고정된다. 
#### 3) Semantic Checks : 틀린 부분 뿐만 아니라, 올바른 수정 방향도 제시해준다.
#### 4) The Last Bits
- 숫자와 함수 비교 불가능
- 배열.add 가 아닌, push
- 오타 주의

### Lesson 3: Types
* 타입이란 무엇인가? : 
	* 데이터,데이터의 의미,값묶음에 대한 작업을 정의하는 정보의 분류
	* 
