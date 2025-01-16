// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "7",
  "abba",
  "summuus",
  "xabba",
  "xabbay",
  "comcom",
  "comwwmoc",
  "comwwtmoc",
]; // 0 1 1 2 2 0 1

// 회문이면 0, 유사 회문이면 1, 둘 모두 아니면 2
function checkPalindrome(str, left, right, skipCount = 0) {
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
      continue;
    }

    if (skipCount === 1) return 2;

    // 한 문자를 건너뛰고 다시 검사 => 1 또는 2 반환 => 하나라도 1이면 통과한 유사 회문 이므로 Math.min을 통해 1반환
    return Math.min(
      checkPalindrome(str, left + 1, right, 1),
      checkPalindrome(str, left, right - 1, 1)
    );
  }

  return skipCount;
}

function solution(words) {
  return words
    .slice(1)
    .map((word) => checkPalindrome(word, 0, word.length - 1))
    .join("\n");
}

console.log(solution(input));
