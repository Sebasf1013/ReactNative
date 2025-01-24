// Declarar la variable texto y asignar el siguiente valor: HOLA
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
// Mostrar en consola el contenido de la variable resultado en minúscula
// Deberías ver como resultado la palabra aloh

const texto ="HOLA";
let resultado = texto.charAt(texto.length -1) + texto.charAt(texto.length -2) + texto.charAt(texto.length -3) + texto.charAt(texto.length -4);
console.log(resultado.toLowerCase());