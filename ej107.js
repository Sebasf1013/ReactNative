// Crear una función con el nombre numeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2
// Ejecutar la función pasando 2 números como parámetros
// Mostrar en consola el siguiente mensaje: El número ${numero1} es más grande que ${numero2}
// Agregar la validación para ver si son el mismo número, en caso de que así sea agregar el mensaje: Los dos números son ${numero1}
// Validar que los parámetros que nos pasaron sean del tipo number, caso contrario mostrar un mensaje en consola que diga: Esta función espera valores del tipo number

function numeroMasGrande(numero1, numero2){
    if (typeof numero1 !== "number" || typeof numero2 !== "number"){
        console.log("Esta funcion espera valores de ripo numerico");
    }
    else {
        if (numero1 > numero2){
            console.log("El", numero1, "es mas grande que", numero2); 
        }
        else if (numero1 < numero2){
            console.log("El", numero2, "es mas grande que", numero1); 
        }
        else {
            console.log("Los dos numeros son", numero1);
        }
    }
}
numeroMasGrande(3, 3);