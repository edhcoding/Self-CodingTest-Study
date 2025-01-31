// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");
let input = ["3", "1"];

const [N, M] = input.map(Number);
const output = [];
const result = [];

function dfs(depth) {
  if (depth === M) {
    result.push(output.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    output.push(i);
    dfs(depth + 1);
    output.pop();
  }
}

dfs(0);
console.log(result.join("\n"));
