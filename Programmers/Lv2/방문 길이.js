// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  const visited = new Set(); // 방문 여부 (중복 X)
  // 초기 좌표 (0, 0)
  let x = 0;
  let y = 0;

  // 방향 정의
  const directions = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  // for of문 사용해서 문자열 순회하면 문자열 하나씩 추출 가능함
  for (const dir of dirs) {
    const [dx, dy] = directions[dir];
    // 기존 위치에서 이동한 위치
    const nx = x + dx;
    const ny = y + dy;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 현재 위치, 이동한 위치 저장 (문자열 형식으로 양방향으로 저장)
    // 양방향으로 저장함으로써, 동일한 길을 다른 방향으로 이동할 때도 중복되지 않도록 함 ex. (0, 0) -> (1, 0) 과 (1, 0) -> (0, 0) 둘 다 저장
    visited.add(`${x},${y},${nx},${ny}`);
    visited.add(`${nx},${ny},${x},${y}`);

    // 현재 위치 업데이트
    x = nx;
    y = ny;
  }

  // 양방향으로 저장했으므로 2로 나눔
  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
