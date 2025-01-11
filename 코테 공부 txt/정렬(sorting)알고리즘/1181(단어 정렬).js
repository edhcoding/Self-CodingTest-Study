// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "13",
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];

const words = [...new Set(input.slice(1))]
  .sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  })
  .join("\n");

console.log(words);
