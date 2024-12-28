let input = require("fs").readFileSync(0, "utf8").split("\n");

let items = input.map(Number);
let max = Math.max(...items);
let line = items.indexOf(max) + 1;
// indexOf()사용시 주의할 점!
// 문제에서 몇 번째 수인지 물어봐서 index 값에서 + 1을 해야하기 때문에
// items.indexOf(max + 1)하면 안됩니다. 이러면 아무런 값도 없는 숫자를 찾게 되서 -1이 반환됨

console.log(max + "\n" + line);
