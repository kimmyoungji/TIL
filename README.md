# TIL

## React Hook
- useState
- useEffect

## React Dom
### tags
- ```<Router>``` : Router 가장 바깥 태그
- ```<Route path="패스"><Route/>``` : 주소 별 요소들을 묶어주는 태그
- ```<Link />``` : 기본 주소에 주소를 추가한 <a> 요소를 만들어준다
- ```<reDirect />``` : 한 주소에서 다른 주소로 변경해준다.
- ```<switch> <switch/>```: 주소 별로 다른 요소가 나타날 수 있게 해주는 태그
### hooks
- useNavigate

## HTML
### tags
#### ```<br/>``` : 줄바꿈
  - 질문: 그냥 줄바꿈인데, 왜 width와 height가 있을까? 검색 해봤을 때도 아무런 높이나 넓이 값이 없어야 되는데.. 직접 해보니까 그렇지 않다.

## CSS
### margin collapsing
1. margin collapsing 이란: element의 마진이 겹치는 현상

2. margin과 padding의 용도차이: 
- margin은 sibling 요소관계에서의 여백을 위한 속성이고
- padding은 parent-child 요소관계에서의 여백을 위한 속성이다.

3. margin collapsing rules:
- 수평 마진에서만 margin collapsing이 발생한다.
- 하위 조건을 충족할 경우, child의 margin이 parent에세 전이된다.
  - parent 요소와 child 요소가 인접한다.(사이를 가로 막는 padding,border 또는 다른 요소가 없다)
  - 부모의 height가 정해져 있지 않다.
- 오직 인접한(직접 맞닿은) 요소의 마진만 겹치게 된다. <br/>을 활용하여, 두 요소를 떨어뜨려 놓을 수 있다.
- 인접한 두 요소의 마진값이 둘다 양수일 경우, 더 큰 마진이 선택된다.
- 인점한 두 요소의 마진값이 둘다 음수일 경우, 절대값이 더 큰 마진이 선택된다.
- 인접한 두 요소의 마진값이 각각 양수와 음수일 경우, 두 마진값의 합이 선택된다.
- 위의 rule들은, 'in-flow' 상태임(flex, grid, position:absolute)을 가정한다. 만약, 'in-flow' 상태에서 벗어나면 margin은 절대 무너지지 않는다. 이때는, margin 대신 gap을 사용하는 것이 좋다.
  
## TypeScript

## etc
