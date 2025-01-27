// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
let f2 = 1;
let fib = 0;
for(let f1 = -1; f1 <= 10;){
    fib = f1 + f2;
    f1 = f2;
    f2 = fib;
    console.log(fib);
}