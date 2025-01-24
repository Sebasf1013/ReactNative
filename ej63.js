// Escribir un programa que acepta como ingreso un número que representa un año (por ejemplo 2000) y muestra como salida el nombre del campéon de ese año del fútbol argentino.
// Utilizar sólo los años (desde 2000 hasta el 2017)
// En caso de tener más de un campéon por año mostrar los distintos campeonatos en una sola variable
// Según el año seleccionado Entonces
// Mostrar el siguiente mensaje: En el año ${anio} salió campeón: ${campeon}
// SINO
// Mostrar un mensaje con el siguiente error: Por favor ingrese un año entre 2000 y 2017
// Datos
// 2000 (Clausura) River Plate (Apertura) Boca Juniors 2001 (Clausura) San Lorenzo de Almagro (Apertura) Racing Club 2002 (Clausura) River Plate (Apertura) Independiente 2003 (Clausura) River Plate (Apertura) Boca Juniors 2004 (Clausura) River Plate (Apertura) Newell´s Old Boys 2005 (Clausura) Vélez Sarsfield (Apertura) Boca Juniors 2006 (Clausura) Boca Juniors (Apertura) Estudiantes de La Plata 2007 (Clausura) San Lorenzo de Almagro (Apertura) Lanús 2008 (Clausura) River Plate (Apertura) Boca Juniors 2009 (Clausura) Vélez Sársfield (Apertura) Bánfield 2010 (Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata 2011 (Clausura) Vélez Sársfield (Apertura) Boca Juniors 2012 (Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield 2013 (Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro 2014 (Torneo Final) River Plate (Torneo Inicial) Racing Club 2015 (Campeonato de Primera División) Boca Juniors 2016 (Campeonato de Primera División) Lanús 2017 (Campeón del Campeonato de Primera División 2016/17) Boca Juniors

let anio =2015;
let campeon = null;
switch(anio){
    case 2000:
        campeon = "(Clausura) River Plate (Apertura) Boca Juniors";
        break;
    case 2001:
        campeon = "(Clausura) San Lorenzo de Almagro (Apertura) Racing Club";
        break;
    case 2002:
        campeon = "(Clausura) River Plate (Apertura) Independiente";
        break;
    case 2003:
        campeon = "(Clausura) River Plate (Apertura) Boca Juniors";
        break;
    case 2004:
        campeon = "(Clausura) River Plate (Apertura) Newell´s Old Boys";
        break;
    case 2005:
        campeon = "(Clausura) Vélez Sarsfield (Apertura) Boca Juniors";
        break;
    case 2006:
        campeon = "(Clausura) Boca Juniors (Apertura) Estudiantes de La Plata";
        break;
    case 2007:
        campeon = "(Clausura) San Lorenzo de Almagro (Apertura) Lanús";
        break;
    case 2008:
        campeon = "(Clausura) River Plate (Apertura) Boca Juniors";
        break;
    case 2009:
        campeon = "(Clausura) Vélez Sarsfield (Apertura) Banfield";
        break;
    case 2010:
        campeon = "(Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata";
        break;
    case 2011:
        campeon = "(Clausura) Vélez Sarsfield (Apertura) Boca Juniors";
        break;
    case 2012:
        campeon = "(Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield";
        break;
    case 2013:
        campeon =
      "(Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield (Torneo Inicial) San Lorenzo de Almagro";
        break;
    case 2014:
        campeon = "(Torneo Final) River Plate (Torneo Inicial) Racing Club";
        break;
    case 2015:
        campeon = "(Campeonato de Primera División) Boca Juniors";
        break;
    case 2016:
        campeon = "(Campeonato de Primera División) Lanús";
        break;
    case 2017:
        campeon = "(Campeón del Campeonato de Primera División 2016/17) Boca Juniors";
        break;
    default:
        campeon = null;
        break;
}
switch(campeon){
    case null:
        console.log("Por favor ingrese un año entre 2000 y 2017");
        break;
    default:
        console.log(`En el año ${anio} salio campeón: ${campeon}`);
        break;
}