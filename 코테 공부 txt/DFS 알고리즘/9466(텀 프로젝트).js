// https://www.acmicpc.net/problem/9466
// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3 0

// 각 학생들의 선택을 방향 간선으로 표현하여 그래프를 구성
// 사이클을 구성하는 부분 그래프에 포함된 노드의 개수를 세는 문제임

const T = Number(input[0]); // 테스트 케이스 개수
let line = 1;
let answer = [];

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];

  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    // 사이클 발견시 사이클에 포함된 노드들 저장 - 사이클에 포함된 모든 학생들을 찾아서 팀 구성
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    // 자기 자신도 팀 구성에 포함
    result.push(x);
  }
  finished[x] = true;
}

// 변수 t를 생성한 for문은 단순히 테스트 케이스 만큼 반복하는 용도일 뿐
// 변수 t를 사용하지는 않고 for문 내부에서 line을 증가시키면서 다음 테스트 케이스로 넘어감
for (let t = 0; t < T; t++) {
  const n = Number(input[line]); // 학생의 수
  // 학생들의 선택 정보 (0번 인덱스는 더미값, 1번부터 실제 학생 번호)
  const graph = [0, ...input[line + 1].split(" ").map(Number)];
  const visited = new Array(n + 1).fill(false); // 방문 여부
  const finished = new Array(n + 1).fill(false); // 처리 완료 여부
  const result = []; // 팀을 이룬 학생들의 번호 저장

  // 모든 노드에 대해 DFS 수행
  for (let i = 1; i <= n; i++)
    if (!visited[i]) dfs(i, graph, visited, finished, result);

  // 팀을 이루지 못한 학생 수 계산
  answer.push(n - result.length);
  line += 2;
}

console.log(answer.join("\n"));
