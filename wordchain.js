const fs = require("fs");
const wordListPath = require("word-list").default;
const validWords = new Set(
  fs.readFileSync(wordListPath, "utf8")
    .split(/\r?\n/)
    .map(word => word.trim().toLowerCase())
    .filter(Boolean)
);

const games = new Map();

const JOIN_TIME_MS = 30_000;
const TURN_TIME_MS = 15_000;
const MIN_PLAYERS = 2;

function displayName(game, playerId) {
  return game.players.get(playerId)?.name || "Player";
}

function messageId(result) {
  return result?.key?.id || result?.id || null;
}

async function postTurn(game, announce, text) {
  const result = await announce(game.chatId, text);
  game.currentTurnMessageId = messageId(result);
}

async function startGame(chatId, hostId, announce) {
  if (games.has(chatId)) return "A Word Chain game is already running.";

  const game = {
    chatId,
    hostId,
    players: new Map(),
    playerIds: [],
    usedWords: new Set(),
    lastWord: null,
    currentIndex: 0,
    status: "joining",
    announcementId: null,
    currentTurnMessageId: null,
    joinTimer: null,
    turnTimer: null
  };

  games.set(chatId, game);

  const result = await announce(
    chatId,
    "🎮 WORD CHAIN\nReply to THIS message with .join to participate!\n⏳ Joining closes in 30 seconds."
  );

  game.announcementId = messageId(result);

  game.joinTimer = setTimeout(() => {
    beginGame(chatId, announce);
  }, JOIN_TIME_MS);

  return "Joining phase started.";
}

function joinGame(chatId, playerId, quotedMessageId, playerName = "Player") {
  const game = games.get(chatId);
  if (!game || game.status !== "joining") return "Joining is closed.";

  if (!game.announcementId || quotedMessageId !== game.announcementId) {
    return "Reply to the bot's Word Chain announcement with .join.";
  }

  if (game.players.has(playerId)) return "You're already registered.";

  game.players.set(playerId, { eliminated: false, name: playerName });
  return `✅ Player joined! Total players: ${game.players.size}`;
}

async function beginGame(chatId, announce) {
  const game = games.get(chatId);
  if (!game || game.status !== "joining") return;

  game.status = "playing";

  if (game.players.size < MIN_PLAYERS) {
    games.delete(chatId);
    await announce(chatId, "❌ Not enough players. Game cancelled.");
    return;
  }

  game.playerIds = [...game.players.keys()];
  game.currentIndex = 0;

  const firstPlayer = displayName(game, game.playerIds[0]);

  await postTurn(
    game,
    announce,
    `🔥 WORD CHAIN STARTED!\nPlayers: ${game.playerIds.length}\nFirst turn: ${firstPlayer}\nReply to THIS message with your word.\n⏳ You have 15 seconds.`
  );

  startTurnTimer(chatId, announce);
}

function startTurnTimer(chatId, announce) {
  const game = games.get(chatId);
  if (!game || game.status !== "playing") return;

  clearTimeout(game.turnTimer);

  const playerId = game.playerIds[game.currentIndex];

  game.turnTimer = setTimeout(() => {
    eliminatePlayer(chatId, playerId, "⏰ Time's up!", announce);
  }, TURN_TIME_MS);
}

async function submitWord(chatId, playerId, word, quotedMessageId, announce) {
  const game = games.get(chatId);
  if (!game || game.status !== "playing") return "No active game.";

  if (quotedMessageId !== game.currentTurnMessageId) {
    return "Reply to the bot's latest Word Chain turn message.";
  }

  const currentPlayer = game.playerIds[game.currentIndex];
  if (playerId !== currentPlayer) return "It's not your turn.";

  const clean = word.trim().toLowerCase();

  if (!/^[a-z]+$/.test(clean)) {
    return eliminatePlayer(chatId, playerId, "❌ Invalid word.", announce);
  }

  if (!validWords.has(clean)) {
    return eliminatePlayer(chatId, playerId, "❌ That's not a valid English word.", announce);
  }

  if (game.usedWords.has(clean)) {
    return eliminatePlayer(chatId, playerId, "❌ Word already used.", announce);
  }

  if (game.lastWord && clean[0] !== game.lastWord.slice(-1)) {
    return eliminatePlayer(
      chatId,
      playerId,
      `❌ Word must start with "${game.lastWord.slice(-1)}".`,
      announce
    );
  }

  clearTimeout(game.turnTimer);
  game.usedWords.add(clean);
  game.lastWord = clean;

  game.currentIndex = nextActiveIndex(game, game.currentIndex);
  const nextPlayer = displayName(game, game.playerIds[game.currentIndex]);

  await postTurn(
    game,
    announce,
    `✅ "${clean}" accepted!\n➡️ Next turn: ${nextPlayer}\nYour word must start with "${clean.slice(-1)}".\nReply to THIS message within 15 seconds.`
  );

  startTurnTimer(chatId, announce);
  return "Word accepted.";
}

function nextActiveIndex(game, fromIndex) {
  for (let step = 1; step <= game.playerIds.length; step++) {
    const index = (fromIndex + step) % game.playerIds.length;
    const id = game.playerIds[index];

    if (!game.players.get(id).eliminated) return index;
  }

  return fromIndex;
}

async function eliminatePlayer(chatId, playerId, reason, announce) {
  const game = games.get(chatId);
  if (!game || game.status !== "playing") return;

  const player = game.players.get(playerId);
  if (!player || player.eliminated) return;

  clearTimeout(game.turnTimer);
  player.eliminated = true;

  const remaining = game.playerIds.filter(
    id => !game.players.get(id).eliminated
  );

  if (remaining.length <= 1) {
    game.status = "ended";
    games.delete(chatId);

    await announce(
      chatId,
      `${reason}\n❌ Player disqualified.\n🏆 Winner: ${remaining.length ? displayName(game, remaining[0]) : "Nobody"}`
    );
    return;
  }

  game.currentIndex = nextActiveIndex(game, game.currentIndex);
  const nextPlayer = displayName(game, game.playerIds[game.currentIndex]);

  await postTurn(
    game,
    announce,
    `${reason}\n❌ Player disqualified.\n➡️ Next turn: ${nextPlayer}\nReply to THIS message within 15 seconds.`
  );

  startTurnTimer(chatId, announce);
}

function stopGame(chatId, playerId) {
  const game = games.get(chatId);
  if (!game) return "No active game.";
  if (game.hostId !== playerId) return "❌ Only the game host can stop it.";

  clearTimeout(game.joinTimer);
  clearTimeout(game.turnTimer);
  games.delete(chatId);

  return "🛑 Word Chain stopped.";
}

module.exports = {
  startGame,
  joinGame,
  beginGame,
  submitWord,
  stopGame
};
