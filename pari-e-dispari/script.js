// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// -----------------------------------------------------

// // l'utente sceglie pari o dispari (boolean)
// let userChoice = prompt("Pari o dispari?");
// // trasforma la stringa in minuscolo per poi paragonarla anche in caso l'utente la scriva in maiuscolo
// userChoice = userChoice.toLowerCase();

// console.log("Il giocatore ha scelto " + userChoice);

// let userEven = false;
// if (userChoice == "pari") {
//     userEven = true
// }

// console.log(userEven);

// // l'utente sceglie un numero tra 1 e 5 compresi
// let userNum = parseInt(prompt("Scegli un numero tra 1 e 5"));
// console.log("L'utente ha il numero " + userNum);

// // il computer genera il numero che va a competere con l'utente
// let cpuNum = Math.floor(Math.random() * 5) + 1;
// console.log("Il computer ha il numero " + cpuNum);

// // si sommano i due numeri 
// const numSum = userNum + cpuNum;
// console.log("La somma dei due numeri è " + numSum);

// // stabiliamo se la somma dei due numeri è pari o dispari (x % 2 == 0)
// let sumEven = false;
// if (numSum % 2 == 0) {
//     sumEven = true;
// }
// console.log(sumEven);

// // stampiamo chi ha vinto a seconda della scelta iniziale dell'utente
// let playerWin = false;
// if (userEven == true && sumEven == true) {
//     playerWin = true;
// } else if (userEven == false && sumEven == false) {
//     playerWin = true;
// }

// if (playerWin == true) {
//     console.log('Ha vinto il giocatore.');
// } else {
//     console.log('Ha vinto il computer.');
// }

// -----------------------------------------------------

// function pariDispari() {
//     // let userChoice = prompt("Pari o dispari?");
//         userChoice = userChoice.toLowerCase();
//         console.log("Il giocatore ha scelto " + userChoice);

//     let userEven = false;
//         if (userChoice == "pari") {
//             userEven = true
//         }
//         console.log(userEven);

//     // let userNum = parseInt(prompt("Scegli un numero tra 1 e 5"));
//         console.log("L'utente ha il numero " + userNum);

//     let cpuNum = Math.floor(Math.random() * 5) + 1;
//         console.log("Il computer ha il numero " + cpuNum);

//     const numSum = userNum + cpuNum;
//         console.log("La somma dei due numeri è " + numSum);

//     let sumEven = false;
//         if (numSum % 2 == 0) {
//             sumEven = true;
//         }
//         console.log(sumEven);

//     if (userEven == true && sumEven == true) {
//         console.log('Ha vinto il giocatore.');
//     } else if (userEven == false && sumEven == false) {
//         console.log('Ha vinto il giocatore.');
//     } else {
//         console.log('Ha vinto il computer.');
//     }
// }

// pariDispari();

// -----------------------------------------------------

// dichiarazione della funzione
function pariDispari() {

    //il giocatore inserisce il valore dell'input che viene salvato
    let userChoice = document.getElementById("evenInput").value;
    // la stringa viene trasformata in minuscolo per il controllo 
    userChoice = userChoice.toLowerCase();
    console.log("Il giocatore ha scelto " + userChoice);
    
    // avviene il controllo della stringa per assegnare il valore boolean 
    let userEven = false;
    if (userChoice == "pari") {
        userEven = true;
    } else if (userChoice == "dispari") {
        userEven = false;
    }
    console.log(userEven);
    
    // il giocatore inserisce il numero scelto nell'input
    let userNum = parseInt(document.getElementById("numberInput").value);
    console.log("L'utente ha il numero " + userNum);

        // aggiungere messaggio di errore se non vengono inseriti i dati necessari e corretti
        // non la classe per nascondere il div con i risultati
            /*
            let resusltCont = document.getElementById("results");
            let errorCont = document.getElementById("error");
            if (userChoice == "" || userEven == "") {
                resusltCont.classList.add("hidden");
                errorCont.innerHTML = `<h3>Devi prendere una decisione.</h3>`
            } else {
                resusltCont.classList.remove("hidden");
            }
            if (userNum > 5 || userNum < 1) {
                resusltCont.classList.add("hidden");
                errorCont.innerHTML = `<h3>Il numero inserito non è valido</h3>`
            } else {
                resusltCont.classList.remove("hidden");
            }
            */

    // il computer genera un numero
    let cpuNum = Math.floor(Math.random() * 5) + 1;
    console.log("Il computer ha il numero " + cpuNum);
    let cpuOut = document.getElementById("cpuNumOut");
    cpuOut.innerHTML = `Il computer ha il numero ${cpuNum}`
    
    // i due numeri vengono sommati
    const numSum = userNum + cpuNum;
    console.log("La somma dei due numeri è " + numSum);
    let sumOut = document.getElementById("sumOut");
    sumOut.innerHTML = `La somma dei due numeri è ${numSum}`
    
    // viene controllato se la somma è pari o dispari 
    let sumEven = false;
    if (numSum % 2 == 0) {
        sumEven = true;
    }
    console.log(sumEven);
    
    // stampa del risultato
    let winnerOut = document.getElementById("winnOut");
    if (userEven == true && sumEven == true) {
        console.log('Ha vinto il giocatore.');
        winnerOut.innerHTML = `Ha vinto il giocatore.`;
    } else if (userEven == false && sumEven == false) {
        console.log('Ha vinto il giocatore.');
        winnerOut.innerHTML = `Ha vinto il giocatore.`;
    } else {
        console.log('Ha vinto il computer.');
        winnerOut.innerHTML = `Ha vinto il computer.`;
    }
}


// la funzione viene chiamata al click 
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", 
        function() {
            pariDispari();
        }
    );


