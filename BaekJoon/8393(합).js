let input = require("fs").readFileSync(0, "utf8");

let answer = 0;

for (i = 1; i <= Number(input); i++) {
  answer += i;
}

console.log(answer);

// 더 좋은 다른 풀이
// 등차수열의 합 공식 사용해도 됩니다.
let n = Number(input);
console.log((n * (n + 1)) / 2);
