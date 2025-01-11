// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["5", "0 4", "1 2", "1 -1", "2 2", "3 3"];

let numbers = input
  .slice(1)
  .map((item) => item.split(" "))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })
  .map((item) => item.join(" "))
  .join("\n");

console.log(numbers);
