// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2 4", "CAAB", "ADCB"]; // 3

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(""));
const visited = new Set();
let maxCount = 0;

const dx = [-1, 1, 0, 0]; // 행(x) 이동(상 하)
const dy = [0, 0, -1, 1]; // 열(y) 이동(좌 우)

function dfs(x, y, count) {
  maxCount = Math.max(maxCount, count);

  // 4방향 탐색
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]; // -1 1
    const ny = y + dy[i]; // 0 0

    // 범위 체크 및 방문하지 않은 알파벳 체크
    if (nx >= 0 && nx < R && ny >= 0 && ny < C && !visited.has(board[nx][ny])) {
      visited.add(board[nx][ny]);
      dfs(nx, ny, count + 1);
      visited.delete(board[nx][ny]);
    }
  }
}

visited.add(board[0][0]);
dfs(0, 0, 1);

console.log(maxCount);
