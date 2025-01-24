// Declarar la variable alumnos y asignar el siguiente texto: Matías, Germán, Nicolás, Silvia, Estefi, Patricia, Ramóm
// Asignar a la variable alumnos el resultado de ejecutar el método split sobre la variable alumnos
// Mostrar por consola el contenido de la variable alumnos

var alumnos = "Matías, Germán, Nicolás, Silvia, Estefi, Patricia, Ramón";
alumnos = alumnos.split(", ");

//Con split divido una cadena de texto en un arreglo
console.log(alumnos);