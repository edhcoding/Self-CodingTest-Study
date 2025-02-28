// 문제: https://www.acmicpc.net/problem/1707
// 그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.
// 이분 그래프 - 노드들을 두 개의 집합으로 분할한 뒤에 같은 집합에 속한 정점끼리 서로 인접하지 않는 그래프를 의미함
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "3 2", "1 3", "2 3", "4 4", "1 2", "2 3", "3 4", "4 2"]; // YES NO

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 이분 그래프 판별 함수
function isBipartite(V, graph) {
  const visited = new Array(V + 1).fill(0); // 0: 미방문, 1: 그룹1, -1: 그룹2

  for (let i = 1; i <= V; i++) {
    if (visited[i] === 0) {
      if (!bfs(i, graph, visited)) return "NO";
    }
  }

  return "YES";
}

function bfs(start, graph, visited) {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = 1; // 시작 정점을 그룹 1로 설정

  while (queue.getLength() > 0) {
    const current = queue.dequeue();

    for (const next of graph[current]) {
      if (visited[next] === 0) {
        visited[next] = -visited[current]; // 현재 정점과 반대 그룹으로 설정
        queue.enqueue(next);
      } else if (visited[next] === visited[current]) {
        // 이미 방문한 정점이 현재 정점과 같은 그룹에 속한 경우, 이분 그래프가 아님
        return false;
      }
    }
  }

  // 모든 인접 정점을 방문했으면서 이분 그래프임
  return true;
}

const K = Number(input[0]); // 테스트 케이스 수
let line = 1;

for (let i = 0; i < K; i++) {
  const [V, E] = input[line++].split(" ").map(Number); // V: 정점의 개수, E: 간선의 개수
  const graph = new Array(V + 1).fill(0).map(() => []); // 각 정점별 인접 리스트

  // 그래프 구성 - E개의(양방향) 간선 추가
  for (let j = 0; j < E; j++) {
    const [a, b] = input[line++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  // [ [], [ 3 ], [ 3 ], [ 1, 2 ] ]
  // [ [], [ 2 ], [ 1, 3, 4 ], [ 2, 4 ], [ 3, 2 ] ]

  console.log(isBipartite(V, graph));
}

// 참고: https://yjg-lab.tistory.com/430
