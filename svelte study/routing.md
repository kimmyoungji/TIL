# Routing
* 스벨트의 핵심: 파일 시스템 기반 라우터
  * URL 경로가 프로젝트의 폴더 구조로 정의된다.
  * src/routes 가 root 루트 이다
  * src/routes/blog/[slug] 형식으로 URL 정의가 가능하다. [slug]는 임의의 데이터가 할당되는 인자이다. 이를 통해 동적으로 데이터를 가져올 수 있다.
  * project config를 통해서 src/route를 다른 곳으로 설정할 수 있다.
  * 각각의 route 폴더 안에는 "+"로 시작하는 루트 파일이 있다.

## +page
### +page.svelte
* +page.svelte 요소는 app의 페이지를 정의한다
* 페이지는 (초기 렌더링)SSR과 (이어지는 변화)CSR 두 곳에 모두 렌더된다.

### +page.js
* 페이지가 렌더되기 이전에, 데이터가 필요할 경우 +page.js 또는 +page.ts 모듈을 추가 한다.
* +page.js 또는 +page.ts 모듈은 load 함수를 export한다.

### +page.server.js
* 만약 load 함수가 서버에서만 호출된다면, 파일명을 +page.server.js로 바꿔주어도 된다
* 예를 들어, 데이터 베이스에서 데이터르 패치해오거나, API key같은 개인 환경변수에 접근 하고자 할때
* SCR이 일어날 때는, 이 파일의 경우, load 함수에 의한 연산 결과가 반환되는데 이 값은 serializable(?)해야한다.

## +error
* 만약 load 과정에서 에러가 발생한다면 sveltekit은 기본 에러 페이지를 렌더할 것이다.
* +error.svetle 를 라우트 폴더에 추가하여, 에러시 나타나는 페이지를 커스텀할 수 있다.
* 에러가 나면, sveltekit은 루트 폴더 트리를 따라 올라갈 것이다. 그리고 가장 가까운 +error.svelte를 렌더링 할 것이다. 만약 루트폴더의 에러페이지도 렌더되지 않으면 src/error.html이 렌더링도리것이다. 이를 편집하여 원하는 형태로 수정할 수 있다.

## +layout
* +page는 페이지 전체를 렌더링한다. 
* +layout은 페이지의 구성요소, 일부의 렌더링은 조정할 수 있다.
### +layout.svelte
* +layout.svelte는 <slot> 태그를 꼭 포함하고 있어야 한다.
* <slot> 태그 안에, URL에따라, 하위 route 폴더의 내용이 들어온다.
### +layout.js
* +layout.svelte에서 사용할 수 있는 데이터를 정의할 수 있다.
* +page.js와 마찬가지로, load 함수를 반환해야 한다.
* 만약 load 함수가 prerender, ssr, csr 등의 페이지 옵션을 반환한다면, 이것들은 자식 페이지들을  렌더할 때의 기본값으로 활용된다.
* load 함수에서 반환하는 모든 데이터를 자식 페이지에서 활용할 수 있다.
### +layout.server.js
* 만약 레이아웃의 load 함수가 오직 서버에서 호출 된다면, 파일명을 +layout.server.js로 바꿔주는 것이 좋다.
* 그리고 LayoutLoad 타입을 LayoutServerLoad로 바꾸어 준다.
* +layout.server.js도 페이지옵션(prerender,ssr,csr)을 export 할 수 있다

## +server
* 라우트를 정의 할 수 있다. (API라우트, 또는 EndPoint라고 부르기도 한다)
* 응답은 직접 조작할 수 있게 해준다.
* +server.js (또는 +server.ts)는 HTTP verbs (GET,POST,PATCH,PUT,DELETE)와 같은 함수들을 export할 수 있다. 이 함수들은 RequestEvent를 인자로 받고, Response 객체를 반환한다.
### Receiving data
- + server.js에서 POST/PUT/PATCH/DELETE 핸들러등을 정의하여 API제작에 사용될 수 있다.
### Content negotiation
- +server.js 와 +page는 하나의 루트 폴더에 들어갈 수 있다. +page는 페이지가 되고, +server.js는 API 엔드 포인트가 된다. 
- 하나의 루트로 들어오는 HTTP 메세지는 HTTP 메소드에 따라, 어느 파일이 해당 메시지를 처리할지 결정한다.
- PUT/PATCH/DELETE 의 경우 항상 +server.js에 의해 처리 된다. 왜냐하면, 이것들은 페이지에 변화를 주지 않기 때문이다.
- GET / POST 요청의 경우, 만약 헤더 prioritise text/html이 있을 받을 경우(즉, 브라우저의 페이지 요청일 경우) 페이지 요청으로 처리하고, 그 이외의 경우에는 +server.js가 다룬다. ????? 

## $types
- 위의 설명들을 하면서, 우리는 $types.d.ts 파일에서 타입들을 import해왔다. 
- $types.d.ts 파일은 svelte가 숨겨진 폴더에 만든다
- 만약 네가 ts 또는 jsDoc을 사용할 경우, 루트 파일과 작업을 할 때, type safety를 제공하기 위해 만들어진다. 
```ts
//src/routes/blog/[slug]/+page.svelte
<script>
  /** @type {import('./$types').PageData} */
  export let data; //+page.js에서 export 되는 load에서 반환된 그 어떤 정보의 형태를 가짐을 의미한다.
  // 이는 +page.server.js,+layout.js, +layout.server.js, +server.js,도 모두 해당된다.
  // 이는 변수가 올바른 형태로 확실하게 typed 되도록 도와준다.  
</script>
```

## other files
- 위에서 설명한 명명 규칙에 따르지 않는 route 안의 다른 파일들은 모두 sveltekit이 무시한다.
- 그래서 너는 컴포넌트나 유틸리티 모듈을 라우트 폴더 안에 위치 시켜도 된다.
- 만약 컴포넌트와 모듈이 여러 라우트 폴더에 사용될 경우, 이들을 하나로 묶어서 $lib에 넣어주는 것을 추천한다.
### $lib




### SSR
* server side rendering
* 서버로 부터 완전하게 만들어진 htm 파일을 받아와 페이지 전체를 렌더링하는 방식
### CSR
* client side rendering
* 사용자의 요청에 따라 필요한 부분만 응답 받아 렌더링하는 방식