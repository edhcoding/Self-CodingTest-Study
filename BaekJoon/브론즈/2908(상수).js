let input = require("fs").readFileSync(0, "utf8").split(" ");

let A = input[0].split("").reverse().join("");
let B = input[1].split("").reverse().join("");

console.log(Math.max(Number(A), Number(B)));
