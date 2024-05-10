/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("--------------ESERCIZIO 1---------------");
const pets = ["dog", "cat", "hamster", "redfish"];

for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("--------------ESERCIZIO 2---------------");
console.log(pets);
const lista = pets.sort();
console.log(lista);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("--------------ESERCIZIO 3---------------");
console.log(pets);
const listaReverse = lista.reverse();
console.log(listaReverse);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("--------------ESERCIZIO 4---------------");
console.log(pets);
const daPrimo = pets.splice(0, 1);
console.log(daPrimo);
const aUltimo = pets.push(daPrimo[0]);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("--------------ESERCIZIO 5---------------");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = "DW299JL";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("--------------ESERCIZIO 6---------------");
let newCar = [
  {
    brand: "Toyota",
    model: "Supra",
    color: "black",
    trims: ["Brum", "Expensive", "StyleLife"],
  },
];
cars.push(newCar[0]);
for (let index = 0; index < cars.length; index++) {
  delete cars[index].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("--------------ESERCIZIO 7---------------");
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  const trimsCurrent = cars[index].trims.splice(0, 1)[0];
  justTrims.push(trimsCurrent);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("--------------ESERCIZIO 8---------------");

for (let index = 0; index < cars.length; index++) {
  console.log(
    "il colore della macchina è " +
      cars[index].color +
      " ed il rumorer che fa è "
  );
  if (cars[index].color.startsWith("b", 0) === true) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("--------------ESERCIZIO 9---------------");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let n = 0;
while (n < 14) {
  console.log(numericArray[n]);
  n++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("--------------ESERCIZIO 10---------------");
const charactersArray = ["g", "n", "u", "z", "d"];
for (let index = 0; index < charactersArray.length; index++) {
  switch (true) {
    case charactersArray[index] === "a":
      charactersArray[index] = 1;
      break;
    case charactersArray[index] === "b":
      charactersArray[index] = 2;
      break;
    case charactersArray[index] === "c":
      charactersArray[index] = 3;
      break;
    case charactersArray[index] === "d":
      charactersArray[index] = 4;
      break;
    case charactersArray[index] === "e":
      charactersArray[index] = 5;
      break;
    case charactersArray[index] === "f":
      charactersArray[index] = 6;
      break;
    case charactersArray[index] === "g":
      charactersArray[index] = 7;
      break;
    case charactersArray[index] === "h":
      charactersArray[index] = 8;
      break;
    case charactersArray[index] === "i":
      charactersArray[index] = 9;
      break;
    case charactersArray[index] === "l":
      charactersArray[index] = 10;
      break;
    case charactersArray[index] === "m":
      charactersArray[index] = 11;
      break;
    case charactersArray[index] === "n":
      charactersArray[index] = 12;
      break;
    case charactersArray[index] === "o":
      charactersArray[index] = 13;
      break;
    case charactersArray[index] === "p":
      charactersArray[index] = 14;
      break;
    case charactersArray[index] === "q":
      charactersArray[index] = 15;
      break;
    case charactersArray[index] === "r":
      charactersArray[index] = 16;
      break;
    case charactersArray[index] === "s":
      charactersArray[index] = 17;
      break;
    case charactersArray[index] === "t":
      charactersArray[index] = 18;
      break;
    case charactersArray[index] === "u":
      charactersArray[index] = 19;
      break;
    case charactersArray[index] === "v":
      charactersArray[index] = 20;
      break;
    default:
      charactersArray[index] = 21;
      break;

      break;
  }
}
console.log(charactersArray);
