// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "7",
  "0110100",
  "0110101",
  "1110101",
  "0000111",
  "0100000",
  "0111110",
  "0111000",
]; // 3 7 8 9

const N = Number(input[0]);
const map = input.splice(1).map((row) => row.split("").map(Number));
const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));

const dx = [-1, 1, 0, 0]; // 행(x) 이동(상 하)
const dy = [0, 0, -1, 1]; // 열(y) 이동(좌 우)
const complexes = []; // 단지

function dfs(x, y) {
  let size = 1;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    // 상 하 좌 우 순으로 탐색
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 && // 위
      nx < N && // 아래
      ny >= 0 && // 왼쪽
      ny < N // 오른쪽
    )
      size += dfs(nx, ny);
  }

  return size;
}

// 0: 집 없음, 1: 집 있음
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++)
    if (map[i][j] === 1 && !visited[i][j]) complexes.push(dfs(i, j));
}
// 총 단지수
console.log(complexes.length);
// 단지 내 집 수 (오름차순)
console.log(complexes.sort((a, b) => a - b).join("\n"));
