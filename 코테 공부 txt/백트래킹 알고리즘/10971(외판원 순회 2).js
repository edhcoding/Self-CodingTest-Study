// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
let input = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];

const N = Number(input[0]);
const costs = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = new Array(N).fill(false);
let minCost = Infinity;

function dfs(start, current, depth, totalCost) {
  if (depth === N) {
    if (costs[current][start] > 0)
      minCost = Math.min(minCost, totalCost + costs[current][start]);

    return;
  }

  for (let next = 0; next < N; next++) {
    if (!visited[next] && costs[current][next] > 0) {
      visited[next] = true;
      dfs(start, next, depth + 1, totalCost + costs[current][next]);
      visited[next] = false;
    }
  }
}

for (let i = 0; i < N; i++) {
  visited[i] = true;
  dfs(i, i, 1, 0); // 첫 도시를 방문하고 시작 : depth는 1부터 시작
  visited[i] = false;
}

console.log(minCost);
