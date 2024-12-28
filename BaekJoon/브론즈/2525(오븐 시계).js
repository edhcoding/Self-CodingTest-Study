// let input = require("fs").readFileSync(0, "utf8").split("\n");
let input = ["14 30", "20"];

let [H, M] = input[0].split(" ").map((item) => Number(item));
let C = Number(input[1]);

let totalMinutes = H * 60 + M + C;

if (totalMinutes >= 24 * 60) totalMinutes -= 24 * 60; // 24시간이 넘어가면 24시간을 빼줍니다.

let Hour = Math.floor(totalMinutes / 60);
let Minute = totalMinutes % 60;

console.log(Hour + " " + Minute);
