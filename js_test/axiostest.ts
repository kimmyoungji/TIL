// const axios = require('axios');
// axios.get('https://reqres.in/api/users?page=2').then((resp) => {
//     let arr;
//     arr = resp.data.data.map((e) => e.id);
//     console.log(`this is id array from resp: ${arr}`);
// })


// console.log('\ntest2');

// function callbackHell2() {

// }

// async function aysncFunc(callback) {
//     let data = await axios.get('https://reqres.in/api/users?page=2');
//     console.log(data.data.id);
// }

// callbackHell2();



// 내가 알고 싶은게 뭐지? then이 반환하는게 뭐지? 프라미스.. 흠 그럼 프라미스를 먼저 공부를 해야 겠네..
// ㅇㅋ 그럼 프라미스 공부하고 올께

// a b c c b a 
// a b c cc bb aa 

// c cc b bb a aa


let a = 1;
console.log(a);
setTimeout(() => { console.log(a), 3000 });
a = 2;
console.log(a);