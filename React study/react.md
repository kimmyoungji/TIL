
# React
html, css, js/ts를 사용하여, 프로그램을 빌드해주는 프레임워크. 컴포넌트를 만들어서 사용할 수 있고, hook 함수들로
프로젝트에 사용되는 변수의 상태 관리를 해줄 수 있다.

## 리엑트는 왜 만들어졌지? 
### 1) 리엑트 이전, DOM Selector API
> > DOM Selector API란?  
> > 선택자 API는 DOM에서 Element 노드를 선택자를 통해
> > 가져올 수 있는 메서드를 제공한다.  
> > 예) ```const number = document.getElementById('number')```  

> #### 과거 코드 예시 (HTML + JS)
> ```
> // 00.html
> <h2 id="number">0</h2>
> <div>
>   <button id="increase">+1</button>
> </div>
> 
> //00.js
> const number = document.getElementById> ('number');
> const increase = document.getElementById('increase'); // 이게 DOM Selector API
> 
> increase.onclick = () => {
>   const current = parseInt(number.innerText, 10);
>   number.innerText = current + 1;
> };
> ```
## 2) 설명
- 웹페이지를 만드는 과정에서 사용되는 변수들이 많아지고, 그 변화가 복잡해 질 경우가 생긴다.  
그러면 처리할 이벤트가 다양해지고, 관리해야 할 상태값도 다양해지고, DOM도 다양해진고, DOM 업데이트 규칙이 복잡해진다.
- 그래서 Ember, Backbone, AngularJS 등의 프레임워크가 만들어졌다.  
- 이들은 모두 JS의 특정 값이 변화하면, DOM 속성이 바뀌도록 연결해주는 기능을 제공한다.
- 위 프레임워크와 리엑트의 차별점: Virtual DOM
### virtual DOM이란
- 실제 DOM이 아닌 메모리에 가상으로 존재하는 DOM으로 그냥 JS객체
- 실제 DOM을 보여주는 것 보다 속도가 빠르다.
- 상태변수가 업데이트 되면, 가상 DOM이 업데이트 되어 보여진다.  
- 그리고 리액트 개발팀이 만든 비교 알고리즘을 통해, 실제 브라우저에 보여지고 있는 DOM과 비교한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM에 패치시켜준다. 
- 그결과 웹페이지 개발자는 업데이트를 어떻게 할 수고를 덜게 되었다.
  
  



