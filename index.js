const dir = "./telefones";
const events = require("events");
const fs = require("fs");
const readline = require("readline");

fs.readdirSync(dir).forEach(async (file) => {
  const rl = readline.createInterface({
    input: fs.createReadStream("telefones/" + file),
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    console.log(line);
  });

  await events.once(rl, "close");
});
