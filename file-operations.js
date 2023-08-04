const fs = require("fs");

fs.writeFileSync("welcome.txt", "Hello Node\n");

const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
