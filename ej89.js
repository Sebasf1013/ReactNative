// Copiar y pegar el código del ejercicio ej69.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
let suma = 0;
for(let i = 0; i < 1000; i++){
    suma += i;
    console.log(`La suma hasta ${i} es: ${suma}`);
}