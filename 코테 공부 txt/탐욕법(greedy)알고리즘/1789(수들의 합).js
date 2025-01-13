// let input = require("fs").readFileSync(0, "utf-8").trim();

let input = "200";
let S = Number(input);

let count = 0;
let sum = 0; // 누적 합

while (sum < S) {
  count++;
  sum += count;
}

if (sum > S) count--;

console.log(count);
