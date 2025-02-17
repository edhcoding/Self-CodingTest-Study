// 기본적으로 트리자료구조는 노드의 개수가 N개일 때 간선의 개수는 N-1개라는 특징을 가짐
// 참고: https://pangseyoung.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%85%B8%EB%93%9C-%EC%82%AC%EC%9D%B4-%EA%B1%B0%EB%A6%AC-1240-Java-bfs
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"]; // 2 7

// N: 노드의 개수, M: 거리를 구해야 하는 노드 쌍의 개수
const [N, M] = input[0].split(" ").map(Number);
const graph = new Array(N + 1).fill(0).map(() => []); // [ [], [], [], [], [] ]

// 무방향 그래프 구성 - 두 노드 간의 연결이 양방향으로 이루어짐
for (let i = 1; i <= N - 1; i++) {
  const [a, b, dist] = input[i].split(" ").map(Number);
  // 양방향으로 간선 추가 ex) 2에서 1로 가는 간선, 1에서 2로가는 간선 모두 거리 2 추가
  graph[a].push([b, dist]);
  graph[b].push([a, dist]);
}

/*
graph 형태
[
  [],
  [ [ 2, 2 ], [ 4, 3 ] ],
  [ [ 1, 2 ] ],
  [ [ 4, 2 ] ],
  [ [ 3, 2 ], [ 1, 3 ] ]
]
*/

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
  const visited = new Array(N + 1).fill(false); // [ false, false, false, false, false ]
  const distance = dfs(start, end, visited, 0);
  answer += distance + "\n";
}

console.log(answer);
