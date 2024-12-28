// 이 문제는 조금 억울합니다..
// for문에서 i < 10 이라는 범위를 주기전에 i < items.length를 했는데 이것때문에 계속 동작을 안할줄이야..
// split("\n")을 하면 마지막 빈 줄도 포함되어 items.length는 11이 될 수도 있다고 하네요..
// 하하
let input = require("fs").readFileSync(0, "utf8").split("\n");

let items = input.map(Number);

let result = new Set();

for (let i = 0; i < 10; i++) {
  result.add(items[i] % 42);
}

console.log(result.size);
