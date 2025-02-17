// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "6 3",
  "1 2",
  "2 3",
  "3 4",
  "6 5",
  "1 2",
  "2 3",
  "3 4",
  "4 5",
  "5 6",
  "6 6",
  "1 2",
  "2 3",
  "1 3",
  "4 5",
  "5 6",
  "6 4",
  "0 0",
];
// 입력으로 주어진 그래프에 트리가 없다면 "No trees."를, 한 개라면 "There is one tree."를, T개(T > 1)라면 "A forest of T trees."를 테스트 케이스 번호와 함께 출력
// Case 1: A forest of 3 trees.
// Case 2: There is one tree.
// Case 3: No trees.

// 이 문제는 트리와 그래프의 차이점을 이해하는 문제
// 트리는 사이클이 없는 그래프 -> 간선 개수는 노드 개수 -1
// 그래프는 사이클이 있을 수 있음 -> 간선 개수는 노드 개수보다 많을 수 있음

let caseNum = 1;

function dfs(current, parent, graph, visited) {
  visited[current] = true;

  for (const next of graph[current]) {
    // 부모 노드로 돌아가는 경우 제외
    if (next === parent) continue;
    // 이미 방문한 노드에 도달한 경우 사이클 존재
    if (visited[next]) return false;
    // 다음 노드에서 사이클이 존재하지 않는 경우 false 반환
    if (!dfs(next, current, graph, visited)) return false;
  }
  return true;
}

for (let i = 0; i < input.length; ) {
  // n: 정점의 개수, m: 간선의 개수, 다음 m개의 줄에는 간선의 정보가 주어짐, 마지막 줄에는 0 0 이 주어짐
  const [n, m] = input[i].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  const graph = new Array(n + 1).fill(0).map(() => []); // [ [], [], [], [], [], [] ]
  const visited = new Array(n + 1).fill(false); // [ false, false, false, false, false, false ]

  for (let j = 0; j < m; j++) {
    const [a, b] = input[i + 1 + j].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  i += m + 1;

  let treeCount = 0;
  for (let j = 1; j <= n; j++)
    if (!visited[j] && dfs(j, 0, graph, visited)) treeCount++;

  console.log(
    `Case ${caseNum}: ${
      treeCount === 0
        ? "No trees."
        : treeCount === 1
        ? "There is one tree."
        : `A forest of ${treeCount} trees.`
    }`
  );

  caseNum++;
}
