// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// -----------------------------------------------------

// inserire una parola e salvarla (variabile prompt)
// let parola = userWord('Inserisci una parola.');

// capire se la parola è palindroma

// invertire la parola per confrontarla (??)
// let reversed = '';
// for ( let i = userWord.length -1; i >= 0; i--) {
//     reversed += userWord[i];
// }
// console.log(reversed);

// // se le parole coincidono la parola è palindroma
// // stampare se la parola è palindoma o meno 

// if (userWord == reversed) {
//     console.log('La parola è palindroma. ');
// } else {
//     console.log('La parola NON è palindroma');
// }

// -----------------------------------------------------

// inserire una parola e salvarla (variabile prompt)
let parola = prompt('Inserisci una parola.');

// dichiarare la funzione per controllare il palindromo
// creo la booleana di controllo 
let check = false;
function reverseWord(userWord) {
    // invertire la parola per confrontarla
    let reversed = '';
    for ( let i = userWord.length -1; i >= 0; i--) {
        reversed += userWord[i];
    }
    console.log(reversed);
    // // se le parole coincidono la parola è palindroma
    // // stampare se la parola è palindoma o meno 
    if (userWord == reversed) {
        // cambio la booleana
        check = true;
    } else {
        check = false;
    }
}

// richiamare la funzione
reverseWord(parola);

if (check == true) {
    console.log('La tua parola è palindroma');
} else {
    console.log('La tua parola NON è palindroma');
}

