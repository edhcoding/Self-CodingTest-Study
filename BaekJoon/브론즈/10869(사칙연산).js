let input = require("fs").readFileSync(0, "utf8").split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
