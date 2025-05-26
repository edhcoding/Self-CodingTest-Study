// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// numbers - 숫자들이 담긴 배열
// target - 타겟 넘버
// return - 타겟 넘버를 만드는 방법의 수
function solution(numbers, target) {
  let answer = 0;

  // index - 현재 탐색중인 numbers 배열의 인덱스
  // currentSum - 현재까지 계산된 합
  function dfs(index, currentSum) {
    // 모든 숫자 탐색 완료
    if (index === numbers.length) {
      // 현재까지 계산된 합이 target과 같다면 answer 증가
      if (currentSum === target) answer++;
      return;
    }

    // 현재 숫자를 더하거나 빼는 두 가지 경우를 탐색
    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
