// https://www.acmicpc.net/problem/14502
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "7 7",
  "2 0 0 0 1 1 0",
  "0 0 1 0 1 2 0",
  "0 1 1 0 1 0 0",
  "0 1 0 0 0 0 0",
  "0 0 0 0 0 1 1",
  "0 1 0 0 0 0 0",
  "0 1 0 0 0 0 0",
]; // 27

// 0: 빈 칸, 1: 벽, 2: 바이러스 - 벽 3개 세우기 가능
let [n, m] = input[0].split(" ").map(Number);
let data = []; // 초기 맵 리스트
let temp = []; // 벽을 설치한 뒤의 맵 리스트

// 초기 데이터 입력
for (let i = 1; i <= n; i++) {
  data.push(input[i].split(" ").map(Number));
  temp.push(new Array(m).fill(0));
}

const dx = [-1, 1, 0, 0]; // 상, 하
const dy = [0, 0, -1, 1]; // 좌, 우
let result = 0;

// DFS 이용해 바이러스 퍼지도록
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue; // 맵을 벗어나는 경우 무시
    if (temp[nx][ny] === 0) {
      // 해당 위치에 바이러스 배치하고, 다시 재귀적으로 수행
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

// 현재 맵에서 안전 영역의 크기 계산 - 바이러스가 퍼지고 난 후
function getScore() {
  let score = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (temp[i][j] === 0) score += 1;

  return score;
}

// DFS 이용해 벽 설치
function dfs(count) {
  // 벽이 3개 설치된 경우 (임시 배열에 데이터 기록)
  if (count === 3) {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) temp[i][j] = data[i][j]; // 임시 배열에 데이터 입력(벽이 3개 설치된 경우)

    // 각 바이러스의 위치에서 전파 진행
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) if (temp[i][j] === 2) virus(i, j); // 바이러스 퍼지도록

    result = Math.max(result, getScore());
    return;
  }

  // 빈 공간에 울타리를 설치
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] === 0) {
        // 빈 공간에 벽 설치 후 재귀 호출 후 벽 제거
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(result);
