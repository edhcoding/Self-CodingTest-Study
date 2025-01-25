// let input = require("fs").readFileSync(0, "utf-8").trim().split(" ");

let input = ["4", "2"];

const [N, M] = input.map(Number);
const visited = new Array(N + 1).fill(false); // 각 원소 인덱스별 방문 여부
const output = [];
const result = [];

function backtrack(count) {
  if (count === M) {
    result.push(output.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);
      backtrack(count + 1);
      output.pop();
      visited[i] = false;
    }
  }
}

backtrack(0);
console.log(result.join("\n"));
