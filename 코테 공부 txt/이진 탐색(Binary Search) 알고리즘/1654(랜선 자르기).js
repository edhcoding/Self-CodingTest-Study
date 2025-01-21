// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4 11", "802", "743", "457", "539"]; // 200

let [K, N] = input[0].split(" ").map(Number); // K: 가지고 있는 랜선의 개수, N: 필요한 랜선의 개수
let lines = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...lines);

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0; // 잘린 랜선의 개수

  // 각 랜선을 mid로 잘랐을 때 개수 계산
  for (let line of lines) count += parseInt(line / mid);

  if (count >= N) {
    result = mid;
    start = mid + 1; // 크니까 mid로부터 더 큰 값 탐색
  } else {
    end = mid - 1; // 작으니까 mid로부터 더 작은 값 탐색
  }
}

console.log(result);
