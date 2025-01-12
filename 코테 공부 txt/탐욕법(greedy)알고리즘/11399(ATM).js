// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["5", "3 1 4 3 2"];

const times = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let current = 0;
let total = 0;

for (let time of times) {
  current += time;
  total += current;
}

console.log(total);
