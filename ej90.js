// Copiar y pegar el código del ejercicio ej70.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
let suma = 0;
for(let i = 0; i <= 1000; i++){
    if(i % 2 !== 0){
        suma += i;
    }else{ 
        continue;
    }
    console.log(`La suma hasta ${i} es: ${suma}`);
}