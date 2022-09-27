# $app/store
* store 모듈은, readabl, writable, derived를 만드는 함수를 export한다.
* .subscribe, .unsubscride, .set 세가지 메소드를 가지고 있는 객체을 store 객체로 본다.
* ???? 질문
  * is a valid store, and will work both with the special syntax, and with Svelte's built-in derived stores.
* 이 store 모듈을 활용하여, 다른 state handling 라이브러리들을 포장하여 사용할 수 있다.
  
## writable
* writable 함수는, 외부에서 값을 지정할 수 있는 store을 만들어 준다
* 문법
``` svelte
store = writable(value?: any)
store = writable(value?: any, start?: (set: (value: any) => void) => () => void)
```
### set
* set은 하나의 인자를 받는 함수로, store에 할당하는 값을 인자로 받는다. 
* 만약, set이 받은 인자와 store에 저장된 값을 비교하여, 다른 부분이 있을 경우 set의 인자와 store에 저장된 값이 같아지도록 만들어준다
### update
* update는 하나의 인자를 받는 콜백함수이다. 이 콜백함수는 기존의 store 값을 자신의 인자로 받고, store에 저장될 값을 새로 반환해준다.
* 예시
```svelte
import { writable } from 'svelte/store';

const count = writable(0);

count.subscribe(value => {
	console.log(value);
}); // logs '0'

count.set(1); // logs '1'

count.update(n => n + 1); // logs '2'
```
## writable(초기값,set콜백함수)의 인자가 두개 인경우
* set 콜백 함수는 해당 store 변수가 구독자 0명에서 1명이 될 때, 호출된다. 구독자가 1 -> 2명이 될때는 호출이 되지 않는다.
* set 콜백 함수는 반드시, 