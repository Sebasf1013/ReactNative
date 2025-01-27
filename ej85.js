// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura do/while en lugar de while

let siguiente = -1;
let anterior = 1;
let fibonacci = 0;
do{
    fibonacci = siguiente + anterior;
    siguiente = anterior;
    anterior = fibonacci;
    console.log(fibonacci);
}while(siguiente <= 10);