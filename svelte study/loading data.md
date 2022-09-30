# loading data
* 아하 laod 함수는 라우트 폴더 안의 +page나 +layout.svelte 파일에 데이터를 반환해주는 함수구나
* 아 그래서 Data load에서 함수명을 따온건가 보다
  
# Loading data
* 질문. 그럼 load 함수는 언제 호출되는 거지 ????
* 흠.. 일단 +page.js 또는 +layout.js 코드는 서버와 브라우저 두 곳에서 실행 된다고 한다. 
* +page.server.js는 이름 그대로 서버에서만 오키오키 이건 알겠다구..
* 근데 도데체 언제 누가 호출을 하는거지 ???? 

* 이건 또 뭔 소리래..
> in which case(+page.server.js에 정의된 load 함수의 경우) it can (for example) make database calls and access private environment variables, but can only return data that can be serialized with devalue. In both cases, the return value (if there is one) must be an object.
*  그러니까...
*  +page.server.js에 정의된 load 함수의 경우, 데이터베이스를 호출하거나, 개인환경변수(???)에 접근 할 수 있게 된다. 하지만 오직 반환한다 devalue로 serializable 한 데이터만을..  ???? 뭔소리여...
*  + page.ts 이든 +page.server.ts이든 반환값은 반드시 객체 이어야만 한다.
*  코드 예시
``` svelte
// src/routes/+page.js
/** @type {import('./$types').PageLoad} */
export function load(event) {
  return {
    some: 'data'
  };
}
```
* 근데... 왜 꼭 로드 함수를 통해서 데이터를 가져와야 하는거지? 그냥 바로 데이터를 import 하면 안되나 ????

## input property
- +page.js의 load 함수는 인자로 LoadEvent를 받는다
- +page.server.js의 load 함수는 인자로 ServerLoadEvent를 받는다
  - ServerLoadEvent는 ClientAddress, cookies, locals, platfrom, request(RequestEvent의)를 상속 받는다.

모든 이벤트는 아래와 같은 속성들을 가진다
## data
* 오오.. 신기 +page.js에서는 데이터를 주고, +page.sever.js는 데이터를 받는구나.. 좋군  
* 엥?? 근데 왜 코드를 이렇게 짜는 거지? 아까 +page.와 +page.server.js 둘다 인자를 받는다고 읽었는데, 왜 여기 코드에서는 +pgae.js만 인자를 받는 거지? 그것도 {data}를?? 데이터는 내부에서 정의하는 것 아니었나??
* 오오오오오 진짜루??  잠깐만 다시 읽어볼께
* +page를 사용하려면 forms 모듈의 pageData를 알아야한다.. 
* 흠.. 페이지 데이터란 $page.data store의 일반적인 형태를 정의한다고?? 으으 어려워ㅜㅜㅜㅜㅜ 너무 깊게 들어가나?? 
* 뭔가 낯설다.. $page.data store이 모든 페이지에서 접근 가능한 데이터의 형태를 정의하는 녀석이라고? 흠... 일단 납득은 간다. 그러니까 +page.js 와 +page.server.js에서 데이터 형으로 사용하는 거겠지? 
* 역시 일단 직접 해봐야 겠다. data라는 명칭을 정해주지 않았는데도, 이미 data라고 부르는 건지, 아니면 내가 어떤 코드를 놓친건지.. 
* 근데, 그전에 +page.svelte와 +page.server.svelte가 어떤 관계인지 알고 싶다. 정말 한쪽은 데이터를 받고, 한 쪽은 데이터를 주는 건가??  그럼 어느쪽이 그런거지?? 
* 일단 확실 한것: 데이터의 흐름은 다음과 같다
  * +page.server.js > +page.js > +page.svelte 
* 소희는 데이터를 어디에 정의하고 있다고 했지?? 페이지 대신 store 폴더를 만드는게 좋으려나? 아니면 그냥 컴포넌트에 데이터를 두는게 좋을까? 또 너무 처음 부터 실패하지 않으려고 애쓰고 있는 것 같다 ..ㅎㅎ 실패해도 괜찮으니까 일단 바로 행동할 수 있는 쪽으로 나아가자

## params
* 흠... 진짜 모르겠다.. 역시 store를 만들어서 작업을 하는게 맞는 것 같다
* 아니면 진짜 데이터 가 차치하고 기능 구현에 집중하는 것이 더 올바른 방향 같긴 하다
* derived 흠.. 이건 스토어에서 나왔던 개념 인디..
* 기능 구현하면서, store과 navigtion 모듈에 집중을 하쟈...

ㅁ닝라ㅓㅁㄴㅇ리ㅓㅂㄷㄱ;ㅐㄹ먼ㅇ;ㄹ 아 진짜 모르겠다
더 이상 읽혀지지가 않아!!

> 참조
> https://kit.svelte.dev/docs/load