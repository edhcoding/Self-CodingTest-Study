// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

let input = ["5", "3"]; // -1
let input2 = ["6", "3"]; // 2
let input3 = ["18", "4"]; // 3 - 3 4 5 6
let input4 = ["17", "4"]; // 4 - 2 4 5 6

const N = Number(input2[0]);
const K = Number(input2[1]);

function solution(N, K) {
  const minBalls = (K * (K + 1)) / 2; // 1부터 하나 씩 증가시킨 합을 구하기 때문에 - 등차수열 사용

  if (N < minBalls) return -1;

  const remainBalls = N - minBalls;

  return remainBalls % K === 0 ? K - 1 : K;
}

console.log(solution(N, K));
