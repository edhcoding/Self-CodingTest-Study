let input = require("fs").readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 개수
let result = "";

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" "); // R: 반복 횟수, S: 문자열
  let repeatedStr = "";

  // 문자열의 각 문자를 R번씩 반복
  for (let j = 0; j < S.length; j++) repeatedStr += S[j].repeat(Number(R));

  result += repeatedStr + "\n";
}

console.log(result.trim());
