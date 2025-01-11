// let input = require("fs").readFileSync(0, "utf-8").split(" ");

let input = [3, 1, 2];

input = input.map(Number);

input.sort((a, b) => a - b);
console.log(input.join(" "));
