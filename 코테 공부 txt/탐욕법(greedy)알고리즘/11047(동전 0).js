// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "10 4200",
  "1",
  "5",
  "10",
  "50",
  "100",
  "500",
  "1000",
  "5000",
  "10000",
  "50000",
];

let [N, K] = input[0].split(" ").map(Number);
let count = 0;

const coins = input
  .slice(1, N + 1)
  .map(Number)
  .sort((a, b) => b - a);

for (let coin of coins) {
  if (K >= coin) {
    count += Math.floor(K / coin);
    K %= coin;
  }
}

console.log(count);
