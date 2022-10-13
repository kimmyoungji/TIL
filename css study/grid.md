# gird
흠.. css 그리드 문법은 계속 까먹는 다.. 기억할 수 있는 좋은 방법을 떠올려 보자. 문법도 정리하고 일단 기억하는대로 써보자

일단, css grid 문법은 두 가지로 분류할 수 있다. 
컨테이너에서 정의 되는 grid 속성과 아이템에서 정의 되는 그리드 속성이다.

## container에서의 grid 속성
컨테이너에서는 그리드의 행과 열의 수를 정해줄 수 있다. 이때 사용하는 것이
grid-column-template 와 grid-row-template 이다.
> 문법    
> gird-template-rows: 행width 행width 행wdith / 열height 열height 열height; 
```css
// gird-column-template , grid-row-template 사용예
.container{
    display: grid;
    grid-template-rows: 1rem 1rem 1rem; //1rem 짜리 3행이 만들어진다
    grid-template-columns: 1rem 1rem 1rem; //1rem 짜리 3열이 만들어진다
    grid: auto auto auto / auto auto auto //3*3(행*열) 그리드가 만들어진다. 
    
    // 주의!
    // "gird"라고 쓰는 실수를 자꾸한다
    // grid-column-template: 2 //이러면 2열 짜리 그리드가 만들어진다 --> 땡 이건 안됨
    // gird-row-template: 3 //이러면 3행 짜리 그리드가 만들어진다 --> 땡 이건 안됨
}
```

## item에서의 grid 속성
아이템에서는 해당 아이템이 차지하고자 하는 그리드의 영역을 시작(행|열)line과 끝(행|열)line으로 정해줄 수 있다. 이때 사용하는 것이
grid-row와 grid-column 이다.
> 문법  
> gird-row: 시작line / 끝line ;
```css
// grid-columns, grid-rows 사용예
.container > .item{
    grid-row: 1 / 2 ; //아이템이 그리드 열line1~2에 사이의 칸을 차지한다.
    grid-column: 2 / 3 ; //아이템이 그리드 해line2~3에 사이의 칸을 차지한다.
}
```



> 질문: 만약 그리드에 들어갈 아이템이 넘치면 어떻게 되는 걸까?   
>   
> 추가 할 내용  
> grid-auto-column  
> grid-auto-row  
> grid-auto-flow 는 추후에 추가하기  
>   
> grid-template-areas  
> grid-area 도 추후에 추가하기  


