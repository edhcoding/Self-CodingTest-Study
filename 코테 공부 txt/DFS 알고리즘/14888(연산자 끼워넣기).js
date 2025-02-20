// https://www.acmicpc.net/problem/14888
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "5 6", "0 0 1 0"]; // 30 30

const N = Number(input[0]); // 수의 개수
const numbers = input[1].split(" ").map(Number); // 수
const operators = input[2].split(" ").map(Number); // +, -, *, / 순서

let maxResult = -Infinity; // 최댓값
let minResult = Infinity; // 최솟값

// 두 숫자와 연산자를 받아 계산 수행함수
function calculate(a, b, operator) {
  switch (operator) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      // 이 부분에서 계속 오류가 나오는데 이유는 a 와 b 가 0일때의 예외처리도 필요하기 때문 - 0 은 false 로 처리되기 때문
      // 하지만 1 / 0 = Infinity 는 truthy 로 처리되기 때문에 오류 발생 X
      return parseInt(a / b);
  }
}

// 현재까지의 계산 결과와 깊이를 인자로 받아 모든 가능한 연산 조합 탐색
function dfs(depth, result) {
  if (depth === N - 1) {
    maxResult = Math.max(maxResult, result);
    minResult = Math.min(minResult, result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;
      dfs(depth + 1, calculate(result, numbers[depth + 1], i));
      operators[i]++;
    }
  }
}

dfs(0, numbers[0]);

// 최댓값, 최솟값
console.log(maxResult ? maxResult : 0);
console.log(minResult ? minResult : 0);
