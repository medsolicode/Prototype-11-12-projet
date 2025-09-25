function alpha() {
  let element = [];
//les élements
  element[0] = "c1";
  element[1] = "c3";
  element[2] = "c2";
  element[3] = "c1";
  element[4] = "c8";
  element[5] = "c1";
  let choisi = "c1"; 
  let counter = 0; 
  for (let i = 0; i < element.length; i++)  {
    if (element[i] === choisi) {
    counter = counter + 1;
    }
  }
  console.log("L'element " + choisi + " = " + counter + " fois.");
}
alpha();