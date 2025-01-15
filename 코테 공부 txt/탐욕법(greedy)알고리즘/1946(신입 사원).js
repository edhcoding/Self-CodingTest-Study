// let input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let input = [
  "2",
  "5",
  "3 2",
  "1 4",
  "4 1",
  "2 3",
  "5 5",
  "7",
  "3 6",
  "7 3",
  "4 2",
  "1 4",
  "5 7",
  "2 5",
  "6 1",
];

// 입력값 처리
let line = 0;
const T = Number(input[line++]); // 후위 증감 연산자를 사용해 처음엔 0 이 들어가고 그다음 1로 바뀜 (T = 2)

for (let t = 0; t < T; t++) {
  // 지원자 수 읽기 (N = 5)
  const N = Number(input[line++]);

  // 지원자들의 성적 배열로 저장
  const applicants = Array.from({ length: N }, () => {
    const [paper, interview] = input[line++].split(" ").map(Number);
    return [paper, interview];
  });

  // 서류 성적 기준으로 오름차순 정렬
  applicants.sort((a, b) => a[0] - b[0]);

  let answer = 1; // 서류 1등은 무조건 선발
  let minInterview = applicants[0][1]; // 서류 1등의 면접 성적 (2차원 배열 형태)

  // 서류 2등부터 확인
  for (let i = 1; i < N; i++) {
    // 면접 성적이 이전 선발된 사람보다 좋으면 선발
    if (applicants[i][1] < minInterview) {
      answer++;
      minInterview = applicants[i][1];
    }
  }

  console.log(answer);
}
