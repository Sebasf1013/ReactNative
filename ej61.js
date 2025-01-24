// Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día de la semana y se obtiene un mensaje como salida. En caso de ingresar un número que no sea válido mostrar un mensaje de error

// Declarar la variable dia y asignar un número del 1 al 7

// Declarar la variable nombreDelDia y asignar un valor null

// Versión SWITCH
// Según el día seleccionado Entonces
// asignar el nombre del día correspondiente al número en la variable nombreDelDia (ejemplo: si dia es 1 entonces nombreDelDia debería ser 'lunes')
// SINO
// Asignar el valor null en la variable nombreDelDía
// Si nombreDelDía no es null Entonces
// Mostrar el siguiente mensaje en consola: El día seleccionado es ${nombreDelDía}
// SINO
// Mostrar el siguiente mensaje en consola: Por favor seleccionar un número de 1 a 7
// Versión IF/ELSE/IF
// Escribir la misma funcionalidad pero utilizando la estructura de If's anidados. El resultado debe ser el mismo

// En ambos casos ingresar distintos números como valor de la variable dia y ver el resultado

var dia = 5; 
var nombreDelDia = null; 

//Version switch. 
//el día corresponde al nombre de la variable nombreDelDia
switch(dia){
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miercoles";
        break;
    case 4:
        nombreDelDia ="Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sabado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = null;
        break;
}

//En caso que los dias esten fuera del rango de nombreDelDia
switch(nombreDelDia){
    case null:
        console.log("Por favor seleccionar un numero de 1 a 7");
        break;
    default:
        console.log(`El dia seleccionado es ${nombreDelDia}`);
        break;
}


//Version if/else if/else
if(dia === 1){
    nombreDelDia = "Lunes";
}else if(dia === 2){
    nombreDelDia = "Martes";
}else if(dia === 3){
    nombreDelDia = "Miercoles";
}else if(dia === 4){
    nombreDelDia = "Jueves";
}else if(dia === 5){
    nombreDelDia = "Viernes";
}else if(dia === 6){
    nombreDelDia = "Sabado";
}else if(dia === 7){
    nombreDelDia = "Domingo";
}else{
    nombreDelDia = null;
}

//Si el dia seleccionado es diferente a nulo entonces muestra el nombre del dia
if(nombreDelDia !== null){
    console.log(`El dia seleccionado es ${nombreDelDia}`);
}else{ //Si es nulo muestra este mensaje
    console.log("Por favor seleccionar un numero de 1 a 7");
}
