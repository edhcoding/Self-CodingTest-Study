// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

// 어려웠던 문제 - Set, Map 객체 사용

let input = ["5", "2 4 -10 4 -9"];

let numbers = [...new Set(input[1].split(" ").map(Number))].sort(
  (a, b) => a - b
);

const compressedMap = new Map();

numbers.forEach((num, idx) => compressedMap.set(num, idx));

const result = input[1]
  .split(" ")
  .map((num) => compressedMap.get(Number(num)))
  .join(" ");

console.log(result);
