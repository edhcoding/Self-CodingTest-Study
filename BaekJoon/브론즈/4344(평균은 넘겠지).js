let input = require("fs").readFileSync(0, "utf8").split("\n");

let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let items = input[i].split(" ").map(Number);
  // slice() : 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용합니다.
  // 첫번째 인자로 시작 인덱스(index), 두번째 인자로 종료 인덱스를 받으며, 시작 인덱스부터 종료 인덱스까지 값을 복사하여 반환합니다.
  let scores = items.slice(1); // 1번 인덱스부터 끝까지 복사
  let sum = scores.reduce((acc, curr) => acc + curr, 0);
  let avg = sum / scores.length;
  let overAvg = scores.filter((score) => score > avg).length; // 평균을 넘는 학생들의 수
  let result = (overAvg / scores.length) * 100; // 평균을 넘는 학생들의 비율
  console.log(`${result.toFixed(3)}%`);
}

// slice랑 같이 알면 좋은 splice() 메서드
// splice() : 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체할 수 있습니다.
// 첫번째 인자로 시작 인덱스(index), 두번째 인자로 몇개의 값을 삭제할지, 그리고 세번째 인자부터는 추가할 값을 가변 인자로 넘길 수 있으며, 삭제된 값을 담고 있는 배열을 반환합니다.

// 정리 slice는 복사(기존 배열 변경x, 복사), splice는 삭제후 나머지 배열 반환(기존 배열 변경o)

// toFixed() : 숫자를 고정 소수점 표현으로 변환하여 문자열로 반환합니다.
// 첫번째 인자로 소수점 이하 자리수를 받으며, 소수점 이하 자리수가 지정된 값보다 작으면 0으로 채워집니다.
// 예시 : 123.456.toFixed(2) => "123.46"
// 예시 : 123.456.toFixed(0) => "123"
// 예시 : 123.456.toFixed(1) => "123.5"
// 예시 : 123.456.toFixed(3) => "123.456"
