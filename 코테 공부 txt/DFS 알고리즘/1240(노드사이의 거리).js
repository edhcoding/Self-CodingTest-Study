// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"]; // 2 7

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 무방향 그래프 구성
for (let i = 1; i <= N - 1; i++) {
  const [a, b, dist] = input[i].split(" ").map(Number);
  graph[a].push([b, dist]);
  graph[b].push([a, dist]);
}

function dfs(start, end, visited, distance) {
  if (start === end) return distance;

  visited[start] = true;

  for (const [next, dist] of graph[start]) {
    if (!visited[next]) {
      const result = dfs(next, end, visited, distance + dist);
      if (result !== -1) return result;
    }
  }

  return -1;
}

let answer = "";
// M개의 노드 쌍에 대해 거리 계산
for (let i = 0; i < M; i++) {
  const [start, end] = input[N + i].split(" ").map(Number);
  const visited = Array(N + 1).fill(false);
  const distance = dfs(start, end, visited, 0);
  answer += distance + "\n";
}

console.log(answer.trim());
