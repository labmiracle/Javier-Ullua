function addOnlyNums() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            total += arguments[i];
        }
    }
    return total;
}

console.log(addOnlyNums(4,5,'hola',1,6));