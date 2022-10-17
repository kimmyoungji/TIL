# Node.textContent
- node.testContent는, 선택된 요소의 자식 요소들을 문자열로 이루어진 하나의 텍스트 노드로 전달 받는다 (그냥 문자열이 아니다.)
- 자식이 없을 때는, 빈문자열을 반환한다.
- 어 그럼, 이때, html entity가 정의 되어 있는 기호들이, html entity number나 symbol로 대체 되어 나타날까?

## node.textContent 와 HTMLElement.innerText의 차이
- textContent는 하위 자식 요소를 모두 문자열로 이루어진 노드로 반환하지만, innerText는 읽을 수 있는 요소만 전달한다.
- 그리고 textContent와 달리, innerText는 css 요소도 고려하는데, hidden 스타일링이 되어 있는 요소는 전달하지 않는다
- 그리고 innerText는 css 고려하기 때문에 innderText를 수정하면 페이지 또는 영역의 새로고침(reflow)가 발생한다. 이는 비효율적이다
- 뿐만 아니라, innerText값을 수정하면 영구적으로 수정이 되어 복구할 수 없고, 노드에 추가적인 내용을 삽입할 수도 없다. 이녀석 노빡구 다