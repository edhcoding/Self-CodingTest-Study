// let input = require("fs").readFileSync(0, "utf-8").trim();

let input = "2143";

const result = input
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(result);
