// Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
// Podes leer más sobre esta secuencia en Wikipedia
// Acá podes encontrar una pequeña ayuda
let siguiente = -1;
let anterior = 1;
let fibonacci = 0;
while(siguiente <= 10){
    fibonacci = siguiente + anterior;
    siguiente = anterior;
    anterior = fibonacci;
    console.log(fibonacci);
}