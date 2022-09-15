# useState
react hook 중에 하나이다.

## Hook
함수형 컴포넌트에서도 상태를 관리할 수 있게 해준다.

## state
컴포넌트에서 동적인 값을 상태라고 부른다.

## useState 사용예시
```
const [a,setA] = useState('a1')
```
>설명
> - ```a``` 는 state명
> - ```setA```는 Setter함수명
> - ```useState('a1')```는 '상태의 기본값'을 파라미터로 받고, [현재state, setter함수] 반환 한다.
> - ```useState('a1')``` 에서 ```'a1'```은 이 상태```a```의 기본값
> - **배열 비구조화 할당** 을 통해서 각 원소를 추출해준 것이다.
