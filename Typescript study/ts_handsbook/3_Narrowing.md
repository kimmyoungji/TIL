# handbook 훑!

## 3. 좁히기
타입스크립트는 코드의 흐름을 따라서, 더 적절한 형을 추론해 낸다. 이걸 narrowing이라고 한다. 
1. typeof type guards
   typeof a === 'number' 이형태의 타입화인 문법을 type guards라고 한다. 타입스크립트가 형을 추론하는데 영향을 주는 문법이다.
   typeof 연산자는 string을 반환한다.

2. Truthiness narrowing
   조건문으로 참 거지을 판별하여 좁혀하는 방식을 말한다
   if문의 인자가 항상 boolean을 반환할 필요는 없다. 0, Nan, '', null, undefined등은 flase로 강제취급된다. 
   위의 특성을 활용하여 우리는 if(a&& typeof a === 'string') 과 같이 a이 null  또는 undefined인 경우를 걸러 낼 수 있다.

3. Equality narrowing
   switch, ===, !== 를 사용해서 형을 구체화 하는 것

4. The in operator narrowing
   in을 사용한 형 구체화

5. instanceof narrowing
   instanceof을 사용한 타입체크
   instanceof 도 type guard

6. Assignments
   할당, right hand typing

7. Control flow analysis
   도달가능성을 바탕으로 코드를 분석하는 것을 control flow analysis라고 한다.
   contorl flow를 잘 활용하면 기존의 형을 자유롭게 세분화 하고 다시 공통화 할 수 있다.

8. Using type predicates ???
   커스텀 type Guard === type predicates
   function isX(param: Type ): param is narrowedType{retrun (typeof param === narrowedType) }
   
9.  Discriminated unions **
    union type은 type guard를 거치면서, 불필요한 부분이 제거된다.
    
10. The never type 
    더이상 구체화할 타입이 없을 때.. 
    never type은 모든 타입에 할당 할 수 있지만,
    어떤 타입도 never type에 할당 될 수 없다.
    
11. Exhaustiveness checking 완전함 확인 
    타입확인 조건문의 마지막까지 내려오는 경우, never에 할당하여, 오류를 발생시켜, 처리되지 못한 경우를 걸러낼 수 있다. 