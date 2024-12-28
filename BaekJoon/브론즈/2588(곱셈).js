let input = require("fs").readFileSync(0, "utf8").split("\n");

let a = Number(input[0]);
let b = input[1];

console.log(a * Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(a * Number(b));
