// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["4", "2 3 1", "5 2 4 1"];

const distances = input[1].split(" ").map(BigInt);
const prices = input[2].split(" ").map(BigInt);

const result = distances.reduce(
  (acc, cur, i) => {
    if (i === 0) {
      return [prices[0] * cur, prices[0]];
    }
    const minPrice = acc[1] < prices[i] ? acc[1] : prices[i];
    return [acc[0] + minPrice * cur, minPrice];
  },
  [0n, 0n]
);

console.log(String(result[0]));
