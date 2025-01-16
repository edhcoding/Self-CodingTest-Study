// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4", "100", "200", "12345", "1003"];

// 0을 제외한 피보나치 수열 생성 - [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...] 형태로 저장
const fibo = [0, 1];
while (fibo[fibo.length - 1] <= 1000000000) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let n = Number(input[i]);
  let result = [];

  // 피보나치 0 제외 (인덱스 1부터 시작)
  for (let j = fibo.length - 1; j >= 1; j--) {
    if (fibo[j] <= n) {
      result.push(fibo[j]);
      n -= fibo[j];
    }
  }

  console.log(result.reverse().join(" "));
}
