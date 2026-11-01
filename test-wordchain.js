const game = require("./wordchain");

let count = 0;
const messages = [];

async function announce(chatId, text) {
  const id = `msg${++count}`;
  messages.push({ id, text });
  console.log(`[${id}] ${text}`);
  return { key: { id } };
}

(async () => {
  const chat = "test-chat";

  await game.startGame(chat, "host", announce);
  const joinId = messages.at(-1).id;

  console.log("Join player 1:", game.joinGame(chat, "p1", joinId, "Tyler"));
  console.log("Join player 2:", game.joinGame(chat, "p2", joinId, "Alex"));

  await game.beginGame(chat, announce);

  const turnId = messages.at(-1).id;
  console.log("Player 1 word:", await game.submitWord(chat, "p1", "apple", turnId, announce));

  const nextTurnId = messages.at(-1).id;
  console.log("Player 2 word:", await game.submitWord(chat, "p2", "elephant", nextTurnId, announce));

  console.log(game.stopGame(chat, "host"));
})();
