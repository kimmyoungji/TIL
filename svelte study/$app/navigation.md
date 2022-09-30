# navigation
- 페이지 네비게이션 기능을 모아 놓은 모듈

## afterNavigate
- 컴포넌트가 마운트 되거나, 페이지가 새로운 URL로 navigate 될 때 호출되는 메소드. 
- navigation 된 이후 원하는 처리를 콜백함수로 묶어서 인자로 전달하면, afterNavigate 내부에서 호출된다.
- 사용예시
  ```ts
  import {afterNavigate} from '$app/naviagtion';
  afterNavigate(()=>{console.log("moved to new URL")});
  ```

## beforeNavigate
- 새로운 URL페이지로 navigate되기 전에 호출되는 메소드
- navigation 되기 이전에 원하는 처리를 콜백함수로 묶어서 인자로 전달하면, beforeNavigate 내부에서 호출된다.
  - 콜백함수의 인자로 전달되는 cancel함수는, 페이지가 navigation이 완료되는 것을 막아준다.
  - 질문) 추가적인 정의를 해줄 수 있는가? 
- 사용예시
  ```ts
	import {beforeNavigate} from '$app/navigation'
	beforeNavigate(({()=>{console.log("cancel")}})=>{console.log("about to move to new URL")});
  ```

## goto
- 새로운 URL로 이동 할 때 사용하는 메소드로, promise를 반환한다.
- 문법
  ```ts
  function goto(
    url: string | URL,
    opts?: {
      replaceState?: boolean;
      noscroll?: boolean;
      keepfocus?: boolean;
      state?: any;
    }
  ): Promise<void>;
  ```
- 사용예시
  ```ts
  import {goto} from '$app/navigation'
  goto("가고자 하는 페이지의 URL");
  ```

## invalidate
- svelte kit의 +page.svelte는 +page.js에 load 함수가 정의된다. 여기에 페이지에서 사용하는 데이터들에 대한 기록과 연산이 이루어진다.
- invalidate는 인자로 받는 URL의 load 함수를 원하는 시점에 호출해준다.
- 반환값으로 promise<void>를 반환한다. 페이지가 성공적으로 update되면 resovle를 문제가 발생하면 rejected상태의 promise를 반환한다.
- 문법
  ```ts
  function invalidate(url: string | URL | ((url: URL) => boolean)): Promise<void>;
  ```
- 사용 예시
  ```ts
    import {invalidate} from "$app/navigation"
    invalidate("업데이트하고자 하는 페이지의 url");
  ```

## invalidateAll
- 현재 활성화 되어 있는 모든 페이지의 load 함수를 실행시키고, promise로 결과를 반환한다.
- 질문 ) 한번에 활성화 되어 있는 페이지가 1개 이상일 수가 있는가?? 
- 문법
  ```ts
    function invalidateAll(): Promise<void>;
  ```

## prefetch
- 기능1. 원하는 페이지에 사용되는 데이터들이 이미 load되어 있도록 한다.
- 기능2. 적절한 옵션에 따라, 페이지의 load함수를 호출한다.
- fetch API에 대해 좀 더 알아보아야 한다. 
- 문법
```ts
function prefetch(href: string): Promise<void>;
```

## prefetchRoutes
- 페이지가 아닌, 라우트를 패치 해준다. promise를 결과로 반환한다.
- load 함수를 패치 하지 않는다.
- 문법
```ts
function prefetchRoutes(routes?: string[]): Promise<void>;
```