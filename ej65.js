// Declarar una variable saldo y asignar el valor 0
// Si saldo y saldo mayor que 0 Entonces
// Mostrar un mensaje en la consola: El usuario tiene ${saldo} pesos a favor
// SINO
// Mostrar un mensaje de error en la consola: El usuario no tiene saldo a favor
// Cambiar el valor de la variable saldo con un número mayor a 0 y volver a ejecutar el programa a ver que pasa

let saldo = 10;
if(saldo > 0){
    console.log(`El usuario tiene ${saldo} pesos a favor`);
}else{
    console.log("El usuario no tiene saldo a favor");
}