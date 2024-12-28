let input = require("fs").readFileSync(0, "utf8").split(" ");

let diceA = Number(input[0]);
let diceB = Number(input[1]);
let diceC = Number(input[2]);
let price = 0;

if (diceA === diceB && diceB === diceC) {
  // 세 개의 눈이 모두 같은 경우
  price = 10000 + diceA * 1000;
} else if (diceA === diceB || diceA === diceC || diceB === diceC) {
  // 두 개의 눈이 같은 경우
  if (diceA === diceB || diceA === diceC) price = 1000 + diceA * 100;
  else price = 1000 + diceB * 100;
} else {
  // 모두 다른 경우 (가장 큰 값 사용)
  price = Math.max(diceA, diceB, diceC) * 100;
}

console.log(price);
