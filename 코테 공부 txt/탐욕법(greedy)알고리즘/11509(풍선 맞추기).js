// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["5", "2 1 5 4 3"];

const N = Number(input[0]);
const balloons = input[1].split(" ").map(Number);

const arrows = new Array(N).fill(0);
let result = 0;

for (let height of balloons) {
  if (arrows[height] > 0) {
    arrows[height]--; // 현재 높이의 화살 감소
    arrows[height - 1]++; // 높이가 1 줄어든 화살 증가
  } else {
    result++;
    arrows[height - 1]++;
  }
}

console.log(result);
