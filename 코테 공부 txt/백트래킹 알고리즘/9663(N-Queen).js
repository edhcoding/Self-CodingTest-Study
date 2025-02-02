// let input = require("fs").readFileSync(0, "utf-8").trim();

let input = "8"; // 92

const N = Number(input);
let count = 0;
const queens = new Array(N).fill(0);

function isValid(row) {
  for (let i = 0; i < row; i++) {
    // 같은 열 || 대각선에 있는 경우
    if (
      queens[i] === queens[row] ||
      Math.abs(queens[i] - queens[row]) === row - i // 열의 차이 - 행의 차이
    )
      return false;
  }
  return true;
}

function dfs(row) {
  if (row === N) {
    count++;
    return;
  }

  for (let col = 0; col < N; col++) {
    queens[row] = col;
    // 유효한 위치면 다음 행 진행
    if (isValid(row)) dfs(row + 1);
  }
}

dfs(0);
console.log(count);
