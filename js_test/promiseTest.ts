// console.log('\npromise Test');

// const myPromise = new Promise((resolve, rejectj) => {
//     let flag = false;
//     setTimeout(() => { console.log('씨발!'), flag = false }, 3000);
//     if (flag) {
//         resolve('result');
//     } else {
//         rejectj('fail!!!');
//     }
// })

// async function clap1(callback) {
//     console.log('clap1');
//     await callback();
//     await setTimeout(() => { console.log('clappppp') }, 0);
// }

// async function lastClap() {
//     await setTimeout(() => console.log('lastClap!'), 2000);
// }

// function promiseTest() {
//     clap1(async function () {
//         console.log('1');
//         await lastClap();
//     }).then(clap1)
//         .then(clap1)
//         .then(lastClap).catch((error) => { console.log(error) });
// }

// promiseTest();