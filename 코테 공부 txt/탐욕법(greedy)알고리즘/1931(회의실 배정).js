// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = [
  "11",
  "1 4",
  "3 5",
  "0 6",
  "5 7",
  "3 8",
  "5 9",
  "6 10",
  "8 11",
  "8 12",
  "2 13",
  "12 14",
];

const N = Number(input[0]);
const mettings = input
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];

    return a[1] - b[1];
  });

let count = 0;
let endTime = 0;

for (let i = 0; i < N; i++) {
  if (mettings[i][0] >= endTime) {
    count++;
    endTime = mettings[i][1];
  }
}

console.log(count);
