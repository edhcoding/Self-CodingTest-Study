// let input = require("fs").readFileSync(0, "utf8").split(" ");
let input = ["10", "10"];
let [hour, minute] = input.map(Number);

if (minute < 45) {
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else {
  minute -= 45;
}

console.log(`${hour} ${minute}`);

/**
 * 더 좋은 풀이
 *
 * 이 풀이가 더 좋은 이유
 * 1. 모든 시간을 분 단위로 변환하여 계산하므로 로직이 더 단순해짐
 * 2. 조건문이 하나로 줄어듦
 * 3. 시간 계산이 더 직관적이고 이해하기 쉬움
 * 4. 코드가 더 간결해짐
 */

let [H, M] = input.map(Number);

// 시간을 분으로 모두 변환한 후 45분을 뺌
let totalMinutes = H * 60 + M - 45;

// 음수가 된 경우 하루의 총 분(24 * 60)을 더해줌
if (totalMinutes < 0) totalMinutes += 24 * 60;

// 다시 시와 분으로 변환
const hour2 = Math.floor(totalMinutes / 60);
const minute2 = totalMinutes % 60;

console.log(`${hour2} ${minute2}`);
