# map
- map은 하나의 배열이 하나의 함수를 통과하면서 또 다른 하나의 배열을 생성한 것이다.
- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- 예시
```js
const array1 = [1, 4, 9, 16];
const odd = [1,2,3,4,5,6,7]

// pass a function to map
const map1 = array1.map(x => x * 2);
const oddmap = odd.map(x=>(x*2)-1)

console.log(map1);
console.log(oddmap);
// expected output: Array [2, 8, 18, 32]
```


