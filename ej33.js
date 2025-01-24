// Declarar la cariable cantidadDeUsuarios y asignar el valor 100
// Incrementar la cantidad de usuarios en 5
// Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
// Se dieron de baja 3 usuarios
// Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
// Compramos una empresa y los usuarios se duplicaron
// Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
// Sabemos que el 50% de los usuarios son mujeres y el otro 50% son varones, Dividir la cantidad de usuarios en 2 para saber cuántos hombres y mujeres hay de cada género
// Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios

const cantidadDeUsuarios = 100; 
cantidadDeUsuarios1 = cantidadDeUsuarios + 5; 
console.log("Cantidad de Usuarios:", cantidadDeUsuarios1);
cantidadDeUsuarios2 = cantidadDeUsuarios1 - 5; 
console.log("Cantidad de Usuarios:", cantidadDeUsuarios2);
cantidadDeUsuarios3 = cantidadDeUsuarios2 * 2; 
console.log("Cantidad de Usuarios:", cantidadDeUsuarios3);
let hombres = cantidadDeUsuarios3 / 2;
let mujeres = cantidadDeUsuarios3 / 2;
console.log(`Cantidad de usuarios: ${cantidadDeUsuarios3} mujeres ${mujeres} y ${hombres}`);

