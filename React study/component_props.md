# props
- properties
- 컴포넌트가 전달받는 값

## props의 사용법 예시
```
//App.js

import React from 'react';
import Hello from './Hello';

export default function App() {
  const onClick = (name:string) => {
    console.log(`${name} says hello`);
  };
  return <Hello name="react" color='red' onClick={onClick}/>;
}
```
```
//Hello.tsx

import React from 'react';

type Props{
    name:string;
    color: string;
    optional?: string;  // 꼭 채우지 않아도 되는 속성
    onClick: (name:string) => void;  
    // 함수도 속성값으로 받아올 수 있다. 근데, 왠만하면 하지말 것.
}

export default function Hello({name, mark, optional, onClick}:Props) {
  const handleClick = () => onClick(name);
  return(
     //JSX 내부에서 inline-style에 변수 사용하는 방법
    <div style={{color: props.color}}>
        {props.name} //JSX 내부에서 인자로 받은 props의 변수 사용하는 방법
        <button onClick={handleClick}>click</button>
    </div>
  )
}

Hello.defaultProps = {  //props 기본값 설정해주기
    color='blue'
};
```

**문제발생.. ts 와 js 가 충분히 구별되지 않은 상태에서 정리하고 있었다...흠**