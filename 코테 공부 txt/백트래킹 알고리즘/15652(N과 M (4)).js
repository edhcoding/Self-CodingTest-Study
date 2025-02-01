// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

let input = ["4", "2"];

const [N, M] = input.map(Number);
const output = [];
const result = [];

function dfs(start, depth) {
  if (depth === M) {
    result.push(output.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    output.push(i);
    dfs(i, depth + 1);
    output.pop();
  }
}

dfs(1, 0);
console.log(result.join("\n"));
