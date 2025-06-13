function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

const div = function (n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
};

const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20);
calc(div, 10, 2);

// 이게 자기 자신을 부른거
calc(
  function (n1, n2) {
    console.log(n1 * n2);
  },
  30,
  2
);

// calc 호출하여 calc(fn, 10, 20 ); 더 큰 수가 콘솔에 출력 되도록 하시오

// calc(function(n1,n2)
// {
//     console.log((n1>n2) ? n1 :n2);
// }, 30 ,20);
const findMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2);

calc(findMax, 10, 20);
calc(findMax, 70, 20);
