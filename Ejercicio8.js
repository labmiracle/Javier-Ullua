function suma(...argumentos) {
    let total = 0;
    argumentos.map((numero)=>{
        total += numero;
    })
    return total;
}

console.log(suma(1,2,3,4,5));