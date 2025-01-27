// Copiar y pegar el código del ejercicio ej73.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
let dibujo = "**************";
for(let i = 15; i > 0; i--){
    console.log(dibujo);
    dibujo = dibujo.slice(0, -1);
}
