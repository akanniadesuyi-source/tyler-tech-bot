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
  const chat = "repeat-test";
  await game.startGame(chat, "host", announce);
  const joinId = messages.at(-1).id;

  for (const p of ["p1", "p2", "p3"]) game.joinGame(chat, p, joinId);
  await game.beginGame(chat, announce);

  let turnId = messages.at(-1).id;
  await game.submitWord(chat, "p1", "apple", turnId, announce);

  turnId = messages.at(-1).id;
  await game.submitWord(chat, "p2", "elephant", turnId, announce);

  turnId = messages.at(-1).id;
  console.log("Repeated word:", await game.submitWord(chat, "p3", "apple", turnId, announce));

  console.log(game.stopGame(chat, "host"));
})();
