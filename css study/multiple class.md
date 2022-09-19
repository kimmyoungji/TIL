# multiple class
## #header.red  vs #header .red
* #header.red : id가 header이고 클래스명으로 red를 가진 요소를 선택
* #header.red : id가 header인 요소의 자식 중, 클래스명으로 red를 가진 요소 선택
  * ' ' 빈칸이 자식요소를 선택할 때 사용하는 combinator 선택자임을 기억하자 
  
## ID and Class selector
``` html
<h1 id="one" class="two">this</h1>
```
``` css 
#one.two{color:red} //id가 one이고, class명으로 red를 가진 요소 선택하기
```

## Double class Selector
``` html
<h1 class="two three">this</h1>
```
``` css 
.two.three{color:red} //클래스 명으로 two와 three를 가진 요소 선택하기
```