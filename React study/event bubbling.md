# event bubbling
- 아래 react에서 event 연결하는 법 부터 읽기
- 이벤트 버블링은, 웹 문서에서 이벤트가 작동하는 방식을 설명한다.
- 
- 2depth 이상의 부모자식 관계로 이루어진 문서가 있다고 하자
- 자식 요소 중 하나의 요소를 클릭하면, 해당 요소에서 event가 발생하고 해당 요소의 eventHandler를 실행한다.
- 그 다음, 부모의 eventHandler를 실행한다.
- 그 다음, 조부모의 eventHandler를 실행한다.
- 그 다음, 고조부모의 eventHandler를 실행한다.
- ... 문서의 root에 도달 할때 까지 부모의 모든 eventHandler을 실행한다.
- 이게 이벤트 버블링이라고 부르는 이벤트 처리 방식이다.
    ## 예시
    ``` js
    import * as React from 'react';
    const style = {
    padding: '10px 30px',
    border: '1px solid black',
    };

    function App() {
    const handleOuterClick = () => {
        alert('outer click');
    };

    const handleInnerClick = () => {
        alert('inner click');
    };

    return (
        <div style={style} onClick={handleOuterClick}> 
        // 2) eventHandler 호출
        <div style={style} onClick={handleInnerClick}> 
        // 1) event 발생! eventHandler 호출
            Click Me
        </div>
        </div>
    );
    }
    export default App;
    ```

## react에서 event에 handler 붙이기
* 일부 DOM 요소들은 사용자의 동작에 따라, 다양한 event를 발생시킬 수 있다.
* vanilla JS에서는, 다음과 같은 코드를 통해, 요소의 event 발생시, 감지하고 필요한 동작을 호출할 eventHandler를 연결한다.
    ``` js
    element.addEventListener('click',handleClick)  
    // handleClick은 사용자 정의 함수
    ```   
* react 에서는 위의 작업을 다음과 같이 한다.
    ``` ts
    import React from './react'
    export default function Hello(){
        const handleClick = ()=>{
            console.log("clicked");
        }
        return <div onClick={handleClick}>hello?</div>;
    }
    ```
* 


# stoppropagation



> 참조  
> https://www.robinwieruch.de/react-event-bubbling-capturing/