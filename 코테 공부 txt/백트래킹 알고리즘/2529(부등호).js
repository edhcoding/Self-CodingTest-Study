// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "< >"]; // 897 021

const k = Number(input[0]);
const signs = input[1].split(" ");
const visited = new Array(10).fill(false);
let max = "";
let min = "";

function isValid(prev, curr, sign) {
  return sign === "<" ? prev < curr : prev > curr;
}

// depth: 현재 몇 번째 숫자를 선택하는지 (0부터 시작)
// path: 지금까지 선택한 숫자들의 배열
function dfs(depth, path) {
  if (depth === k + 1) {
    const num = path.join("");
    // 첫 번째로 찾은 수가 최솟값
    if (!min) min = num;
    // 마지막으로 찾은 수가 최댓값
    max = num;
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;

    if (depth === 0 || isValid(Number(path[depth - 1]), i, signs[depth - 1])) {
      visited[i] = true;
      path.push(i);
      dfs(depth + 1, path);
      path.pop();
      visited[i] = false;
    }
  }
}

dfs(0, []);

console.log(max);
console.log(min);
