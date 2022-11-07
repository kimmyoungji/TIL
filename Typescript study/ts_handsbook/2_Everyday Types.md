# handbook 훑!

## 2. 매일 타입!
1. On this page
2. The primitives: string, number(no int, flaot), and boolean
3. Arrays
   - number[] === Array<number> !== [number]:tuple
4. any: 애니는 아무거나 다먹는다.
5. noImplicitAny: 위에서 나옴
6. Type Annotations on Variables
   형명시하는 문법. 항상 명시할 필요는 없다.
7. Functions. Parameter Type Annotations
   inference rules(형이 참조됨), contextual typing(맥락에 따라 형결정)
8. Return Type Annotations
9.  Anonymous Functions
    익명함수도 contextual typing 됨
10. Object Types
    오브젝트 형 표시.. ',' ';'둘다 사용가능.
    형 표시 안하면, any
11. Optional Properties
    var1:?stirng 이렇게 하면 optional properties가 된다.
12. Union Types
    다양한 형을 결합할 수 있다. 오오 새로운것! 인줄 알았는데 아니였다. 그냥 | 사용법  
    만약 함수의 인자가 Union Type이면 typeof을 사용하여 형을 좁혀주면(narrowing) 된다.  
    또는 Array.isArray 를 사용하여 형을 확인한다.  
    만약 union 된 형들을 구별할 필요가 없을 때도 있다.
13. Defining a Union Type
14. Working with Union Types
15. Type Aliases(가명, 별칭)
    내가 원하는 타입 만들기
    타입은 이름이 아니라 형태가 결정한다는 것을 기억할 것
16. Interfaces
    type 과 인터페이스의 차이점은? : type은 확장 불가하지만, interface는 확장 할 수 있다.
17. Differences Between Type Aliases and Interfaces
18. Type Assertions(주장)
    (요소)as type명   === <type명> (요소)  
    type assertion은 컴파일 과정에서 제거된다  
    type Assertion은 더 구체적이거나, 덜 구제적인 타임으로 주장할 수 있다. 아예 다른 타입으로는 주장 할 수 없다. 에를 들면 ('kmjoyit')as number
    근데 이렇게 하면 as로도 자유로워질 수 있다. const a = (expr as any) as T;
19. Literal Types  
    변수 형이 const 일 경우, 변수의 값이 타입이 되는 것
    예를 들어, const str = '김명지';를 선언했을때, str의 형은 '김명지'가 된다.  
    literal Type은 하나만 있어선 효용이 없다. literal Type union을 사용하면 유용하게 사용할 수 있다. 예를 들어 각 literal Type 'left', 'right', 'center' 세개를 모아서 union type 하나를 만들 수 있다. 
    Numeric literal types 도 있다. 문자열 대신 숫자값이 형 자체가 되는 것이다.  
20. Literal Inference  **** ==> 이게 지금 까지 컴포너트를 만들면서, 빨간줄이 떴던 주 원인이었구나!
    literal inference 과정에서 오류가 나는 예시
    ```ts

    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method);
    //Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
    
    //방법1: literal 이라고 명시해준다
    // Change 1:
    const req = { url: "https://example.com", method: "GET" as "GET" };
    // Change 2
    handleRequest(req.url, req.method as "GET");

    //방법2: literal로 만들어 할당한다.
    const req = { url: "https://example.com", method: "GET" } as const;
    handleRequest(req.url, req.method);
    ```
21. null and undefined :
22. strictNullChecks off : 어떤 값에 null 또는 undefined가 할당되면 에러를 날리지 않는다
23. strictNullChecks on : 어떤 값에 null 또는 undefined가 할당되면 그 값을 사용하기 전에, type check를 해야한다.
24. Non-null Assertion Operator (Postfix !) : null 또는 undefined이 아님을 명시하는 문법이다 예를 들어 a! 이면, a는 명시적으로 null 또는 undefined일 수 없다. 이것도 컴파일 과정에서 지워지기 때문에, 절대 null, undefined가 들어갈 수 없는 변수에게만 사용해야 한다.
25. Enums 
26. Less Common Primitives : bigInt, symbol