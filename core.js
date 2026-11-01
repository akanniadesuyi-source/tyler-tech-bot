const wordchain = require("./wordchain");
const trivia = require("./trivia");

const commands = {
  ping: () => "Pong! ⚡ Tyler Tech is alive.",
  menu: () => `
╭───『 TYLER TECH 』
│ .ping
│ .menu
│ .wordchain start
│ .wordchain stop
│ .join
│ .trivia start
│ .answer A/B/C/D
│ .trivia scores
│ .trivia stop
╰──────────────
`
};

async function handleMessage(text, context = {}) {
  const { chatId, senderId, senderName, quotedMessageId, announce } = context;
  const input = text.trim();
  const lower = input.toLowerCase();

  if (lower === ".ping") return commands.ping();
  if (lower === ".menu") return commands.menu();

  if (!chatId || !senderId || !announce) {
    return "Missing message context.";
  }

  if (lower.startsWith(".trivia start")) {
    const difficulty = lower.split(/\s+/)[2] || "easy";
    if (!["easy", "medium", "hard"].includes(difficulty)) {
      return "Choose: .trivia start easy, medium or hard.";
    }
    return await trivia.startTrivia(chatId, announce, difficulty);
  }

  if (lower.startsWith(".answer ")) {
    return trivia.answerTrivia(chatId, senderId, input.slice(8), senderName);
  }

  if (lower === ".trivia scores") {
    return trivia.getScores(chatId);
  }

  if (lower === ".trivia stop") {
    return await trivia.stopTrivia(chatId);
  }

  if (lower === ".wordchain start") {
    return await wordchain.startGame(chatId, senderId, announce);
  }

  if (lower === ".wordchain stop") {
    return wordchain.stopGame(chatId, senderId);
  }

  if (lower === ".join") {
    return wordchain.joinGame(chatId, senderId, quotedMessageId, senderName);
  }

  if (!lower.startsWith(".")) {
    return await wordchain.submitWord(
      chatId, senderId, input, quotedMessageId, announce
    );
  }

  return "Unknown command. Type .menu";
}

module.exports = { handleMessage };
