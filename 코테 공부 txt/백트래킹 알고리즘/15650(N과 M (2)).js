// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

let input = ["4", "2"];

const [N, M] = input.map(Number);
const visited = new Array(N + 1).fill(false);
const output = [];
const result = [];

function dfs(start, depth) {
  if (depth === M) {
    result.push(output.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);
      dfs(i + 1, depth + 1); // 다음 숫자는 현재 숫자보다 커야 함
      output.pop();
      visited[i] = false;
    }
  }
}

dfs(1, 0);
console.log(result.join("\n"));
