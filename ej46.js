// Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'pepito2017,12345'
// Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (pepito2017)
// Declarar la variable password y utilizar el método substr para obtener el password (12345)
// Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password

var usuarioYPassword = "pepito2017,12345";
var nombreDeUsuario = usuarioYPassword.substring(0,10); 
var password = usuarioYPassword.substring(11);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);

//Otra forma 
var nombreDeUsuario1 = usuarioYPassword.slice(0, 10);
var password1 = usuarioYPassword.slice(11);
console.log(`El usuario ${nombreDeUsuario1} tiene ${password1} como password`);