// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++)
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  // startsWith - 문자열 객체의 메서드, 해당 문자열이 지정된 접두사로 시작하는지 여부 확인, 두번재 인자로 시작인덱스 지정 가능함, 지정 안하면 전체 탐색 (주의! 대소문자 구분함)

  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
