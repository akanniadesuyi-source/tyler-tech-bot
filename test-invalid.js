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
  const chat = "invalid-test";
  await game.startGame(chat, "host", announce);
  const joinId = messages.at(-1).id;

  game.joinGame(chat, "p1", joinId);
  game.joinGame(chat, "p2", joinId);
  await game.beginGame(chat, announce);

  let turnId = messages.at(-1).id;

  console.log("Wrong reply:", await game.submitWord(chat, "p1", "apple", "wrong-id", announce));
  console.log("Valid word:", await game.submitWord(chat, "p1", "apple", turnId, announce));

  turnId = messages.at(-1).id;
  console.log("Invalid dictionary word:", await game.submitWord(chat, "p2", "eqqqq", turnId, announce));

  console.log(game.stopGame(chat, "host"));
})();
