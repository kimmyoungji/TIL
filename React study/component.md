# component

## 컴포넌트 정의 예시
```
// Hello.tsx 
import React from 'react';

type props{
    name: string;
    age: number;
}

export default function Hello(props){
    // 컴포넌트에서 사용하는 상태변수
    // 함수
    return(
        // 렌더링될 컴포넌트
        <div>
        {props.name}{props.age} //{state변수명}의 형태로 state변수 사용 가능 
        </div>
    );
}
```

## 컴포넌트 사용 예시
```
// index.tsx 
import React from 'react';
import Hello from './Hello.tsx'

export default function App(props){
    // 컴포넌트에서 사용하는 상태변수
    // 함수
    return(
        // 렌더링될 컴포넌트
        <div>
         <Hello name="mj" age=22></Hello>
         <Hello name="mj" age=22></Hello>
         <Hello name="mj" age=22></Hello>
        </div>
    );
}
```