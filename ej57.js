// Copiar el código del ej54.md
// Refactorizar el código y utilizar operador ternario en lugar de if/else

const usuario = 'pepe2017';
const password = '12345';

(usuario == 'pepe2017' && password == '12345') ? console.log("El usuario está autenticado y puede ver el contenido del sitio") : console.log("Error, no se pudo autenticar al usuario, puede intentarlo más tarde");

//Otra forma
if (usuario == 'pepe2017' && password == '12345'){
    console.log("El usuario está autenticado y puede ver el contenido del sitio");
}
else {
    console.log("Error, no se pudo autenticar al usuario, puede intentarlo más tarde");
}