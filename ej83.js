// Copiar y pegar el código del ejercicio ej73.js
// Refactorizar el código utilizando la estructura do/while en lugar de while

let numero = 15;
let dibujo = "**************";
do{
    console.log(dibujo);
    dibujo = dibujo.slice(0, -1);
    numero--;
}while(numero > 0);