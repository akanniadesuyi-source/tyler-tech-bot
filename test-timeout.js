const game = require("./wordchain");

let n = 0;
const messages = [];

async function announce(chat, text) {
  const id = `m${++n}`;
  messages.push({ id, text });
  console.log(`[${id}] ${text}`);
  return { key: { id } };
}

(async () => {
  const chat = "timeout-test";
  await game.startGame(chat, "host", announce);
  const joinId = messages.at(-1).id;

  game.joinGame(chat, "p1", joinId);
  game.joinGame(chat, "p2", joinId);
  await game.beginGame(chat, announce);

  console.log("Waiting 4 seconds for timeout...");
  await new Promise(resolve => setTimeout(resolve, 16000));

  console.log(game.stopGame(chat, "host"));
})();
