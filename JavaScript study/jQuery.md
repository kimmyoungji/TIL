# jQuery 

### jquery
- js를 활용하여 웹 문서를 작성할 때, 돔 엘리먼트 선택 및 조작 코드의 길이를 줄인 라이브러리. 
- 형태적 특징: 행동적 모델, 메서드 체이닝
- 기능적 특징: 입력 코드양이 적지만, 실행 속도가 느리다. native js로 한번 변환되어야 하기 때문이다.

```ts
// jquery 이전에 돔 엘리먼트를 선택하고 조작하는 방법
const textNode = document.querySelector('.textNode');
textNode.style.color('red');
document.querySelector('#myDiv').appendTo(textNode);
```
```ts
// jquery를 사용하여 돔 엘리먼트를 선택하고 조작하는 방법
$('.textNode').css('color','red').appendTo('#mydiv');
```