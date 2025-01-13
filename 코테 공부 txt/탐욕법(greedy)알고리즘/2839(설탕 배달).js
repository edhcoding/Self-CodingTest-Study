// let input = require("fs").readFileSync(0, "utf-8").trim();

let input = "18";
let N = Number(input);

function solution(N) {
  let count = 0;

  while (N >= 0) {
    if (N % 5 === 0) return count + N / 5;

    N -= 3;
    count++;
  }

  // 정확하게 N킬로그램을 만들 수 없다면 -1 출력
  return -1;
}

console.log(solution(N));
