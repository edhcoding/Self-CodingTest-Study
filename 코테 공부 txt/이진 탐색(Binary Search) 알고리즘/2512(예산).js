// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4", "120 110 140 150", "485"]; // 127

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let M = Number(input[2]);

let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let x of arr) total += Math.min(mid, x);

  if (total <= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;hk
  }
}

console.log(result);
