numbers = ["c1","c3","c2","c1","c8","c1" ]; //Array - مصفوفة
let choisi = "c1"; //le code choisi a calculer
let counter = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === choisi) {
        counter++  // ; counter= couter +1

    }
}
console.log("La valeur " + choisi + " apparaît " + counter + " fois.");
    
