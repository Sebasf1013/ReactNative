// Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while
numero = 9; 
tabla = 1; 
console.log("Tabla de multiplicación del 9")
while (tabla <= 10){
    multi= numero * tabla;
    console.log(numero, "*", tabla, "=", multi);
    tabla++;
}