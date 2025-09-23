numbers = ["c1","c3","c2","c1","c8","c1" ];
let choisi = "c1"; 
let counter = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === choisi) {
        counter++;

    }
}
console.log("Le code " + choisi + " apparaît " + counter + " fois.");
    
