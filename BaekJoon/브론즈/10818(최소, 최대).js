// let input = require('fs').readFileSync(0, 'utf8').split('\n');
let input = ["5", "20 10 35 30 7"];

let N = Number(input[0]);
let items = input[1].split(" ").map(Number);

// console.log(Math.min(...items), Math.max(...items));

// 원소를 차례대로 하나씩 확인한다는 점에서 O(N)의 시간복잡도로 해결할 수 있습니다.

// 최소 최대 문제는 항상 주어진 조건에서 최소 최대를 초기화 해놓고 시작하는게 좋습니다.
let min = 1000000; // 최소값을 찾기 위해 큰 수로 시작
let max = -1000000; // 최대값을 찾기 위해 작은 수로 시작

for (let i = 0; i < N; i++) {
  if (min > items[i]) min = items[i]; // 더 작은 값을 찾으면 갱신
  if (max < items[i]) max = items[i]; // 더 큰 값을 찾으면 갱신
}

console.log(min, max);
