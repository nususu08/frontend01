// fn3.js
// 화살표 함수 Arrow Function

const sum = (n1, n2) => {
  console.log("sum메소드 호출!!");
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
};

const result = sum(10, 30);
console.log("result: ", result);

const sum2 = (n1, n2) => n1 + n2;
