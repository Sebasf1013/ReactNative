// Sumar los números pares del 0 al 10000
// Cortar la ejecución al encontrar 10 números pares
// Mostrar en consola el resultado de los números hasta el momento del corte

let suma = 0; 
let cont = 0; 
for(let i = 0; i <= 1000; i++) {
    if (i % 2 === 0){
        cont++;
        suma = suma + i ; 
        if (cont === 10){
            console.log("Se han encontrado 10 numeros pares"); 
            break; 
        }
    }   
}
console.log("la suma es:",suma);


