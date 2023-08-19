#0816 HTML CSS

## 1. 레이아웃 기초

### 레이아웃을 결정하는 css 속성들
        1) width,height: npx | n% | nrem | auto
        2) position: static | relative | absolute | fxied | sticky
        3) display: inline | block | inline-block | flex | grid
        4) float: right | left
        5) clear: right | left | both
   
### 레이아웃 전용 display 속성 flex 와 grid
6) flex: 요소를 컨테이너와 아이템으로 구분하고, 아이템을 x,y축을 기준으로 정렬하는 레이아웃
```css
.flex-container{
    display: flex;
    justify-contents: flex-end | flex-start | center | space-between | space-around .. 
    align-items: (justify-contents와 똑같)
}
.item{
    justify-self: start | end | center | stretch
}
```

7) grid: 행렬에 따른 레이아웃
```css
.grid-container{
    display: grid;
    gird-template-columns: 200px 1fr 1fr
    grid-template-rows: repeat(5,1fr)
    grid-gap: 5px;

    /*item을 이용한 그리드 레이아웃 정의 (한 행을 ""로 묶는다.)*/
    grid-area:
    "item1 item1 item1"
    "item2 item3 item3"
    "item2 item3 item3"
}

.item1{
    grid-row: 1 / 3;
    grid-col: 2 / 5;
}

.item2{
    ...
}

.item3{
    ...
}
```

### 의사클래스 (가상 선택자)
1) 실제 요소가 아닌, 실제 요소의 특정 상태를 상징하는 클래스  실제요소:의사클래스명 형식으로 선택자를 표기한다.
2) hover,click... 등
3) 가상 요소라는 것도 있다. 이건 어떤 부모클래스의 첫번째 자식 처럼 특정한 위치, 조건의 요소를 선택하는 선택자로 실제요소::가상요소명 형식으로 선택자를 표기한다.
4) nth-child(n) 등이 있다.

## 2. 트랜스폼, 트랜지션, 애니메이션
### transform
1) 트랜스폼은 요소의 형태에 변화를 주는 속성이다.
### transition
1) 트랜지션은 트리거에 의한 스타일 전환방식을 결정하는 속성이다.
### animation
1) 애니메이션은 화면상의 움직임을 정의하는 속성이다.
### transform, transition,animation의 관계
  transform * transition(property,duration,timing-func,delay) * trigger = @keyframe(from to) * animation(name,duration,timing-func...)

## 3. 반응형 웹
1) 미디어 쿼리: 뷰포트 변화에 따라 활성화 되는 css 코드를 묶어주는 문법. 아래와 같이 작성한다.
```html
<!--html 문서의 헤드 안에 아래와 같은 메타 태그를 추가해준다. 초기 뷰포트를 결정하는 태그이다.-->
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
```
```css
/*아래 코드의 의미는 뷰포트의 width가 300이상이고 500이하 일때 아래 css를 활성화하라는 뜻*/
@media screen and (min-width:300px) and (max-width: 500px){
    선택자 { 스타일... }
}
```


## 4. 깃
1) 깃이란 분산형 파일 버전 관리 시스템이다.
2) 깃 허브는 원격 저장소과 협업을 위한 기능을 제공한다.
3) 깃 사용 방법
```
// 깃 지역 저장소 설정
git init 

// 깃 사용자 설정 작업
git config //깃허브 로그인
git remote add origin
gitignore 만들기

git add . // .은 모든 파일을 stage에 올린다는 의미
git commit -m "messege"
    git revert //되돌리기
    git reset //되돌리기
gir push

//브랜치 만들기
git branch 브랜치명 //로컬브랜치 생성
git checkout 브랜치명
git branch -u 원격저장소명 //리모트브랜치생성

//깃의 3가지 상태
- modified
- staged
- commit


```