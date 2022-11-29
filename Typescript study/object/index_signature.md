# index_signature

### index signature란
- 객체 타입 선언시, 객체를 구성하는 프로퍼티의 키들이 특정한 이름은 없지만 형태가 정해져 있을때 사용하는 ts 문법이다. 객체 타입을 구성하는 키를 특정한 이름 대신 형식만 정해 줄 수 있게 된다. 

<br/>

### 예시
 ```ts
    interface myobj {
        [index: number]: string
    }
```

<br/>

### 특징1: index Signature의 데이터 형
> index Signature의 데이터 형 = 'number' | 'string' | 'symbol' | 'template literal type'
> 예
 ```ts
    // number
    interface myobj {
        [index: number]: string
    }

    // string
    interface myobj2 {
        [index: string]: string
    }

    // symbol
    let MY_SYMBOL = Symbol();
    interface myobj2 {
        [MY_SYMBOL]: string
    }

    // template literal을 사용하는 경우
    type myUnion = 'one' | 'two' | 'three';
    type yourUnion = 'four' | 'five' | 'six';
    type myTemplateLiteralType = `${myUnion} + ${yourUnion}`;
    type ddd ={
        [key in myTemplateLiteralType]:string;
    }

    // X index의 형태는 number string symbol 밖에 올 수 없다.
    interface StringArray2{
    [index: Cat]:string;
    } 

    // union type
    type myU = string | number;
    type sss = {
        [index: myU]:string|string[];
        1:'hello';
    }
```

<br/>

### 특징2: 다양한 형태의 index signature 사용시 주의
> index signature의 형태로 string, number를 둘다 사용할 경우, [index string]가 받는 데이터 형태는 index number가 받는 데이터 형태를 포함할 수 있어야 한다. index number는 string으로 간주 되기 때문이다.
> 예시
```ts
    // case1
    interface myobj {
        [index: number]: string
        [index: string]: number  // X 
    }
    interface myobj {
        [index: number]: string
        [index: string]: string  // o
    }

    //case2
    interface myobj {
        [index: number]: string
        [index: string]: string[] // X
    } 

    //case3
    interface Animal { 'name':string};
    interface Cat extends Animal{ 'color':string};
    interface StringArray {
        [index: number]: Cat;
        [index: string]: Animal; // O
    }
```

<br/>

### 특징3: 다양한 형태의 index signature 사용시 주의
> string index로 'dictionary' 만들기 쉽다. string index를 사용하면, 나머지 모든 프로퍼티들의 키(index)도 공통된 형을 가져야 한다. string index는 obj.property 와 obj['propperty'] 둘 모두 값 참조에 활용될 수 있다는 것을 선언하는 것이기 때문이다. 그런데, 만약 string index 가 union 타입이면, 여러가지 타입을 프로퍼티로 가질 수 있다. 어쨌든 string index의 형과 나머지 프로퍼티의 형이 맞아야 한다.
```ts
// dictionary 예시
dictionary1 = {
    "name":["Ryan","Lee"], 
    "job":"sw engineer", 
    "address": { "city":"seoul", "zip_code":"1234"} 
}
```
```ts
interface StringArray {
    [index: string]: string;
    name: string;
    age: number;
}
const test: StringArray = {
    'gender': 'female',
    1: 'sss',
    'name': 'myoungji',
    'age' : 12,
} // X
const test: StringArray = {
    'gender': 'female',
    '1': 'sss',
    'name': 'myoungji',
    'age' : 12,
} // o
```

<br/>

### 특징3: index signature를 사용하는 readonly 프로퍼티를 만들 수 있다.
```ts
type myUnion = 'one' | 'two' | 'three';
type yourUnion = 'four' | 'five' | 'six';
type myTemplateLiteralType = `${myUnion} + ${yourUnion}`;
type ddd ={
  readonly [key in myTemplateLiteralType]:number;
}

const myddd:ddd = {
"one + five": 15,
"one + six": 16,
'two + five': 25,
"two + six": 26,
"one + four": 0,
"two + four": 0,
"three + four": 0,
"three + five": 0,
"three + six": 0
}

// myddd['one + five'] = 100   // 에러.. readonly이기 때문
let a = myddd['one + five']
console.log(a,a,a,a);
```