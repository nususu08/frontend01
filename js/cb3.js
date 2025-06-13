function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

const calc = (cb, n1, n2) => console.log("결과: " + cb(n1, n2));
calc(sum, 10, 20);
calc(sub, 20, 12);
