# $app/navigation
- 이 모듈은 스벨트의 페이지 경로 찾기를 위한 모듈이다.

## after navigate
* lifecycle function이다.
  * lifecycle fucntion이 뭐지? : 
    * 현재의 컴포넌트가 마운트 될때, 제공된 콜백함수를 실행시킨다. 
    * 즉, 새로운 페이지 또는 컴포넌트가 화면에 그려질 때(mount), 실행되는 함수
* afterNavigate는 컴포넌트 초기화할 때 꼭 실행시켜야 한다.
* afterNavigate는 컴포넌트가 화면에 그려질 동안 활성상태로 유지된다. ???? 
  * 질문: 컴포넌트가 화면에 있으면, 계속 반복 호출이 되는 것인가? 
  * 위의 질문은 비동기 콜백 함수를 이해해야 설명할 수 있다.
*  질문, onMount가 있는데, 왜 afterNavigate를 사용하지??????
```svelte
function afterNavigate(callback: (navigation: Navigation) => void): void;
```

## before navigate
- navigation interceptor
- 새로운 URL로 navigate 되기 이전인 시점에 호출되는 함수
- 링크 클릭, goto() 호출, 브라우저 앞/뒤로 가기 버튼
- cancel()을 호출하면 navigation이 완료되는 것을 막을 수 있다.
- beforeNavigate도 컴포넌트가 초기화 되기 이전에 호출되어야 한다.
- beforeNavigate도 컴포넌트가 mount 되어있는 동안 활성상태에 있다.
```svelte
function beforeNavigate(
  callback: (navigation: Navigation & { cancel: () => void }) => void
): void;
```

## disableScrollHandling
* ??? 모르겠다 별로 안 중요한 듯

## goto
* svelteKit이 특정 URL로 naviagte하는데 성공하거나 실패하였을때, promise를 반환한다.
* 예시
```svelte
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

## invalidate






> 참조
> https://kit.svelte.dev/docs/modules#$app-navigation