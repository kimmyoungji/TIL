# store
* store란 set, subscrifbe, unsubscribe를 가지고 있는 객체이다.
* store는 프로젝트가 실행되는 동안, 지속적으로 참조되는 변수를 객체로 만들어 놓은 것이다.
* svelte의 store 모듈은 이 store 객체의 모음이다.

스벨트에서 주로 사용하는 store 객체는 3가지이다.
## writable
* 값을 참조하고, store 외부에서 값을 변화시킬 수 있는(update) store / update를 통해 값을 변화시킬 수 있다.
* writable(기본값, set콜백함수?)

  사용예시
  ```svelte
  // .svelte
  <script>
    import { count  } from "store.ts"
    import { onDestroy } from "svelte"
    const countValue;
    const unsubscribe = count.subscribe(()=>{
    countValue = count;
  })
  $count.update(n=>n+1)
  onDestroy(unsubscribe);
  </script>
  <h>{$count}</h>
  ```
  ```svelte
  // .svelte - auto subscribtion을 사용하여 위의 코드를 축약한 코드
  <script> svelte
    import { count } from "store.ts"
    $count = $count + 1;
  </script>
  <h>{$count}</h>
  ```
  ```ts
  // store.ts
  import { writable } form  "svelte/store";
  export count = writable(0, set => { set(10) return ()=>{}});
  ```
    ### set
    * 구독자가 0 -> 1이 될 때 한번 호출 된다
    * stop 콜백함수를 반환한다. stop함수는 구독자가 1 -> 0이 될 대 호출된다.
    * writable 객체의 set 메소드를 인자로 받아서 사용자 정의 메소드 내에서 호출하여 사용한다.
    질문) 구독자가 0명보다 많을 때 set 메소드가 계속 호출되는가? 구독자가 0명이 되면, stop 메소드가 호출되는가? 
## readable
* 값을 참조하고, store의 외부에서 값을 변화시킬 없는(오직 store 내부에서 값을 변화시킬 수 있는) store
* 오직 set()을 통해서만 값을 변화 시킬 수 있는 store 변수  
* readable(기본값, set콜백함수)

  사용예시 
  ```svelte
  // .svelte
  <script>
    import {count2} from "store2.ts"
  </script>
  <h>{$count2}</h>
  ```
  ```ts
  // store.ts
  import { readable } form  "svelte/store";
  export count = readable(0, set => { 
                              set(new Date);
                              const interval = setInterval(()=>{set(new Date)},1000) 
                              return (()=>{
                                clearInterval(interval);
                              });
                            }
                           );
  ```

## derived
- 참조 할수 있고, 객체 외부에서 값을 변화시킬 수 없다. 여러 개의 store를 조합하여, 하나의 store을 얻어 낼 수 있다.
- derived(store배열, 콜백함수($store 배열, set콜백함수), set호출 전 사용할 기본값)  

  사용예시
  ``` svelte
  <script>
    import {count3} from "store2.ts"
  </script>
  <h>{$count3}</h>
  ```
  ```ts
  import { readable, derived } from "svelte/store"

  export const time = readable(0,
                          set=>{ 
                            set(new Date); 
                            const interval = setInterval(()=>{set(new Date)},1000);
                            return clearInterval(interval); 
                          }
                        ) 
  export const inputNum = writable(0)
  export const count3 = derived([time,inputNum],[$time,$inputNum]=>{return($time + $inputNum);,0});
  ```

## get
- 일시적으로, store을 구독해서, 값을 앍어온뒤에 다시 구독을 풀어주는 메소드
- 사용예시 
  ```
  import { get } from "svelte/store"
  const value = get(store);
  ```

## custom stores
- subscribe, set, undubscribe 메소드를 가지고 있는 객체를 정의하면 된다.
- svelte에서 제공하는 store 객체에 정의 되어있는 subscribe, set, update 메소드를 콜백함수로 활용하여 만든 객체를 반환하는 방식으로 커스텀 객체를 만들 수 있다.
- 사용예시 
```ts
  function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		  subscribe,
		  increment: () => update(n => n + 1),
		  decrement: () => update(n => n - 1),
		  reset: () => set(0)
	  };
  }
```