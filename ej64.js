// Declarar una variable nombre y asignar el valor null
// Si nombre tiene algún valor entonces
// Mostrar un mensaje en la consola: El nombre del usuario es ${nombre}
// SINO
// Mostrar un mensaje de error en la consola: Por favor ingrese un nombre
// Cambiar el valor de la variable nombre con tu nombre y volver a ejecutar el programa a ver que pasa
var nombre = null; 
if(nombre){
    console.log(`El nombre del usuario es ${nombre}`);
}else{
    console.log("Por favor ingrese un nombre");
}