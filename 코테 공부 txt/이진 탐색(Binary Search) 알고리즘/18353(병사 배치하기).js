// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["7", "15 11 4 8 5 2 4"]; // 4

let N = Number(input[0]);
let soldiers = input[1].split(" ").map(Number).reverse(); // 배열을 뒤집어서 LIS 문제로 변환 - [4, 2, 5, 8, 4, 11, 15]

// 이진 탐색으로 삽입 위치 찾기
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

// LIS를 구하는 부분
let lis = [soldiers[0]]; // LIS 배열 초기화

/**
 * 동작과정
 * i=0: lis = [4]
 * i=1: lis = [2]           // 2가 4를 대체
 * i=2: lis = [2, 5]        // 5 추가
 * i=3: lis = [2, 5, 8]     // 8 추가
 * i=4: lis = [2, 4, 8]     // 4가 5를 대체
 * i=5: lis = [2, 4, 8, 11] // 11 추가
 * i=6: lis = [2, 4, 8, 11, 15] // 15 추가
 */

for (let i = 1; i < N; i++) {
  if (soldiers[i] > lis[lis.length - 1]) {
    lis.push(soldiers[i]);
  } else {
    let pos = lowerBound(lis, soldiers[i]);
    lis[pos] = soldiers[i];
  }
}

// 열외시켜야 하는 병사의 수 = 전체 병사 수 - LIS 길이
console.log(N - lis.length);
