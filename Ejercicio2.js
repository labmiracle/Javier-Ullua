function sum(arr,n) {
    if (n <= 0 || n > arr.length) {
        return "Parametros Incorrectos";
      }
    //Caso Base
    if (n===0) {
        return 0;
    }
    //Caso Recursivo
    else {
    return arr[n-1] + sum(arr,n-1);
    }
}

let ar = [1,2,3,4,5];

console.log(sum(ar,5));
