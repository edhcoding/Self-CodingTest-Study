// let input = require("fs").readFileSync(0, "utf-8").trim().split("-");

let input = ["55", "50+40"];

// 값을 최소로 만들어야하기 때문에 - 이후의 숫자가 최대가 되도록 해야합니다.

const result = input
  .map((group) =>
    group
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  )
  .reduce((acc, cur) => acc - cur);

console.log(result);
