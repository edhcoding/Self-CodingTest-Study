// https://www.acmicpc.net/problem/10819
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = ["6", "20 1 15 8 4 10"]; // 62

const N = Number(input[0]); // N개의 정수
const numbers = input[1].split(" ").map(Number); // 배열에 들어있는 정수
const visited = new Array(N).fill(false);
const selected = new Array(N);
let maxSum = 0;

function calculateDiff(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) sum += Math.abs(arr[i] - arr[i + 1]);

  return sum;
}

function dfs(depth) {
  if (depth === N) {
    maxSum = Math.max(maxSum, calculateDiff(selected));

    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = numbers[i];
      dfs(depth + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(maxSum);
