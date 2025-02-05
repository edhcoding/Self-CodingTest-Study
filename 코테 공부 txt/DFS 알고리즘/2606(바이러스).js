// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"]; // 4

const n = Number(input[0]); // 컴퓨터의 수
const m = Number(input[1]); // 컴퓨터 쌍의 수

const graph = new Array(n + 1).fill(0).map(() => []); // 컴퓨터가 1부터 시작하므로 n+1
const visited = new Array(n + 1).fill(false);

// 인접 리스트 형식의 그래프 생성 (0번 인덱스 사용안함)
for (let i = 0; i < m; i++) {
  const [a, b] = input[i + 2].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 깊이 우선 탐색(DFS) - 한 경로 끝까지 탐색하고 다음 경로 탐색
function dfs(start) {
  visited[start] = true;
  for (let i of graph[start]) if (!visited[i]) dfs(i);
}

dfs(1);

const result = visited.filter((v) => v).length - 1; // 1번 컴퓨터 제외
console.log(result);
