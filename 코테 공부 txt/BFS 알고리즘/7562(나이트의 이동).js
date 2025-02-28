// https://www.acmicpc.net/problem/7562
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

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

let input = ["3", "8", "0 0", "7 0", "100", "0 0", "30 50", "10", "1 1", "1 1"];

// 나이트가 이동할 수 있는 8가지 방향
// [0]: 위로 2칸 왼쪽으로 1칸
dx = [-2, -2, -1, -1, 1, 1, 2, 2];
dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]);
let line = 1; // 입력 라인 추적

while (testCases--) {
  let l = Number(input[line]); // 한 변의 길이(체스판 크기)
  let [x, y] = input[line + 1].split(" ").map(Number); // 시작 위치 (나이트 현재 위치)
  let [targetX, targetY] = input[line + 2].split(" ").map(Number); // 도착 위치 (나이트 이동 위치)
  let visited = new Array(l).fill(0).map(() => new Array(l).fill(0)); // 방문 여부 확인

  const queue = new Queue();
  queue.enqueue([x, y]); // 시작 위치 큐에 삽입

  visited[x][y] = 1; // 시작 위치 방문 처리

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];

    // 모든 방향 탐색
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  line += 3;

  // 시작 위치를 1부터 시작했기 때문에 1을 빼줘야 함
  console.log(visited[targetX][targetY] - 1);
}
