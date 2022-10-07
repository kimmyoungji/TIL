# html data-attribute
html data-attribute는 html요소에 원하는 (커스텀?) 속성을 추가할 수 있게 해준다.  
사용방법은 매우 간단하다.   
html요소의 머리태그 안에서 속성을 추가할 수 있는데, 이때 추가하는 속성명 앞에 'data-'를 붙여주면 된다.   
예를 들어 ```<div>``` 태그에 favoriteColor 라는 새로운 속성을 추가하고 싶다면,   
```<div data-favoriteColor="#ffffff">``` 와 같이 추가해줄 수 있다.  
우리는 이렇게 새롭게 추가한 html 요소의 속성값을 가져다 js와 css에서 사용할 수도 있다.  
js에서의 사용방식은 바닐라 js로 제작을 할 때만 알 필요가 있으므로 넘어가고  
스벨트 프로젝트를 하고 있는 내가 알아야 하는 것은 css에서 사용하는 방법이다.  
css에서 우리가 추가한 html 속성의 값을 사용하고 싶을 때는, 'attr(속성명)'이라는 함수를 활용해야 한다.
우리가 정의한 속성의 이름을 인자로 넣으면, CssProperties 객체를 반환해주어 css에 적용이 된다. 아래는 그 예시이다.
```css
article::before {
  content: attr(data-parent);
}
```
html 속성값은 css에서 그 값을 사용할 수도 있지만, 속성 선택자가 선택하는 속성이 될 수도 있다. 우리가 추가한 속성이 속성 선택자에 의해 선택 되는 방식은 기본 html 속성들이 선택되는 방식과 똑같다.
선택하고자 하는 요소[속성명 = "속성값"]{} 의 형태로 선택할 수 있다. 예시는 아래와 같다
```css
article[data-columns="3"] {
  width: 400px;
}
```

