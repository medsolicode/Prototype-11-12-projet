
const items = [
  { question: "Maquetter une application", reponse: "C1" },
  { question: "Réaliser une interface utilisateur web statique et adaptable", reponse: "C2" },
  { question: "Développer une interface utilisateur web dynamique", reponse: "C3" },
  { question: "Créer une base de données", reponse: "C4" },
  { question: "Développer les composants d’accès aux données", reponse: "C5" },
  { question: "Accessibilité & bonnes pratiques", reponse: "C6" },
  { question: "Tests & débogage", reponse: "C7" },
  { question: "Optimisation des performances", reponse: "C8" }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let rounds = 0;
let pool = shuffle(items.slice());

console.log("Jeu : associe l'autoformation au code (C1..C8). Tape 'quit' pour quitter.");

function askNext() {
  if (pool.length === 0) pool = shuffle(items.slice());
  const idx = Math.floor(Math.random() * pool.length);
  const q = pool.splice(idx, 1)[0];

  rl.question(`Quel est le code pour : "${q.name}" ? `, (answerRaw) => {
    const answer = (answerRaw || "").trim().toUpperCase();
    if (answer === "QUIT") {
      console.log(`Tu as quitté. Score final : ${score} / ${rounds}`);
      rl.close();
      return;
    }
    rounds++;
    if (answer === q.code.toUpperCase()) {
      score++;
      console.log(`✅ Correct ! (${score}/${rounds})\n`);
    } else {
      console.log(`❌ Faux. Réponse : ${q.code} — Ton entrée : ${answer} (${score}/${rounds})\n`);
    }
    // boucle
    askNext();
  });
}

askNext();
