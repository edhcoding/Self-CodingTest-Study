// https://www.acmicpc.net/problem/1697
// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

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

let input = ["5", "17"]; // 4

// 모든 순간이동(간선)의 비용이 1초로 동일하므로, BFS로 최단시간을 계산할 수 있음
// 중요한 부분은 이미 방문한 위치로 돌아가는 경우는 제외
const MAX = 100001; // 최대 위치(0 ~ 100000)
const [n, k] = input.map(Number); // n: 수빈이 위치, k: 동생 위치
let visited = new Array(MAX).fill(0); // 각 위치에 도달하는데 몇 초가 걸리는지 기록하는 배열

function bfs() {
  const queue = new Queue();
  queue.enqueue(n); // 시작 위치 큐에 삽입

  while (queue.getLength() != 0) {
    let cur = queue.dequeue(); // 큐에서 현재 위치 꺼냄
    if (cur === k) return visited[cur]; // 동생 위치에 도달한 경우 최단 시간 반환

    // 이동 방법 3가지 탐색
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      // 범위 예외 처리
      if (nxt < 0 || nxt >= MAX) continue;
      // 미방문 위치만 처리
      if (visited[nxt] === 0) {
        visited[nxt] = visited[cur] + 1; // 1초 증가
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs());
