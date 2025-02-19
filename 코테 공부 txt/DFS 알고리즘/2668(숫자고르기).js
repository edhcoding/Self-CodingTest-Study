// https://www.acmicpc.net/problem/2668
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["7", "3", "1", "1", "5", "5", "4", "6"]; // 3 1 3 5

const N = Number(input[0]); // 숫자의 개수
const numbers = [0, ...input.slice(1).map(Number)]; // 1이상의 랜덤 숫자(중복 O, 0은 더미값)
const result = []; // 사이클을 이루는 숫자들을 저장할 배열

// current: 현재 탐색 중인 숫자
// visited: 현재까지 방문한 숫자들의 집합
// start: 처음 DFS를 시작할 때의 숫자 (사이클 확인용)
function dfs(current, visited, start) {
  if (visited.includes(current)) {
    if (current === start) {
      // 사이클이 형성되면 방문한 모든 숫자를 결과에 추가
      visited.forEach((num) => {
        if (!result.includes(num)) result.push(num);
      });
    }
    return;
  }

  visited.push(current);
  dfs(numbers[current], visited, start);
}

for (let i = 1; i <= N; i++) dfs(i, [], i);

const sortedResult = result.sort((a, b) => a - b);

// 뽑힌 정수의 개수
console.log(sortedResult.length);
// 뽑힌 정수들(오름차순)
console.log(sortedResult.join("\n"));
