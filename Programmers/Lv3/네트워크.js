// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0; // 네트워크 개수 저장
  const visited = Array(n).fill(false); // 방문 여부

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++)
      // 연결되어 있고 방문하지 않았다면 재귀 호출
      if (computers[node][i] === 1 && !visited[i]) dfs(i);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
