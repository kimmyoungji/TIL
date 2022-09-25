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
### 



### SSR
* server side rendering
* 서버로 부터 완전하게 만들어진 htm 파일을 받아와 페이지 전체를 렌더링하는 방식
### CSR
* client side rendering
* 사용자의 요청에 따라 필요한 부분만 응답 받아 렌더링하는 방식