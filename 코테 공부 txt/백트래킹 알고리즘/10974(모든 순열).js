// let input = require("fs").readFileSync(0, "utf-8").trim();

let input = ["3"];

const N = Number(input[0]);
const visited = new Array(N + 1).fill(false); // 방문 여부
const output = []; // 계산 과정 저장
const result = []; // 결과 저장

function backtrack(count) {
  if (count === N) {
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
