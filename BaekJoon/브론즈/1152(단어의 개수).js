// 주의!
// 처음 input 정의할때 trim 빼먹으면 안됩니다!
// 문제에서 앞뒤 공백 있다고 했습니다! (그래놓고 내가 실수..)
let input = require("fs").readFileSync(0, "utf8").trim().split(" ");

console.log(input.filter((word) => word !== "").length);
