// Crear una función con el nombre ordenarNúmeros que acepte tres parámetros numéricos llamados numero1, numero2 y numero3
// Dentro de la función ordenar los números de menor a mayor
// Ejecutar la función con los siguientes parámetros: 10, 8, 25
// Mostrar en consola el siguiente resultado: 8, 10, 25
// Agregar un último parámetro que acepte un tipo de dato boolean llamado descendente
// En caso de que el parámetro descendente sea verdadero mostrar en consola el siguiente mensaje: 25, 10, 8
// Ejecutar la función agregando true cómo último parámetro en el llamado de la función, ejemplo: ordenarNúmeros(10, 8, 25, true)

function ordenarNúmeros(numero1,numero2,numero3,ascendente){
    let numeros = [numero1,numero2,numero3];
    if (ascendente){
        numeros.sort((a,b) => a - b);
        console.log(numeros);
    }
    else { //Los organiza de forma descendente
        numeros.sort((a,b) => b - a);
        console.log(numeros);
    }
}
ordenarNúmeros(5,15,2,false);


//Otra manera pero solo descendente
function ordenarNúmeros1(numero1, numero2, numero3){ //Los organiza de mayor a menor solamente
    if (numero1 > numero2 && numero1 > numero3) {
        console.log(numero1, "es el mayor de todos")
        if (numero2 > numero3){
            console.log(numero1,numero2,numero3);
        }
        else {
            console.log(numero1,numero3,numero2);
        }

    }
    else if (numero2 > numero1 && numero2 > numero3){
        console.log(numero2, "es el mayor de todos")
        if (numero1 > numero3){
            console.log(numero2,numero1,numero3);
        }
        else {
            console.log(numero2,numero3,numero1);
        }
    }
    else if (numero3 > numero1 && numero3 > numero2){
        console.log(numero3, "es el mayor de todos")
        if (numero1 > numero2){
            console.log(numero3,numero1,numero2);
        }
        else {
            console.log(numero3,numero2,numero1);
        }
    }
}

ordenarNúmeros(2,15,13);