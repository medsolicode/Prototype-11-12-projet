// Simple educational game: match training name with code (C1..C8)

// 1. Data
const trainings = [
  { name: "Question 1", code: "C1" },
  { name: "Question 2", code: "C2" },
  { name: "Question 3", code: "C3" },
  { name: "Question 4", code: "C4" },
  { name: "Question 5", code: "C5" },
  { name: "Question 6", code: "C6" },
  { name: "Question 7", code: "C7" },
  { name: "Question 9", code: "C8" }
];

let score = 0;
let rounds = 0;

// 2. Pick a random training
function randomTraining() {
  const i = Math.floor(Math.random() * trainings.length);
  return trainings[i];
}

// 3. Ask one question
function askOne() {
  const t = randomTraining();
  const answer = prompt("Which code (C1..C8) for: " + t.name + " ?\n(Type quit to stop)");

  if (answer === null || answer.toLowerCase() === "quit") {
    alert("Game over. Final score: " + score + " / " + rounds);
    return false; // stop game
  }

  rounds++;
  if (answer.toUpperCase() === t.code) {
    score++;
    alert("✅ Correct! Score: " + score + " / " + rounds);
  } else {
    alert("❌ Wrong. Correct was: " + t.code + "\nScore: " + score + " / " + rounds);
  }
  return true; // continue
}

// 4. Main game loop
function play() {
  alert("Welcome! Try to match the training with the right code.\nType 'quit' to stop.");
  while (askOne()) {
    // loop until player quits
  }
}

play(); // start the game