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

/* SCRIVI QUI LA TUA RISPOSTA */
/*In progrmmazione con la parola " Tipizzazione" andiamo ad indicare che dobbiamo dare regole differenti ad ogni tipo di dato utilizzato nel codice
La tipizzazione può essere Diamica o Statica. 
Variabile Statica rimane strettamente legata al tipo di valore assegnato 
Variabile Dinamica ovvero nel corso della programmazione possiamo variare il dato asseganto 
Dato Stringa crea sequenza parole 
Dato Numerico inserisce in numeri
Dato Booleano vero e falso*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Luca";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
console.log(num1 + num2);

/* ESERCIZIO 4 Crea una variable di nome "y" e assegna ad essa il numero 12.*/
/*
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 12;
console.log(y);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "luca";

//const dimostroChe = "la variabile Const non può essere riasseganta";
/*dimostroChe = "Non si può modificare";
console.log(dimostroChe); //Assignment to constant variable

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x - 4);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name4 = "john";
let name5 = "John";
console.log(name4 === name5);
console.log(name4.toLowerCase() === name5.toLocaleLowerCase());
