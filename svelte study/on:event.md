# on:event
스벨트에서는 DOM event를 보다 쉽게 사용할 수 있는 기능들을 제공한다.
우선, 스벨트 프로젝트에서 DOM event를 듣기 위해, on:event명 을 이벤트를 열어주고 싶은 DOM 요소의 속성으로 추가하면 된다. 

## event modifier
스벨트에서는 event modifier 라는 기능을 제공한다. 이 녀석은 on:event명이 듣는 DOM event에 자주 사용하는 몇가지 단어만을 이용해 동작들을 추가할 수 있게 해주는 기능이다.
스벨트에서 제공하는 event modifier는 여러가지가 있다.
single, stopPropagation, stopImmediatePropagation, 등등... 사용할 필요가 있을 때 추가적으로 찾아보자.
이런 event modifier는 on:event|modifier 와 같이 사용한다.

## Component event & event dispatch
일단, 컴포넌트이벤트는 스벨트 프로젝트 파일안에 쓰여진 돔요소가 가지는 on:event명을 지칭한다.
event dispatch란, 이벤트가 발생한 요소에서 다른 요소로 이벤트를 전달하는 동작을 부르는 이름이다.
스벨트 프로젝트 파일에서 event dispatch를 하기 위해서는 최소 두개의 프로젝트 파일이 필요하다. 
하나는 자식 컴포넌트의 파일, 나머지 하나는 그 자식 컴포넌트를 사용하는 파일이 필요하다.
그리고 자식 컴포넌트 내부에서 우리는 스크립트 상단에 createEventDispatcher() 생성자를 호출하여 EeventDisPatcher 인스턴스를 만들어주어야 한다. 그래야만 스벨트가 제공하는 dispatch 기능을 사용할 수 있다.
그리고 생성한 인스턴스명을 dispatch 라고 하자.
그 다음에는, dispatch 해주고 싶은 이벤의의 헨들러 함수 내부에서
dispatch('전달된 이벤트를 받는 이벤트의 이름',{key:value 이벤트가 전달하는 내용});
이벤트를 전달 받는 컴포넌트의 요소에 dispatch()의 첫번째 인자로 전달했던 이벤트의 이름의 이벤트를 열어준다. 그리고 원하는 핸들러 함수를 할당해주면된다.
끝~ 좀 복잡하지만 익숙해지면 쉬울것이다.


질문: 스벨트 프로젝트 파일 안에 작성되는 돔 요소는 리엑트 처럼 가상 돔인가? 그래서 이벤트 버블링이 발생하지 않는 것일까? 


## Event Forwarding
Dom event와 다르게 스벨트 컴포넌트의 이벤트는 버블링이 발생하지 않는다.
그래서 자식 이벤트를 부모에게 전달하고 싶을 때 (이걸 fowarding이라고 한다.) 우리는 dispatch를 사용해서 이벤트를 전달해 주어야 한다.
고 생각하겠지만! 
감사하게도 스벨트가 똑똑한 문법을 제공하고 있다.
만약 on:event명 으로 이벤트를 열어주고, 이벤트 헨들러 함수를 할당하지 않으면 자동으로 부모에게 fowarding 된다. 굿!




