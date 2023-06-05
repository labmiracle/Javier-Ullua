function camelize(str) {
    let palabras = str.split(' ');
    let fraseFinal = palabras[0].toLowerCase();
    for (let i = 1; i < palabras.length; i++){
        let palabra = palabras[i];
        fraseFinal += palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }
    return fraseFinal;
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');