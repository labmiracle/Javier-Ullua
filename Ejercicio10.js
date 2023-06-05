function combineTwoArrays(arreglo1, arreglo2) {
  //retorna ambas concatenadas!
  return [...arreglo1, ...arreglo2];
}

let arreglo1 = [1,2,3];
let arreglo2 = [6,7,8];

console.log(combineTwoArrays(arreglo1,arreglo2));