// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "5 3",
  "0 0 1 0 0",
  "0 0 2 0 1",
  "0 1 2 0 0",
  "0 0 1 0 0",
  "0 0 0 0 2",
]; // 5

// N: 도시의 크기, M: 치킨집의 개수
const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((row) => row.split(" ").map(Number));

const houses = [];
const chickens = [];

// 집과 치킨집 위치 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) houses.push([i, j]); // 집 : [ [ 0, 2 ], [ 1, 4 ], [ 2, 1 ], [ 3, 2 ] ]
    if (city[i][j] === 2) chickens.push([i, j]); // 치킨집 : [ [ 1, 2 ], [ 2, 2 ], [ 4, 4 ] ]
  }
}

const visited = new Array(chickens.length).fill(false); // [ false, false, false ]
const selected = [];
let answer = Infinity;

// depth: 현재 선택된 치킨집의 개수, start: 시작 인덱스(중복 조합 방지, 순서 유지)
function dfs(depth, start) {
  if (depth === M) {
    let totalDistance = 0;
    // 각 집에 대해 선택된 치킨집들과의 최소 거리 계산
    for (const [hx, hy] of houses) {
      let minDist = Infinity;
      for (const idx of selected) {
        const [cx, cy] = chickens[idx];
        const dist = Math.abs(hx - cx) + Math.abs(hy - cy);
        minDist = Math.min(minDist, dist);
        if (minDist === 1) break; // 최소 거리가 1이면 더 계산할 필요 없음
      }
      totalDistance += minDist;
    }
    answer = Math.min(answer, totalDistance);
    return;
  }

  for (let i = start; i < chickens.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
