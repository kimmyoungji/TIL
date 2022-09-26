# life cycle
* 컴포넌트의 생명주기: 생성 > 변화 > 변화 > ... > 파괴
* life cycle functions:
  * 생명주기의 중요한 지점에서 원하는 동작을 할 수 있게 도와주는 함수들
  * 화면이 마운트,업데이트,언마운트 되었을때 실행되는 콜백함수들
  * 질문) 한번만 실행되는 건가? 비동기 콜백함수를 이해해야 한다

## onMount
* 컴포넌트가 화면에 생성되는 시점에 실행되는 함수
```svelte
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});
</script>
```
* 생명주기 함수들은, ssr 일때는 실행되지 않는다. (onDestroy는 예외)
* 그래서, 위의 fetch는 마운트 함수 내부에서 실행되는 것이 좋다.
* 왜냐하면, ??? 모르겠다 이해 안됨
* 다시 읽어보기 https://svelte.dev/tutorial/onmount
### 추가
* life cycle function은 컴포넌트가 초기화 될때 꼭 실행되어만 한다
* 왜냐하면, 그래야만 life cycle 함수가 컴포넌트의 인스턴스에 연결이 되기 때문이다. ??? 
* 만약 onMount 콜백함수가 함수를 반환한다면 그 함수는 컴포넌트가 파괴 될때 호출된다.


## onDestroy
* 컴포넌트가 화면에서 파괴되는 시점에 실행되는 함수
```svelte
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```


## beforeUpdate
* DOM이 업데이트 되기 직전인 시점에서 실행되는 함수
* afterUpdate는 반대로 업데이트가 끝난 직후인 시점에서 실행되는 함수이다.
* https://svelte.dev/tutorial/update > 자동 스크롤링 적용해보자


## tick
* 원하는 시점에 호출할 수 있는 함수이다
* DOM에 적용된, 지연된 상태들을 해결하여 promise를 반환한다. 