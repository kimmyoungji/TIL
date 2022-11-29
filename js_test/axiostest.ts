// Callback
//setTimeout(() => { console.log(2) }, 0);

// Promise
function setTimeoutPromise(sec: number): Promise<void> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, sec);
    });
}
//setTimeoutPromise(0).then(() => console.log(2));

// Aysnc
async function aysncFunc() {
    console.log(1);
    await setTimeoutPromise(0);
    console.log(2);
    console.log(3);
}
//aysncFunc();


// callback hell
setTimeout(
    () => {
        console.log("after 1000 ms");
        setTimeout(
            () => {
                console.log("after 2000 ms");
                setTimeout(
                    () => {
                        console.log("after 3000 ms");
                        setTimeout(
                            () => {
                                console.log("after 4000 ms");
                            }, 4000);
                    }, 3000);
            }, 2000);
    }, 1000);

// callback hell - promise로 해결하기 - then hell 이 생겨버렸다.
setTimeoutPromise(1000).then(
    () => {
        console.log(1000);
        setTimeoutPromise(2000).then(
            () => {
                console.log(2000);
                setTimeoutPromise(3000).then(
                    () => {
                        console.log(3000);
                        setTimeoutPromise(4000).then(
                            () => {
                                console.log(4000);
                            }
                        )
                    }
                )
            }
        )
    }
)

// promise가 유용할때: 하나의 비동기 함수에 여러개의 콜백이 인자로 들어 갈때.. 
// 비동기 함수가 중첩되면, promise도 then hell을 만들어낸다. 

async function AsyncFunc2() {
    await setTimeoutPromise(1000);
    console.log('1000밀리초 지남');
    await setTimeoutPromise(2000);
    console.log('2000밀리초 지남');
    await setTimeoutPromise(3000);
    console.log('3000밀리초 지남');
    await setTimeoutPromise(4000);
    console.log('4000밀리초 지남'); 
}

AsyncFunc2();

// using promise to using callback
setTimeoutPromise(1000)
    .then(() => console.log('a'))
    .then(() => { console.log('b') })
    .then(() => { console.log('c') })
    .catch(() => { console.log('error') });

setTimeout(() => {
    console.log('a');
    console.log('b');
    console.log('c');
}, 1000)
// 아직 프로미스의 유용성에 대해서는 체감을 못하겠다....  



