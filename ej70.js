// Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

let numero = 0; 
let numero1 = 0; 
while (numero <= 10){
    numero++;
    if (numero % 2 !== 0) {
        numero1 = numero + numero1;
    }
    else {
        continue;
    }
    console.log("La suma es:", numero1, "para:", numero);
}

// let numero = 0;
// let suma = 0;
// while(numero < 10){
//     numero++;
//     if(numero % 2 !== 0){
//         suma += numero;
//     }else{ 
//         continue;
//     }
//     console.log(`La suma hasta ${numero} es: ${suma}`);
// }