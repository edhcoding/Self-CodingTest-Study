let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let [N, M] = input[0].split(" ").map(Number); // N: 나무의 수, M: 필요한 나무의 길이
let trees = input[1].split(" ").map(Number); // 각 나무의 높이

let start = 0;
let end = Math.max(...trees);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2); // 절단기 높이
  let total = 0; // 잘린 나무의 총합

  // 각 나무에서 잘린 길이의 합 계산
  for (let tree of trees) {
    if (tree > mid) {
      total += tree - mid;
    }
  }

  // 잘린 나무의 길이가 목표보다 크거나 같으면
  if (total >= M) {
    result = mid; // 현재 높이를 저장
    start = mid + 1; // 더 높은 높이 탐색
  } else {
    end = mid - 1; // 더 낮은 높이 탐색
  }
}

console.log(result);
