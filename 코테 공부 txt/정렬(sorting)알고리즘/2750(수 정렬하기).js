// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [5, 5, 2, 3, 4, 1];

const numbers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers.join("\n"));
