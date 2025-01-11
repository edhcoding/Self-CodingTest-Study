// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

input = ["5 2", "4 1 2 3 5"];

const [N, K] = input[0].split(" ").map(Number);

const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers[K - 1]);
