let input = require("fs").readFileSync(0, "utf8").split("\n");

let count = Number(input[0]);
let result = 0;

for (let i = 1; i <= count; i++) {
  let str = input[i];
  let used = new Set(); // 단어 하나하나 체크
  let isGroupWord = true; // 그룹단어 여부 (그룹단어면 result값 증가)

  for (let j = 0; j < str.length; j++) {
    // 이전 문자와 다른 경우
    if (j > 0 && str[j] !== str[j - 1]) {
      // 사용된 문자가 다시 나타났다면
      if (used.has(str[j])) {
        isGroupWord = false;
        break;
      }
    }
    // 현재 문자를 set 객체에 추가
    used.add(str[j]);
  }

  if (isGroupWord) result++;
}

console.log(result);

// 다른방법 1
const isGroupWord = (word) => {
  // 각 문자가 마지막으로 등장한 인덱스를 저장하는 객체
  // 예: 'happy' -> { h: 0, a: 1, p: 3, y: 4 }
  const lastSeen = {};

  // word를 배열로 변환하고 every 메서드로 모든 문자 검사
  return word.split("").every((char, i) => {
    // 두 가지 경우 true 반환:
    // 1) 처음 등장하는 문자인 경우 (lastSeen[char] === undefined)
    // 2) 현재 문자가 바로 이전 위치에서 나온 경우 (lastSeen[char] === i - 1)
    if (lastSeen[char] === undefined || lastSeen[char] === i - 1) {
      // 현재 문자의 위치를 lastSeen에 저장
      lastSeen[char] = i;
      return true;
    }
    // 위 조건에 해당하지 않으면 그룹 단어가 아님
    return false;
  });
};

console.log(input.slice(1, Number(input[0]) + 1).filter(isGroupWord).length);

// 다른방법 2
// 그룹 단어인지 체크하는 함수
function isGroupWord(word) {
  // 첫 번째 문자를 포함한 Set 객체 생성
  let setData = new Set(word[0]);

  // 단어의 길이-1 만큼 반복 (현재 문자와 다음 문자를 비교하므로)
  for (let i = 0; i < word.length - 1; i++) {
    // 현재 문자와 다음 문자가 다르다면
    if (word[i] !== word[i + 1]) {
      // 다음 문자가 이미 Set에 있다면 그룹 단어가 아님
      if (setData.has(word[i + 1])) {
        return false;
      }
      // 새로운 문자라면 Set에 추가
      setData.add(word[i + 1]);
    }
  }
  // 모든 검사를 통과하면 그룹 단어
  return true;
}

let count2 = Number(input[0]);
// 각 단어에 대해 그룹 단어 체크 후 개수 세기
console.log(input.slice(1, count2 + 1).filter(isGroupWord).length);
