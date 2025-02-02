// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];

const result = [];

function dfs(numbers, start, output) {
  if (output.length === 6) {
    result.push(output.join(" "));
    return;
  }

  for (let i = start; i < numbers.length; i++)
    dfs(numbers, i + 1, [...output, numbers[i]]);
}

for (let i = 0; i < input.length - 1; i++) {
  const numbers = input[i].split(" ").map(Number).slice(1);
  dfs(numbers, 0, []);
  result.push("");
}

console.log(result.slice(0, -1).join("\n"));
