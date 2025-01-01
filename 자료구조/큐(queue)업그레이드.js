class Queue {
  constructor() {
    this.data = [];
    this.maxSize = Infinity;
  }

  // 큐가 비었는지 확인
  isEmpty() {
    return this.data.length === 0;
  }

  // 큐가 가득 찼는지 확인
  isFull() {
    return this.data.length === this.maxSize;
  }

  // 현재 큐의 크기 반환
  getSize() {
    return this.data.length;
  }

  // 새로운 아이템 추가
  add(item) {
    if (this.isFull()) {
      throw new Error("Queue is full!");
    }
    this.data.push(item);
    return true;
  }

  // 첫 번째 아이템 제거하고 반환
  remove() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty!");
    }
    return this.data.shift();
  }

  // 첫 번째 아이템 확인 (제거하지 않음)
  getFirst() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty!");
    }
    return this.data[0];
  }

  // 마지막 아이템 확인 (제거하지 않음)
  getLast() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty!");
    }
    return this.data[this.data.length - 1];
  }

  // 큐 비우기
  clear() {
    this.data = [];
  }

  // 모든 아이템 배열로 반환
  getAll() {
    return [...this.data];
  }

  // === 추가된 고급 기능들 ===

  // 특정 위치의 아이템 찾기 (인덱스로)
  getByIndex(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("유효하지 않은 인덱스입니다!");
    }
    return this.data[index];
  }

  // 조건에 맞는 아이템들 찾기
  filter(callback) {
    return this.data.filter(callback);
  }

  // 큐 정렬하기 (문자열 또는 숫자 정렬 지원)
  sort(
    compareFunction = (a, b) => {
      if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
      }
      return a - b;
    }
  ) {
    this.data.sort(compareFunction);
  }

  // 큐 복사본 만들기
  clone() {
    const newQueue = new Queue();
    newQueue.data = [...this.data];
    return newQueue;
  }

  // 다른 큐와 합치기
  merge(otherQueue) {
    this.data = [...this.data, ...otherQueue.getAll()];
  }

  // 특정 값 찾기 (첫 번째 일치하는 항목의 인덱스 반환)
  find(item) {
    return this.data.indexOf(item);
  }

  // 특정 값이 존재하는지 확인
  includes(item) {
    return this.data.includes(item);
  }

  // 큐 내용 뒤집기
  reverse() {
    this.data.reverse();
  }
}

// 모든 기능 테스트
console.log("=== 고급 큐 테스트 ===");

const queue = new Queue();

try {
  // 1. 기본 기능 테스트
  console.log("\n1. 기본 기능 테스트");
  queue.add("첫번째");
  queue.add("두번째");
  queue.add("세번째");
  console.log("현재 큐:", queue.getAll());

  // 2. 인덱스로 찾기
  console.log("\n2. 인덱스로 찾기");
  console.log("인덱스 1의 아이템:", queue.getByIndex(1));

  // 3. 필터링
  console.log("\n3. 필터링 테스트");
  queue.add("테스트");
  queue.add("테스트2");
  const filtered = queue.filter((item) => item.includes("테스트"));
  console.log("'테스트'가 포함된 아이템들:", filtered);

  // 4. 정렬
  console.log("\n4. 정렬 테스트");

  // 문자열 정렬 테스트
  const stringQueue = new Queue();
  stringQueue.add("바나나");
  stringQueue.add("사과");
  stringQueue.add("딸기");
  console.log("정렬 전:", stringQueue.getAll());
  stringQueue.sort();
  console.log("문자열 정렬 후:", stringQueue.getAll());

  // 숫자 정렬 테스트
  const numberQueue = new Queue();
  numberQueue.add(5);
  numberQueue.add(2);
  numberQueue.add(8);
  console.log("정렬 전:", numberQueue.getAll());
  numberQueue.sort();
  console.log("숫자 정렬 후:", numberQueue.getAll());

  // 5. 복제 테스트
  console.log("\n5. 복제 테스트");
  const clonedQueue = queue.clone();
  console.log("복제된 큐:", clonedQueue.getAll());

  // 6. 큐 합치기
  console.log("\n6. 큐 합치기 테스트");
  const secondQueue = new Queue();
  secondQueue.add("새항목1");
  secondQueue.add("새항목2");
  queue.merge(secondQueue);
  console.log("합쳐진 큐:", queue.getAll());

  // 7. 검색 기능
  console.log("\n7. 검색 기능 테스트");
  console.log("'두번째' 항목의 인덱스:", queue.find("두번째"));
  console.log("'없는항목' 포함 여부:", queue.includes("없는항목"));

  // 8. 뒤집기
  console.log("\n8. 뒤집기 테스트");
  queue.reverse();
  console.log("뒤집힌 큐:", queue.getAll());
} catch (error) {
  console.error("에러 발생:", error.message);
}

/**
 * 큐(Queue) 테스트 결과
 *
 * 1. 기본 기능 테스트
 * - 현재 큐: ['첫번째', '두번째', '세번째']
 *
 * 2. 인덱스로 찾기
 * - 인덱스 1의 아이템: 두번째
 *
 * 3. 필터링 테스트
 * - '테스트'가 포함된 아이템들: ['테스트', '테스트2']
 *
 * 4. 정렬 테스트
 * - 문자열 정렬:
 *   정렬 전: ['바나나', '사과', '딸기']
 *   정렬 후: ['딸기', '바나나', '사과']
 * - 숫자 정렬:
 *   정렬 전: [5, 2, 8]
 *   정렬 후: [2, 5, 8]
 *
 * 5. 복제 테스트
 * - 복제된 큐: ['첫번째', '두번째', '세번째', '테스트', '테스트2']
 *
 * 6. 큐 합치기 테스트
 * - 합쳐진 큐: ['첫번째', '두번째', '세번째', '테스트', '테스트2', '새항목1', '새항목2']
 *
 * 7. 검색 기능 테스트
 * - '두번째' 항목의 인덱스: 1
 * - '없는항목' 포함 여부: false
 *
 * 8. 뒤집기 테스트
 * - 뒤집힌 큐: ['새항목2', '새항목1', '테스트2', '테스트', '세번째', '두번째', '첫번째']
 */
