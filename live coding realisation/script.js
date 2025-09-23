const qr = [
  { name: "Question 1", code: "C1" },
  { name: "Question 2", code: "C2" },
  { name: "Question 3", code: "C3" },
  { name: "Question 4", code: "C4" },
  { name: "Question 5", code: "C5" },
  { name: "Question 6", code: "C6" },
  { name: "Question 7", code: "C7" },
  { name: "Question 8", code: "C8" }
];

let score = 0;
let counter = 0;

alert("Bienvenue ! Réponds avec le bon code (C1..C8). Clique Annuler pour quitter.");

for (let i = 0; i < qr.length; i++) {
  const q = qr[i];
  const reponse = prompt("Quel est le code pour : " + q.name + " ?");

  if (reponse === null) {
    console.log("Fin du jeu ! Score final : " + score + " / " + counter);
    break;
  }

  counter++;

  if (reponse.toUpperCase() === q.code.toUpperCase()) {
    score++;
    console.log("✅ Correct ! " + q.name + " → " + q.code);
  } else {
    console.log("❌ Faux ! La bonne réponse était : " + q.code);
  }
} 

// 👉 afficher le score après chaque question
console.log("📊 Score actuel : " + score + " / " + counter);
