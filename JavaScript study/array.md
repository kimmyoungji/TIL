# array
자바스크립트의 배열은 특이 하다.   
자료형도 길이도 정해져 있지 않다. 아무거나 다 먹는 아이..ㅋㅋ   
그러나 아무거나 먹다 보면, 배탈이 나는 것 처럼,자바스크립트의 이 자유로운 배열에도 단점이 있다.   
배열에 들어있는 정보들이 일정한 형태를 유지하면서 연속적으로 저장되지 않으므로, 밀집성이 낮다.  
그래서 만약 밀집성이 요구되는 상황에서는 typed array를 사용하는 것이 좋다.
자바스크립트의 배열은, 정수 이외에 다른 것(예를 들면 배열의 각 칸의 값)을 []에 넣어 값을 참조할 수 없다. 오직 정수만 []안에 대입되어 배열의 값을 참조할 수 있다. 
여기는 무슨 뜻인지 모르겠다
 대괄호 구문 또는 속성 접근자를 사용해 정수가 아닌 키에 접근할 경우 배열의 요소가 아니라 배열의 객체 속성 컬렉션에 연결된 변수를 바라보게 됩니다. 순회 및 변형 작업 또한 이런 속성에 적용할 수 없습니다.

## 자주 사용하는 array 연산
- arr.pop
- arr.push
- arr.shift
- arr.unshift
- arr.splice(시작인텍스, 지우려는 개수)
- arr.indexof(인덱스 알아내려는 값)

## 배열 요소에 접근하기


> 참조
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array