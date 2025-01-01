module.exports = PriorityQueue;

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};

// 우선순위 큐가 비어있는지 여부 판단
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};

// 우선순위 큐의 최상위 요소를 확인
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error("PriorityQueue is empty");

  return this._elements[0];
};

// 우선순위 큐의 최상위 요소를 제거하고 반환
PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

// 우선순위 큐에 요소(element) 추가하고 새로운 크기(길이)를 반환
PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

// 우선순위 큐의 크기(길이)를 반환함
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};

// 우선순위 큐의 모든 요소에 대해 함수(fn)를 실행함
PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};

// 우선순위 큐의 위치 a 와 b에 있는 값들을 비교 함수를 사용하여 비교
PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

// 우선순위 큐의 위치 a 와 b에 있는 값들을 교환
PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. 최대힙(Max Heap) 생성 테스트
console.log("=== 최대힙 생성 및 기본 기능 테스트 ===");
let pq = new PriorityQueue(function (a, b) {
  return a.cash - b.cash; // cash 값이 큰 순서대로 정렬
});

// 2. enq(추가) 테스트
console.log("\n=== enq(추가) 테스트 ===");
pq.enq({ cash: 250, name: "Doohyun Kim" }); // 원소 삽입할 때 enq 함수 사용
pq.enq({ cash: 300, name: "Gildong Hong" });
pq.enq({ cash: 150, name: "Minchul Han" });
pq.enq({ cash: 400, name: "Younghee Lee" });
console.log("큐 크기:", pq.size()); // 4

// 3. peek(최상위 요소 확인) 테스트
console.log("\n=== peek(최상위 요소 확인) 테스트 ===");
console.log("최상위 요소:", pq.peek()); // {cash: 400, name: 'Younghee Lee'}

// 4. deq(제거) 테스트
console.log("\n=== deq(제거) 테스트 ===");
console.log("제거된 요소:", pq.deq()); // {cash: 400, name: 'Younghee Lee'}
console.log("제거된 요소:", pq.deq()); // {cash: 300, name: 'Gildong Hong'}
console.log("현재 큐 크기:", pq.size()); // 2

// 5. forEach 테스트
console.log("\n=== forEach 테스트 ===");
console.log("현재 큐의 모든 요소:");
pq.forEach((element) => {
  console.log(element);
});

// 6. isEmpty 테스트
console.log("\n=== isEmpty 테스트 ===");
console.log("큐가 비어있나요?", pq.isEmpty()); // false
pq.deq();
pq.deq();
console.log("모든 요소 제거 후 비어있나요?", pq.isEmpty()); // true

// 7. 에러 처리 테스트
console.log("\n=== 에러 처리 테스트 ===");
try {
  pq.peek(); // 큐가 비어있을 때 peek 호출
} catch (error) {
  console.log("예상된 에러 발생:", error.message);
}

try {
  pq.deq(); // 큐가 비어있을 때 deq 호출
} catch (error) {
  console.log("예상된 에러 발생:", error.message);
}

// 8. 다른 타입의 데이터로 테스트
console.log("\n=== 문자열 데이터 테스트 ===");
let strPq = new PriorityQueue(); // 기본 비교자 사용
strPq.enq("banana");
strPq.enq("apple");
strPq.enq("cherry");
console.log("문자열 정렬 결과:");
while (!strPq.isEmpty()) {
  console.log(strPq.deq());
}

/**
 * ===========================
 * 최대힙 생성 및 기본 기능 테스트
 * ===========================
 * 
 * [enq(추가) 테스트]
 * 큐 크기: 4
 * 
 * [peek(최상위 요소 확인) 테스트]
 * 최상위 요소: { cash: 400, name: 'Younghee Lee' }
 * 
 * [deq(제거) 테스트]
 * 제거된 요소: { cash: 400, name: 'Younghee Lee' }
 * 제거된 요소: { cash: 300, name: 'Gildong Hong' }
 * 현재 큐 크기: 2
 * 
 * [forEach 테스트]
 * 현재 큐의 모든 요소:
 * { cash: 250, name: 'Doohyun Kim' }
 * { cash: 150, name: 'Minchul Han' }
 * 
 * [isEmpty 테스트]
 * 큐가 비어있나요? false
 * 모든 요소 제거 후 비어있나요? true
 * 
 * [에러 처리 테스트]
 * 예상된 에러 발생: PriorityQueue is empty
 * 예상된 에러 발생: PriorityQueue is empty
 * 
 * [문자열 데이터 테스트]
 * 문자열 정렬 결과:
 * cherry
 * banana
 * apple
 */