const assert = require("assert");
const trivia = require("./trivia");

const messages = [];
async function announce(chat, text) {
  messages.push(text);
}

(async () => {
  assert.match(
    trivia.startTrivia
      ? await trivia.startTrivia("bad", announce, "invalid")
      : "",
    /Choose easy, medium or hard/
  );

  for (const difficulty of ["easy", "medium", "hard"]) {
    messages.length = 0;

    const chat = `test-${difficulty}`;
    const started = await trivia.startTrivia(chat, announce, difficulty);

    assert.match(started, /Trivia started/);
    assert.match(messages[0], /QUESTION 1\/24/);

    assert.match(trivia.answerTrivia(chat, "p1", "A", "Tyler"), /Correct|Wrong/);
    assert.match(trivia.answerTrivia(chat, "p1", "B"), /already answered/);

    for (let i = 0; i < 24; i++) {
      await trivia.nextTrivia(chat);
    }

    assert.match(messages.at(-1), /TRIVIA FINISHED/);
    assert.match(trivia.getScores(chat), /No active trivia game/);

    console.log(`${difficulty}: passed`);
  }

  console.log("All Trivia tests passed.");
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
