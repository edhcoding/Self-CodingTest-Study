// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8", "10 9 -5 2 3 4 5 -10"]; // 3 0 0 1 2 0 0 2

let N = Number(input[0]); // N: 카드 개수
let cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // [-10, -10, 2, 3, 3, 6, 7, 10, 10, 10]

let M = Number(input[2]); // M: 찾을 숫자 개수
let targets = input[3].split(" ").map(Number);

// 이진 탐색으로 lower bound를 찾는 함수
function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

// 이진 탐색으로 upper bound를 찾는 함수
function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

let result = [];
for (let target of targets) {
  let count = upperBound(cards, target) - lowerBound(cards, target);
  result.push(count);
}

console.log(result.join(" "));
