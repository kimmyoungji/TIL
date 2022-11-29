# intersection type 

### intersection Types
- & 기호로 두 타입을 묶어서, 새로운 타입을 만드는 것
- interface 와 intersection 의 차이는, 충돌을 다루는 방식이다(??)
- interface는 & 기호로 확장불가
  
```ts
type myadress = loadArdress & blockAdress; 

//O
interface Animal {
  'species': string;
  'genus': string;
 ' family': string;
  'class': string;
}
type myAnimal = Animal & undefined;
```