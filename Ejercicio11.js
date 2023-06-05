function onlyUnique(...arreglos) {
    return [...new Set(arreglos)];
  }

  console.log(onlyUnique(1,2,3,3,4,5,5,'tomate'));