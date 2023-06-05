 function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada){
    
    if (Number.isInteger(velocidadCrecimiento) && (velocidadCrecimiento > 0) &&
    Number.isInteger(velocidadDecrecimiento) && (velocidadDecrecimiento >= 0) &&
    Number.isInteger(alturaDeseada) && (alturaDeseada > 0) && (velocidadCrecimiento > velocidadDecrecimiento)) {

    let Dias = 0;
    let alturaActual = 0;
    
    while(alturaActual < alturaDeseada){   
        Dias++;
        alturaActual += velocidadCrecimiento;
        if (alturaActual >= alturaDeseada) {
            break;
        }
        alturaActual -= velocidadDecrecimiento;
    }
    return Dias;
    } else {
        return "Error en los parametros";
    }  
}

console.log(calcularDiasCrecimiento(3,2,8));