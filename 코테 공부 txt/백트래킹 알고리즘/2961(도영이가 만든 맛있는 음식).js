// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "3 8", "5 8"]; // 1

const N = Number(input[0]);
const foods = input.slice(1).map((v) => v.split(" ").map(Number));
let minDiff = Infinity;

function dfs(idx, sour, bitter) {
  if (sour !== 1 || bitter !== 0)
    minDiff = Math.min(minDiff, Math.abs(sour - bitter));

  if (idx === N) return;

  // 현재 재료 선택/선택하지 않음
  dfs(idx + 1, sour * foods[idx][0], bitter + foods[idx][1]);
  dfs(idx + 1, sour, bitter);
}

// sour를 1로 시작하는 이유는 곱하기 연산을 해야하기 때문 (0으로 시작하면 항상 0)
dfs(0, 1, 0);
console.log(minDiff);
