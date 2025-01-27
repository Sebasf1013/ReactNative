// Mostrar en consola el siguiente dibujo utilizando la estructura while (desde 1 * hasta 13 * solo impares)
let numero = 1; 
let dibujo = ""; 
while (numero < 15){
    dibujo += "*"; 
    if (numero % 2 !== 0){
        console.log(dibujo);
    }
    numero++;
}