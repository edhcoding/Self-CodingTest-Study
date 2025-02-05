// https://www.acmicpc.net/problem/1012
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "2",
  "10 8 17",
  "0 0",
  "1 0",
  "1 1",
  "4 2",
  "4 3",
  "4 5",
  "2 4",
  "3 4",
  "7 4",
  "8 4",
  "9 4",
  "7 5",
  "8 5",
  "9 5",
  "7 6",
  "8 6",
  "9 6",
  "10 10 1",
  "5 5",
]; // 5 1

const dx = [-1, 1, 0, 0]; // x축 이동 (상하)
const dy = [0, 0, -1, 1]; // y축 이동 (좌우) - dx, dy 인덱스가 하나라고 생각

function dfs(x, y, field) {
  field[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 && // x좌표가 음수인지
      nx < field.length && // x좌표가 배열 범위를 넘어가는지
      ny >= 0 && // y좌표가 음수인지
      ny < field[0].length && // y좌표가 배열 범위를 넘어가는지
      field[nx][ny] === 1 // 다음 위치에 배추가 있는지 확인
    )
      dfs(nx, ny, field);
  }
}

const T = Number(input[0]); // 테스트 케이스 개수
let line = 1; // 현재 처리중인 줄 번호
const result = []; // 각 테스트 케이스의 결과를 저장할 배열

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line].split(" ").map(Number); // M: 가로, N: 세로, K: 배추 개수
  const field = new Array(M).fill(0).map(() => new Array(N).fill(0)); // 배추 밭 초기화

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line + 1 + i].split(" ").map(Number); // x, y : 배추의 위치
    field[x][y] = 1;
  }

  let count = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j] === 1) {
        dfs(i, j, field);
        count++;
      }
    }
  }

  result.push(count);
  line += K + 1;
}

console.log(result.join("\n"));
