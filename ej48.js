// Declarar la variable mensaje y asignar el siguiente valor: '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'
// Declarar la variable pi y obtener el valor 3.14 de la variable mensaje y transformarlo como número decimal
// Declarar la variable significadoDeLaVida y obtener el valor 42 de la variable mensaje y transformarlo como número entero
// Declarar la variable resultado y asignar el resultado de la suma de las variables pi y significadoDeLaVida
// Mostrar en consola el contenido de la variable resultado
// Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables pi y significadoDeLaVida, concatenando los valores. Utilizar el método toString para convertir los numbers a strings.

var mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
var pi = parseFloat(mensaje.slice(0,4)); //En numero decimal 
var significadoDeLaVida = parseInt(mensaje.substring(38, 40)); //En numero entero
var resultado = pi + significadoDeLaVida;
console.log(resultado); 
console.log(resultado.toString() + ' es el resultado de sumar las variables pi y significadoDeLaVida concatenando los valores.');
