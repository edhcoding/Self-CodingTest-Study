// 예시 입력:
// 3
// 40 80 60

let input = require("fs").readFileSync(0, "utf8").split("\n");

const scores = input[1].split(" ").map(Number); // [40, 80, 60]
const M = Math.max(...scores); // 최댓값 M = 80

// 1. 각 점수를 (점수/M*100)으로 변환
const newScores = scores.map((score) => (score / M) * 100);
// 40 -> (40/80*100) = 50
// 80 -> (80/80*100) = 100
// 60 -> (60/80*100) = 75
// newScores = [50, 100, 75]

// 2. 변환된 점수들의 합계
const sum = newScores.reduce((a, b) => a + b); // 50 + 100 + 75 = 225

// 3. 평균 계산
const newAvg = sum / scores.length; // 225 / 3 = 75

console.log(newAvg); // 75
