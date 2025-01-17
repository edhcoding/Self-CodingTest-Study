// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4 4 8", "3", "0 10", "1 10", "2 1"]; // 9

const [length, width, height] = input[0].split(" ").map(Number);
const n = Number(input[1]);
const cubes = Array(20).fill(0); // 큐브 개수 저장 배열 (인덱스가 큐브의 크기를 나타냄)

// 입력값 처리 - 각 큐브의 크기와 개수를 cubes 배열에 저장
for (let i = 2; i <= n + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  cubes[a] = b; // a: 큐브의 크기(2^a), b: 해당 크기의 큐브 개수
}

// 박스에 들어갈 수 있는 가장 큰 큐브의 크기(지수) 찾는 함수
function nearestSquare(x) {
  let i = 0;

  while (2 ** i <= x) i += 1;

  return i - 1;
}

// 박스에 넣을 수 있는 가장 큰 큐브의 크기 찾기
let size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

// res: 사용한 큐브의 총 개수, used: 현재까지 채운 부피
let res = 0;
let used = 0;

// 큰 큐브부터 작은 큐브까지 순서대로 박스 채우기
for (let i = size; i >= 0; i--) {
  used *= 8; // 큐브 크기가 절반이 될 때마다 이전에 채운 부피를 8배
  const cur = 2 ** i; // 현재 사용할 큐브의 한 변 길이

  // 현재 크기의 큐브로 채울 수 있는 최대 개수에서 이미 채운 부피를 뺀 값
  const required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  // 필요한 개수와 가진 개수 중 작은 값을 선택하여 사용
  const usage = Math.min(required, cubes[i]);
  // 총 사용 개수에 추가
  res += usage;
  // 채운 부피에 추가
  used += usage;
}

// 박스를 완전히 채웠으면 사용한 큐브 개수를, 그렇지 않으면 -1을 출력
console.log(used === length * width * height ? res : -1);
