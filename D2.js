/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono tre tipi di data principali che si distinguono in: 
 -Numeri,che possono essere di qualsiasi tipo(ES: 2, 4534, -3, 4.346, etc) in quanto java script è un linguaggio considerato di alto livello
 -Alfanumerici (Stringhe). Sono dati formati dall'insime di numeri e lettere (ES: ''mario'', ''Nome'', ''Nome1'', ''QWERTY'', etc)
 -Vero/falso (più precisamente dati booleani true/false) che dicono semplicemente se un risultato/una condizione è vera o non vera*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Luca";
console.log("Il mio nome è " +name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 4;
let num2 = 22;
let sum = num1 + num2;
console.log("la somma di " + num1 + " e " + num2 + " equivale a: " + sum);
//
let sum2 = 4+22;
console.log(sum2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;

console.log("la variabile x vale: "+ x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name = "Forma"
console.log(" 'name' : " + name);
const y = 5;
// y = 6; 
// se si ridichiara o si va a modificare il valore di y il programma si interrompe dando errore.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sub = x-4;
console.log("la sottrazione tra " +x+ " e 4 fa: "+ sub);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log("questi sono i due nome originali: " + name1 +" e "+ name2);
console.log("Questo è il risultato della comparazione diretta tra le due variabili: ");
console.log( name1 === name2);
console.log("Applico 'lowercase' alle variabili otterrò:");
console.log(name1 === name2.toLowerCase());
