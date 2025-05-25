// https://school.programmers.co.kr/learn/courses/30/lessons/42587

/** 메서드 공부
 * 배열 앞 제거 - shift, 추가 -unshift
 * 배열 뒤 제거 - pop, 추가 - push
 * some - 배열 요소 중 조건에 맞는 요소가 있는지 확인, 조건에 맞는 요소가 하나라도 있으면 true, 없으면 false 반환
 * every - 배열 요소 중 모든 요소가 조건에 맞는지 확인, 모든 요소가 조건에 맞으면 true, 하나라도 맞지 않으면 false 반환
 * filter - 배열 요소 중 조건에 맞는 요소를 새로운 배열로 반환, 조건에 맞는 요소가 하나도 없으면 빈 배열 반환
 * find - 배열 요소 중 조건에 맞는 첫번째 요소를 반환, 조건에 맞는 요소가 없으면 undefined 반환
 * findIndex - 배열 요소 중 조건에 맞는 첫번째 요소의 인덱스를 반환, 조건에 맞는 요소가 없으면 -1 반환
 */

function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let printOrder = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    // current를 제외한 queue 요소 중 중요도가 높은 요소가 있다면 다시 queue의 맨 뒤에 추가, 없다면 출력
    if (queue.some((doc) => doc.priority > current.priority))
      queue.push(current);
    else {
      printOrder++;
      if (current.index === location) return printOrder;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
