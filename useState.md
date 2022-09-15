# useState
react hook 중에 하나이다.

## Hook
함수형 컴포넌트에서도 상태를 관리할 수 있게 해준다.

## state
컴포넌트에서 동적인 값을 상태라고 부른다.

## useState 사용예시
```
const [a,setA] = useState('defaultA')
```
>설명
> - a 는 state명
> - setA는 Setter함수명
> - useState는 상태의 기본값을 파라미터로 받고, [현재state, setter함수]반환 한다.
