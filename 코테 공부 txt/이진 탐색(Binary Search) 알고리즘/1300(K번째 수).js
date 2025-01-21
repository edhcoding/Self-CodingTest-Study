// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["3", "7"]; // 6

let N = Number(input[0]); // 배열의 크기
let K = Number(input[1]); // K번째 수

let start = 1;
let end = K; // K보다 큰 수는 K번째 수가 될 수 없음
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0; // mid보다 작거나 같은 수의 개수

  // 각 행(N은 3이므로 각 행,열마다 3개씩 값이 있음)에서 mid보다 작거나 같은 수의 개수 계산
  for (let i = 1; i <= N; i++) count += Math.min(parseInt(mid / i), N);

  if (count >= K) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
