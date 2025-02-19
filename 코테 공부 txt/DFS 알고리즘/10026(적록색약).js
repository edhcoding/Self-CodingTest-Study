// https://www.acmicpc.net/problem/10026
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"]; // 4 3

// R(빨강), G(초록), B(파랑) - 적록색약은 빨강과 초록을 구분 못함
const N = Number(input[0]);
const grid = input.slice(1);

const dx = [-1, 1, 0, 0]; // 상 하
const dy = [0, 0, -1, 1]; // 좌 우

// 일반인 DFS
function dfs(x, y, color, visited) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      grid[nx][ny] === color
    )
      dfs(nx, ny, color, visited);
  }
}

// 적록색약 DFS
function dfsColorBlind(x, y, color, visited) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      // 현재 위치의 색상에 따라 두 개의 조건 중 하나 선택
      if (color === "B" && grid[nx][ny] === "B") {
        // B는 B끼리만 연결
        dfsColorBlind(nx, ny, color, visited);
      } else if (color !== "B" && grid[nx][ny] !== "B") {
        // B가 아니면 B가 아닌 것끼리만 연결
        dfsColorBlind(nx, ny, color, visited);
      }
    }
  }
}

let normalCount = 0; // 일반인 구역 수
let normalVisited = new Array(N).fill().map(() => new Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!normalVisited[i][j]) {
      dfs(i, j, grid[i][j], normalVisited);
      normalCount++;
    }
  }
}

let colorBlindCount = 0; // 적록색약 구역 수
let colorBlindVisited = new Array(N).fill().map(() => new Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!colorBlindVisited[i][j]) {
      dfsColorBlind(i, j, grid[i][j], colorBlindVisited);
      colorBlindCount++;
    }
  }
}

console.log(normalCount, colorBlindCount);
