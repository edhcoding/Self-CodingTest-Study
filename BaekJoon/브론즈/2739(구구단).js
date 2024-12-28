let input = require("fs").readFileSync(0, "utf8");

let N = Number(input);

for (i = 1; i <= 9; i++) console.log(`${N} * ${i} = ${N * i}`);
