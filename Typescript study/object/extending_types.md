# extending_types

### Extending Types란
interface로 정의한 타입을 다른 interface 정의 타입이 상속받을 수 있다. 그것도 여러개 상속 받을 수 있다. 이로서, 지나치게 프로퍼티를 늘어 놓는 코드를 예방하고, 타입간의 연관성도 보여줄 수 있다.

<br> 

```ts
interface profiletype {
    name: string,
    age: number,
    gender: string,
}
interface basicdatatype{
    purpose: string,
    importance: number,
}
interface mydiettype extends profiletype, basicdatatype{
    whatIate: string[],
    whenIate: Date[],
    HowMuchIate: number[]
}
```