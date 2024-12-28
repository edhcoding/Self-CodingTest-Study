let input = require("fs").readFileSync(0, "utf8").split("\n");

let N = Number(input[0]);
let answer = [];

for (let i = 1; i <= N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  answer.push(a + b);
}

console.log(answer.join("\n"));

/**
이 문제는 많이 틀렸습니다.

let input = require("fs").readFileSync(0, "utf8").split("\n");

let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    console.log(
        input[i].split(" ").reduce((acc, cur) => acc + Number(cur), 0)
    );
}

처음 코드인데 어딜봐도 문제가 없어보이는데 계속 시간초과가 나옵니다.

문제
1. 반복문으로 console.log 호출 - 시간 초과의 큰 원인이 됨
- 그래서 let result = 와 같은 어떠한 결과값을 담을 수 있는 변수를 생성하고 한번에 console을 출력하는게 시간을 단축시킬 수 있는 방법입니다.

2. 1의 방법을 통해 마지막에 문자열 배열을 만들어 마지막에 join('\n')으로 한 번에 출력하는 것이 효율적입니다
 */
