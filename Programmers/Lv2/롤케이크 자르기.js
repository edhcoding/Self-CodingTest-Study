// https://school.programmers.co.kr/learn/courses/30/lessons/132265

// topping - 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열
function solution(topping) {
  let answer = 0;
  const leftSet = new Set(); // 왼쪽 부분의 토핑 종류 관리
  const rightMap = new Map(); // 오른쪽 부분의 토핑 종류와 개수 관리

  topping.forEach((t) => rightMap.set(t, (rightMap.get(t) || 0) + 1)); // 초기화 - 초기에는 모든 토핑이 오른쪽에 있다고 가정하고 시작

  for (let i = 0; i < topping.length - 1; i++) {
    const currentTopping = topping[i];

    leftSet.add(currentTopping); // 왼쪽에 토핑 추가

    rightMap.set(currentTopping, rightMap.get(currentTopping) - 1); // 오른쪽 토핑 제거 -> 0개면 삭제
    if (rightMap.get(currentTopping) === 0) rightMap.delete(currentTopping);

    if (leftSet.size === rightMap.size) answer++; // 왼쪽과 오른쪽의 토핑 종류 수가 같으면 카운트 증가
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
