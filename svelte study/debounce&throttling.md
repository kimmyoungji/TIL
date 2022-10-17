# debounce
디바운스란, 연속적으로 발생하는 이벤트들을 효율적으로 처리해주는 방법의 일종이다.
디바운스는 연속적으로 이벤트들이 발생했을 때, 연속이벤트의 처음 또는 마지막 이벤트만 처리해주는 방식이다.
lodash 라이브러리가 debounce()를 제공한다 문법은 다음과 같다

> _.debounce(func, wait?, option?):newDebouncedFunc
> - func: 디바운스될 함수
> - wait: 디바운스된 함수를 실행시키기전, 잠깐 기다릴 시간. 기본값은 0초
> - option: {leading, maxWait, trailing}

```ts
import {_} from "...lodash"
const debounce_func = _.debounce(()=>{원하는 동작}, 1000, {leading: false, maxWait: 2000, }) // 이렇게 하면, 1초 내에 이벤트가 발생하지 않으면 마지막 이벤트에 의해 실행되는 함수를 실행시킨다. 1초 내에 debounce_func()이 또 호출 되면, 함수를 실행하지 않고 기다린다. 단 maxWait인 2초를 넘기면 함수를 실행시켜준다. 
```


# throtling
- 스로틀링이란, 한번 이벤트가 발생한 뒤에, 일정 시간 동안 이벤트 발생을 막는 이벤트 처리 방법이다