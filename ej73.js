// Mostrar en consola el siguiente dibujo utilizando la estructura while (al reves que el ej.72)
let numero = 15; 
let dibujo = "**************"; 
while (numero >= 1){
    console.log(dibujo); 
    dibujo = dibujo.slice(0, -1);
    numero--;
}