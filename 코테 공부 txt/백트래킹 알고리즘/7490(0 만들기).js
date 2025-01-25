// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "3", "7"];

let T = Number(input[0]);
let N = 0;
let arr = [];

for (let tc = 1; tc <= T; tc++) {
  N = Number(input[tc]);
  arr = [];

  for (let i = 1; i <= N; i++) arr.push(i);

  dfs([], 0);
  console.log();
}

function dfs(result, depth) {
  // 현재 순열 처리 (중복 순열)
  if (depth === N - 1) {
    let str = "";
    for (let i = 0; i < N - 1; i++) str += arr[i] + result[i];
    str += arr[N - 1];

    // 공백을 합치고 계산
    let current = eval(str.split(" ").join(""));

    if (current === 0) console.log(str);

    return;
  }

  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}
