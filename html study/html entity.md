# html entity
html entity란 &로 시작하고, ;로 끝나는 문자열로 html의 reserved character들이 가지는 또다른 이름이다.
그럼 이게 왜 필요할까? 이유는 아래와 같다.
html 코드 상에서 html문법이 아닌 다른 목적으로 reserved characters를 활용하려고 하면, 해당기호는 html문법으로 해석되어 버린다. 
그래서 < , > , & ([...등 다른 기호들과 그 엔티티](https://www.w3schools.com/html/html_entities.asp)) 이런 녀석들(reserved characters)은 html 문서 안에서 마음 대로 쓰기 어렵다. reserved characters 대신에 html entity를 html문법으로 해석되지 않고, 그 기호 그대로 렌더링 되도록 사용할 수 있다.


```html
<div>
	<!-- 여기는 안나옴 -->
	여기랑
	<pre>
        <!-- 여기 빈칸 그대로 나옴  pre내부 이기 때문이다-->
        여기랑
        <!-- 여기 빈칸 그대로 나옴 pre내부 이기 때문이다-->
        <code>
            <!-- 여기 빈칸 그대로 나옴 pre내부 이기 때문이다-->
            요기랑 
            &lt;button&gt; 뭔차이래 dd&lt;/button	&gt; 
            <!-- 위에 &~; 가 엔티티의 예시이다. -->
        </code>
    </pre>
</div>
```

![출력된 모습](./html%20entity%201.png)