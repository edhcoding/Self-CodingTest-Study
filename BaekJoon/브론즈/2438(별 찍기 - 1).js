let input = require("fs").readFileSync(0, "utf8");

for (i = 1; i <= Number(input); i++) console.log("*".repeat(i));

/**
 * repeat()란? 
- 문자열(String)을 주어진 횟수만큼 반복해서 새로운 문자열을 만드는 JavaScript 메서드입니다.

기본 형태
- 문자열.repeat(반복횟수)

예시
- "abc".repeat(3); // 결과: "abcabcabc"
- "*".repeat(5); // 결과: "*****"
 */
