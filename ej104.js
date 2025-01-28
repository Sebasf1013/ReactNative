// Declarar la variable fibonacci y asignar una función como valor
// La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
// Ejecutar esta función 3 veces

let fibonacci = function(){
    let siguiente = -1;
    let anterior = 1; 
    let fibonacci = 0; 
    while (siguiente <= 10){
        fibonacci = siguiente + anterior;
        siguiente = anterior;
        anterior = fibonacci;
        console.log(fibonacci);
    }
}

fibonacci();
fibonacci();
fibonacci();