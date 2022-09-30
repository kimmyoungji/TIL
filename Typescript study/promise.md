# promise
* 비동기적으로 실행되는 함수가 반환하는 객체로
* 해당 함수의 실행 결과 정보를 담고 있다.
* promise는 3가지 상태를 지닌다: resolve, rejected, pending.
* 단, 결과적으로 promise는 성공(resolve) 또는 실패(rejected) 상태가 된다. 
* promise 인스턴스가 지니고있는 메소드들
  * .catch( ((reason)=>{}):onrejected ) : promise가 rejected 상태로 반환 되었을 때. 하고 싶은 처리를 담은 콜백함수를 인자로 넣어준다. 프로미스 자신을 반환한다.
  * .then(f1,f2) : 첫번째 인자로 promise가 resolve 일때의 함수, 두번째 인자로 promise가 rejected 일때의 함수를 넣어준다. 프로미스 자신을 반환한다.
  * .finally(f1): 프로미스의 결과와 무관하게, 처리가 끝나면 해줄 처리를 담은 함수를 인자로 받는다.