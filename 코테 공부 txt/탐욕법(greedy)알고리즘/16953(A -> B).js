// let [A, B] = require("fs")
//   .readFileSync(0, "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);

// A -> B 방법
// 1. 2를 곱한다
// 2. 1을 수의 가장 오른쪽에 추가한다

// B -> A 방법
// 1. 2로 나눈다. (2로 나누어 떨어질 경우)
// 2. 1을 제거한다. (1로 끝날 경우)

let [A, B] = [2, 162];

let count = 1;

while (B > A) {
  if (B % 2 === 0) B /= 2;
  else if (B % 10 === 1) B = Math.floor(B / 10);
  else break;

  count++;
}

console.log(B === A ? count : -1);
