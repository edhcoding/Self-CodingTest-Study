// let input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];

let result = input
  .slice(1)
  .map((item, idx) => {
    const [age, name] = item.split(" ");

    return { age: Number(age), name, idx };
  })
  .sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;

    return a.idx - b.idx;
  })
  .map((item) => `${item.age} ${item.name}`)
  .join("\n");

console.log(result);
