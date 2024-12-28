let input = require("fs").readFileSync(0, "utf8");

for (i = 1; i <= Number(input); i++) console.log("*".repeat(i));
