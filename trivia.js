const quizzes = [
  {
    difficulty: "easy",
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "What is the capital of Nigeria?",
    options: ["A. Lagos", "B. Kano", "C. Abuja", "D. Ibadan"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "How many sides does a hexagon have?",
    options: ["A. Five", "B. Six", "C. Seven", "D. Eight"],
    answer: "B"
  },

  {

    difficulty: "easy",
    question: "How many days are in a week?",
    options: ["A. Five", "B. Six", "C. Seven", "D. Eight"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which animal is known as the King of the Jungle?",
    options: ["A. Tiger", "B. Lion", "C. Elephant", "D. Leopard"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "How many months are in a year?",
    options: ["A. Ten", "B. Eleven", "C. Twelve", "D. Thirteen"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which is the largest land animal?",
    options: ["A. Giraffe", "B. Elephant", "C. Rhino", "D. Hippo"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "What do bees produce?",
    options: ["A. Milk", "B. Honey", "C. Oil", "D. Juice"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "Which planet is closest to the Sun?",
    options: ["A. Earth", "B. Venus", "C. Mercury", "D. Mars"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "How many legs does a spider have?",
    options: ["A. Six", "B. Eight", "C. Ten", "D. Twelve"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "Which ocean is between Africa and Australia?",
    options: ["A. Atlantic", "B. Arctic", "C. Indian", "D. Pacific"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "What is the opposite of hot?",
    options: ["A. Warm", "B. Cold", "C. Dry", "D. Bright"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "Which instrument has black and white keys?",
    options: ["A. Guitar", "B. Drum", "C. Piano", "D. Flute"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "How many colours are traditionally listed in a rainbow?",
    options: ["A. Five", "B. Six", "C. Seven", "D. Eight"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which country is famous for the Eiffel Tower?",
    options: ["A. Italy", "B. France", "C. Spain", "D. Germany"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "What is the main language spoken in Brazil?",
    options: ["A. Spanish", "B. English", "C. Portuguese", "D. French"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which part of a plant absorbs water from the soil?",
    options: ["A. Leaves", "B. Flowers", "C. Roots", "D. Fruits"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "How many hours are in one day?",
    options: ["A. 12", "B. 18", "C. 24", "D. 30"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which bird can mimic human speech?",
    options: ["A. Eagle", "B. Parrot", "C. Penguin", "D. Ostrich"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "What is the freezing point of water in Celsius?",
    options: ["A. 0°C", "B. 10°C", "C. 50°C", "D. 100°C"],
    answer: "A"
  },
  {
    difficulty: "easy",
    question: "Which continent is Nigeria located in?",
    options: ["A. Asia", "B. Europe", "C. Africa", "D. South America"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which shape has three sides?",
    options: ["A. Square", "B. Triangle", "C. Circle", "D. Rectangle"],
    answer: "B"
  },
  {
    difficulty: "easy",
    question: "What is the natural source of daylight?",
    options: ["A. Moon", "B. Stars", "C. Sun", "D. Fire"],
    answer: "C"
  },
  {
    difficulty: "easy",
    question: "Which organ pumps blood around the body?",
    options: ["A. Brain", "B. Heart", "C. Lungs", "D. Stomach"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen", "D. Hydrogen"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Who wrote Romeo and Juliet?",
    options: ["A. Charles Dickens", "B. William Shakespeare", "C. Mark Twain", "D. Jane Austen"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the largest ocean on Earth?",
    options: ["A. Atlantic", "B. Indian", "C. Pacific", "D. Arctic"],
    answer: "C"
  },
  {

    difficulty: "medium",
    question: "What is the largest planet in our solar system?",
    options: ["A. Earth", "B. Saturn", "C. Jupiter", "D. Neptune"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which organ helps humans breathe?",
    options: ["A. Heart", "B. Lungs", "C. Liver", "D. Kidney"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the currency of Japan?",
    options: ["A. Yuan", "B. Won", "C. Yen", "D. Ringgit"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which blood cells help fight infections?",
    options: ["A. Red blood cells", "B. White blood cells", "C. Platelets", "D. Plasma"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Who painted the Mona Lisa?",
    options: ["A. Pablo Picasso", "B. Vincent van Gogh", "C. Leonardo da Vinci", "D. Claude Monet"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which gas makes up most of Earth's atmosphere?",
    options: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen", "D. Hydrogen"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "What is the hardest natural substance?",
    options: ["A. Gold", "B. Iron", "C. Diamond", "D. Quartz"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["A. China", "B. Brazil", "C. Japan", "D. Greece"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the process of changing liquid into gas called?",
    options: ["A. Freezing", "B. Melting", "C. Evaporation", "D. Condensation"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which is the smallest continent by land area?",
    options: ["A. Europe", "B. Australia", "C. Antarctica", "D. South America"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "How many bones are in the typical adult human body?",
    options: ["A. 106", "B. 206", "C. 306", "D. 406"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Which instrument measures temperature?",
    options: ["A. Barometer", "B. Thermometer", "C. Compass", "D. Hygrometer"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the capital of Canada?",
    options: ["A. Toronto", "B. Vancouver", "C. Ottawa", "D. Montreal"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which metal is liquid at ordinary room temperature?",
    options: ["A. Iron", "B. Mercury", "C. Copper", "D. Aluminium"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Which planet is famous for its prominent rings?",
    options: ["A. Mars", "B. Venus", "C. Saturn", "D. Mercury"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "What is the largest internal organ in the human body?",
    options: ["A. Heart", "B. Liver", "C. Brain", "D. Lung"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "Which country is home to the ancient city of Petra?",
    options: ["A. Egypt", "B. Jordan", "C. Greece", "D. Turkey"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the square root of 144?",
    options: ["A. 10", "B. 11", "C. 12", "D. 14"],
    answer: "C"
  },
  {
    difficulty: "medium",
    question: "Which ocean is the deepest?",
    options: ["A. Atlantic", "B. Indian", "C. Arctic", "D. Pacific"],
    answer: "D"
  },
  {
    difficulty: "medium",
    question: "Which scientist developed the theory of general relativity?",
    options: ["A. Isaac Newton", "B. Albert Einstein", "C. Galileo Galilei", "D. Marie Curie"],
    answer: "B"
  },
  {
    difficulty: "medium",
    question: "What is the name of the force that pulls objects toward Earth?",
    options: ["A. Friction", "B. Magnetism", "C. Gravity", "D. Pressure"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "What is the chemical symbol for tungsten?",
    options: ["A. T", "B. Tg", "C. W", "D. Tu"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Which scientist proposed the uncertainty principle?",
    options: ["A. Niels Bohr", "B. Werner Heisenberg", "C. Isaac Newton", "D. Albert Einstein"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the smallest prime number?",
    options: ["A. 0", "B. 1", "C. 2", "D. 3"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Which element has the atomic number 79?",
    options: ["A. Silver", "B. Gold", "C. Platinum", "D. Copper"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the SI unit of electric resistance?",
    options: ["A. Volt", "B. Ampere", "C. Ohm", "D. Watt"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Which planet has the shortest day?",
    options: ["A. Earth", "B. Jupiter", "C. Mars", "D. Venus"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "Who discovered penicillin?",
    options: ["A. Alexander Fleming", "B. Louis Pasteur", "C. Isaac Newton", "D. Robert Koch"],
    answer: "A"
  },
  {
    difficulty: "hard",
    question: "What is the chemical formula for ozone?",
    options: ["A. O2", "B. CO2", "C. O3", "D. H2O"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Which mathematician is associated with the incompleteness theorems?",
    options: ["A. Euclid", "B. Kurt Gödel", "C. Pythagoras", "D. Archimedes"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the approximate speed of light in a vacuum?",
    options: ["A. 300,000 km/s", "B. 150,000 km/s", "C. 30,000 km/s", "D. 3,000 km/s"],
    answer: "A"
  },
  {
    difficulty: "hard",
    question: "Which blood type is the universal red-cell donor?",
    options: ["A. AB positive", "B. A negative", "C. O negative", "D. B positive"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "What is the study of fungi called?",
    options: ["A. Botany", "B. Mycology", "C. Zoology", "D. Ecology"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "Which layer of Earth is liquid?",
    options: ["A. Inner core", "B. Crust", "C. Outer core", "D. Upper mantle"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Who wrote The Republic?",
    options: ["A. Aristotle", "B. Plato", "C. Socrates", "D. Homer"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the value of pi rounded to three decimal places?",
    options: ["A. 3.124", "B. 3.142", "C. 3.412", "D. 3.214"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "Which particle has a negative electric charge?",
    options: ["A. Proton", "B. Neutron", "C. Electron", "D. Photon"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "What is the capital of Kazakhstan?",
    options: ["A. Almaty", "B. Astana", "C. Tashkent", "D. Bishkek"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "Which scientist formulated the laws of planetary motion?",
    options: ["A. Johannes Kepler", "B. Galileo Galilei", "C. Michael Faraday", "D. James Watt"],
    answer: "A"
  },
  {
    difficulty: "hard",
    question: "What is the largest moon of Saturn?",
    options: ["A. Europa", "B. Titan", "C. Ganymede", "D. Io"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "Which element has the chemical symbol Sb?",
    options: ["A. Sodium", "B. Antimony", "C. Sulfur", "D. Tin"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
    options: ["A. Event horizon", "B. Asteroid belt", "C. Corona", "D. Photosphere"],
    answer: "A"
  },
  {
    difficulty: "hard",
    question: "Which treaty formally ended World War I between Germany and the Allied Powers?",
    options: ["A. Treaty of Paris", "B. Treaty of Versailles", "C. Treaty of Rome", "D. Treaty of Vienna"],
    answer: "B"
  },
  {
    difficulty: "hard",
    question: "What is the most abundant element in the universe?",
    options: ["A. Oxygen", "B. Carbon", "C. Hydrogen", "D. Helium"],
    answer: "C"
  },
  {
    difficulty: "hard",
    question: "Which branch of mathematics studies properties preserved under continuous deformation?",
    options: ["A. Algebra", "B. Topology", "C. Statistics", "D. Arithmetic"],
    answer: "B"
  }
];

const games = new Map();
const lastFirstQuestion = new Map();
const QUESTION_TIME_MS = 15000;

async function sendQuestion(chatId, game) {
  const q = game.questions[game.index];

  await game.announce(chatId,
    `🧠 QUESTION ${game.index + 1}/${game.questions.length}\n\n${q.question}\n\n${q.options.join("\n")}\n\nReply with .answer A, B, C or D.\n⏳ 15 seconds!`
  );

  clearTimeout(game.timer);
  game.timer = setTimeout(() => {
    nextTrivia(chatId).catch(console.error);
  }, QUESTION_TIME_MS);
}

async function startTrivia(chatId, announce, difficulty = "easy") {
  if (games.has(chatId)) return "A trivia game is already running.";

  const questions = quizzes.filter(q => q.difficulty === difficulty);
  if (!questions.length) return "Choose easy, medium or hard.";

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  if (questions.length > 1 &&
      questions[0].question === lastFirstQuestion.get(difficulty)) {
    [questions[0], questions[1]] = [questions[1], questions[0]];
  }

  lastFirstQuestion.set(difficulty, questions[0].question);

  const game = {
    difficulty,
    questions,
    index: 0,
    scores: new Map(),
    names: new Map(),
    answered: new Set(),
    announce,
    timer: null
  };

  games.set(chatId, game);
  await sendQuestion(chatId, game);

  return "🎮 Trivia started!";
}

function answerTrivia(chatId, playerId, answer, playerName = "Player") {
  const game = games.get(chatId);
  if (!game) return "No active trivia game.";

  const letter = answer.trim().toUpperCase();

  if (!["A", "B", "C", "D"].includes(letter)) {
    return "Choose A, B, C or D.";
  }

  if (game.answered.has(playerId)) {
    return "You've already answered this question.";
  }

  game.answered.add(playerId);
  game.names.set(playerId, playerName);

  if (letter === game.questions[game.index].answer) {
    game.scores.set(playerId, (game.scores.get(playerId) || 0) + 1);
    return "✅ Correct! You earned 1 point.";
  }

  return "❌ Wrong answer!";
}

async function nextTrivia(chatId) {
  const game = games.get(chatId);
  if (!game) return "No active trivia game.";

  clearTimeout(game.timer);

  const correct = game.questions[game.index].answer;
  await game.announce(chatId, `⏰ Time's up! Correct answer: ${correct}`);

  game.index++;
  game.answered.clear();

  if (game.index >= game.questions.length) {
    return stopTrivia(chatId, true);
  }

  await sendQuestion(chatId, game);
  return "Next question is ready!";
}

function getScores(chatId) {
  const game = games.get(chatId);
  if (!game) return "No active trivia game.";

  if (!game.scores.size) return "No points scored yet.";

  return [...game.scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => `${game.names.get(id) || "Player"}: ${score} ${score === 1 ? "point" : "points"}`)
    .join("\n");
}

async function stopTrivia(chatId, finished = false) {
  const game = games.get(chatId);
  if (!game) return "No active trivia game.";

  clearTimeout(game.timer);
  games.delete(chatId);

  const scores = [...game.scores.entries()]
    .sort((a, b) => b[1] - a[1]);

  let result = "🏁 TRIVIA FINISHED!\n";

  if (!scores.length) {
    result += "\nNobody scored any points.";
  } else {
    const highest = scores[0][1];
    const winners = scores.filter(([, score]) => score === highest);

    result += "\n" + scores.map(([id, score]) =>
      `${game.names.get(id) || "Player"}: ${score} ${score === 1 ? "point" : "points"}`
    ).join("\n");

    result += winners.length === 1
      ? `\n\n🏆 Winner: ${game.names.get(winners[0][0]) || "Player"}`
      : `\n\n🏆 It's a tie: ${winners.map(([id]) => game.names.get(id) || "Player").join(", ")}`;
  }

  await game.announce(chatId, result);
  return finished ? "Trivia completed." : "Trivia stopped.";
}

module.exports = {
  startTrivia,
  answerTrivia,
  nextTrivia,
  getScores,
  stopTrivia
};
