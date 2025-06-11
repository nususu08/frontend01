// fn2.js
// 함수(2)

const sum = function (n1, n2) {
  console.log("함수호출!!");
  return n1 + n2;
};

console.log("void함수: ", sum(10, 20));

// 소괄호 생략 가능, 파라미터가 하나일 때
const abs = (val) => {
  return val < 0 ? -val : val;
};
console.log("abs:", abs(-10));
console.log("abs:", abs(11));

// 중괄호 생략 가능, 코드가 한 줄일 때
const abs2 = (val) => console.log(`val:`, val < 0 ? -val : val);
abs2(-11);
abs2(3);

//return 생략 가능, 코드가 한 줄일때 (중괄호도 없어야 한다.)
const abs3 = (val) => (val < 0 ? -val : val);

console.log("abs3:", abs3(-10));
console.log("abs3:", abs3(11));
