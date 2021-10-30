// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// -----------------------------------------------------

// l'utente sceglie pari o dispari (boolean)
let userChoice = prompt("Pari o dispari?");
// trasforma la stringa in minuscolo per poi paragonarla anche in caso l'utente la scriva in maiuscolo
userChoice = userChoice.toLowerCase();

console.log("Il giocatore ha scelto " + userChoice);

let userEven = false;
if (userChoice == "pari") {
    userEven = true
}

console.log(userEven);

// l'utente sceglie un numero tra 1 e 5 compresi
let userNum = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log("L'utente ha il numero " + userNum);

// il computer genera il numero che va a competere con l'utente
let cpuNum = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha il numero " + cpuNum);

// si sommano i due numeri 
const numSum = userNum + cpuNum;
console.log("La somma dei due numeri è " + numSum);

// stabiliamo se la somma dei due numeri è pari o dispari (x % 2 == 0)
let sumEven = false;
if (numSum % 2 == 0) {
    sumEven = true;
}
console.log(sumEven);

// stampiamo chi ha vinto a seconda della scelta iniziale dell'utente
let playerWin = false;
if (userEven == true && sumEven == true) {
    playerWin = true;
} else if (userEven == false && sumEven == false) {
    playerWin = true;
}

if (playerWin == true) {
    console.log('Ha vinto il giocatore.');
} else {
    console.log('Ha vinto il computer.');
}