// Copiar y pegar el código del ejercicio ej69.js
// Refactorizar el código utilizando la estructura do/while en lugar de while

let suma = 0;
let numero = 0;
do{
    suma += numero;
    numero++;
    console.log(`La suma hasta ${numero} es: ${suma}`);
}while(numero < 1000);