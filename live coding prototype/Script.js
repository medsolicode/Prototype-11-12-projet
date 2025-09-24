function alpha() {
let numbers = ["c1","c3","c2","c1","c8","c1" ]; //Array
let choisi = "c1"; //le code choisi a calculer
let counter = 0; 
for (let i = 0; i < numbers.length; i++)  {
    if (numbers[i] === choisi) {
        counter++  // ; counter= couter +1
    }
}
console.log("La valeur " + choisi + " = " + counter + " fois.");
}alpha();