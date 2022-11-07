# lodash 
로다시는 자바스크립트에서 배열, 숫자, 객체들을 보다 쉽게 다둘 수 있는 기능들을 제공한다. 특히 다음 세가지 상황에서 유용하다
1. 배열, 객체, 문자열을 반복문으로 처리할 때
2. 값들을 생성하거나 테스팅 할 때
3. 합성 함수를 만들 때.


## _.sortBy()
이 메소드는 반복문에 돌려진 collection의 결과값을 오름차순으로 정리해서 보여준다.
### 문법
```ts 
    _(collection).sortBy(iteratees);
```
- collection: 반복문을 돌릴 collection
- iteratees: 하나의 인자를 받는 반복문


## _.iteratee(func=-/identity)
- 인자로 받은 함수를 그 함수의 인자와 함께 실행하는 함수를 만들어낸다. 
- 만약 함수가 속성의 이름일 경우 만들어진 함수는 해당 속성의 형태의 값을 반환한다.   
- 만약 함수가 배열 또는 객체일 경우 생성된 함수는 true/false를 반환하는데, 인자로 들어온 값과 반환되는 값이 동일하면 true, 변화가 있다면 false를 반환한다.
### 문법
```ts 
   _.iteratee(func=_.identity)
```
- func: 만들어질 함수
- 반환값: 콜백함수


## _.identity(value)
- 첫번째 인자를 반환한다.
### 문법
```ts 
   _.identity(value)
```


## _.filter()
- 
### 문법
```ts 
   _.filter(collection, [predicate=_.identity])
```
- collection: 반복문에 돌려질 배열 또는 객체
- [predicate=_.identity] (function) : 반복문 (반복될 코드)
- 반환값: 새롭게 만들어진 배열
#### 사용 예시
```ts
    _.filter(collection, (v)=>{return v.필드값; });
    _.filter(collection, {필드명: 필드값, 필드명2:필드값2});
    _.filter(collection, [필드명, 필드값]);
    _.filter(collection, '필드명');
```


## _.orderBy(...)
- 
### 문법
```ts 
   _.orderBy(collection, [iteratees=[_.identity]], [orders]);
```
- collection: 반복문에 돌려질 배열 또는 객체
- [itertatees= [_.identity]] (array[] | function[] | object[] | string[] ): 정렬할 대상
- orders: 정렬할 순서
- 반환값: 새롭게 정렬된 배열
#### 사용 예시
```ts
    _.filter(collection, (v)=>{return v.필드값; });
    _.filter(collection, {필드명: 필드값, 필드명2:필드값2});
    _.filter(collection, [필드명, 필드값]);
    _.filter(collection, '필드명');
```