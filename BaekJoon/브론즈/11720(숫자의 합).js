let input = require("fs").readFileSync(0, "utf8").split("\n");

const numbers = input[1].split("").map(Number);

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum);
