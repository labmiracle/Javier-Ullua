function palabraMasLarga(str) {
    // Divide la cadena en palabras
    const palabras = str.split(' ');
    
    // Encuentra la palabra más larga
    let palabraMasLarga = '';
    for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }
    }
    
    return palabraMasLarga;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');
console.log(palabraMasLarga('mi pequeña hija ya cumple un año'));

function primeraMayuscula(str) {
    //Divide la cadena
    const palabras = str.split(' ');

    //Convierte la primera letra de cada palabra a mayúscula
    const palabrasMayusculas = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    //Une las palabras en una cadena y la devuelve
    return palabrasMayusculas.join(' ');

}
console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');
console.log(primeraMayuscula('mi pequeña hija ya cumple un año.'));