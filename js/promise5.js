// promis4.js, 콜백지옥에 빠진 callback_hell2.js를 promise를 이용하여
// 콜백지옥에서 해방
function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("A");
      resolve("B");
    }, 3000);
  });
}
function fnB(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("B");
      resolve("C");
    }, 2000);
  });
}
function fnC(item) {
  setTimeout(() => {
    console.log(item);
  }, 2000);
}

// then, catch 를 사용하지 않고 async, await를 활용하여 코딩할 수 있다.
// await를 사용하려면 async 함수에서만 사용할 수 있다.
async function start() {
  const item = await fnA();
  const item2 = await fnB(item);
  fnC(item2);
}
start();
