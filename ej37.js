// Declarar las variables promedioParaAprobar y promedioDelAlumno
// Asignar a promedioParaAprobar el valor 6
// Asignar a promedioDelAlumno el valor 4
// Mostrar en consola los siguientes mensajes:
// El alumno tiene un promedio mayor o igual que el requerido: true/false
// Al alumno le faltaron ${puntos} para aprobar
let promedioParaAprobar = 6; 
let promedioDelAlumno = 4; 
let aprobo = promedioDelAlumno >= promedioParaAprobar; 
let puntos = promedioParaAprobar - promedioDelAlumno; 

console.log("El alumno tiene un promedio mayor o igual que el requerido:", aprobo); 
console.log(`Al alumno le faltaron ${puntos} para aprobar`);