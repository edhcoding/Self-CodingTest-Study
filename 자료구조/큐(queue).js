class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // 큐의 뒤쪽에 새로운 요소 추가
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 큐의 앞쪽에서 요소 제거 및 반환
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  // 큐의 맨 앞 요소 확인
  peek() {
    return this.items[this.headIndex];
  }

  // 큐의 길이 반환
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 테스트 코드
const queue = new Queue();

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7)
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);

// 삭제()
queue.dequeue();

// 삽입(1) - 삽입(4)
queue.enqueue(1);
queue.enqueue(4);

// 삭제()
queue.dequeue();

// 먼저 들어온 순서대로 출력
while (queue.getLength() !== 0) {
  console.log(queue.dequeue());
}
