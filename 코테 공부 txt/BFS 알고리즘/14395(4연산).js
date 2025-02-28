// https://www.acmicpc.net/problem/14395
// 정수 s가 주어진다. 정수 s의 값을 t로 바꾸는 최소 연산 횟수를 구하는 프로그램을 작성하시오.
// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

// BFS 알고리즘은 최단 거리를 찾거나 최소 횟수를 찾는 문제에서 많이 사용됨
// 이 문제에서는 주어진 연산이 +, *, -, / 4가지 연산이 있음
// 특정한 정수 s에서 시작해서 "탐색"을 하는 형태로 간주할 수 있음
// 따라서 값이 t인 노드를 만날 때까지 BFS를 수행함

let input = ["7", "392"]; // +*+

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

function solution(s, t) {
  // s와 t가 같으면 0 반환
  if (s === t) return "0";

  const queue = new Queue();
  const visited = new Set(); // 방문한 숫자를 저장하는 Set

  // [현재 숫자, 지금까지의 연산 과정]
  queue.enqueue([s, ""]);
  visited.add(s);

  while (queue.getLength() > 0) {
    const [current, ops] = queue.dequeue();

    // 가능한 모든 연산 시도 (문제 조건 - 1 ≤ s, t ≤ 109)
    // 곱하기
    if (current * current <= 1e9 && !visited.has(current * current)) {
      if (current * current === t) return ops + "*";
      queue.enqueue([current * current, ops + "*"]);
      visited.add(current * current);
    }

    // 더하기
    if (current + current <= 1e9 && !visited.has(current + current)) {
      if (current + current === t) return ops + "+";
      queue.enqueue([current + current, ops + "+"]);
      visited.add(current + current);
    }

    // 빼기 (항상 0이 되므로 한 번만 체크)
    if (!visited.has(0)) {
      if (0 === t) return ops + "-";
      queue.enqueue([0, ops + "-"]);
      visited.add(0);
    }

    // 나누기 (1이 되므로 한 번만 체크)
    if (current !== 0 && !visited.has(1)) {
      if (1 === t) return ops + "/";
      queue.enqueue([1, ops + "/"]);
      visited.add(1);
    }
  }

  // 변환 불가능한 경우
  return "-1";
}

const [s, t] = input.map(Number);
console.log(solution(s, t));
