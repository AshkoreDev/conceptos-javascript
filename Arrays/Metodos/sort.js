// SORT, se usa para ordenar los elementos de un array. 
// Es un método mutable, cambiará el orden del array original. 
// Se le debe pasar el indicador de cómo se debe filtrar (ascendente o descendente). 

// < 0 => A es menor que B
// 	 0 => A y B podrían ser iguales
// > 0 => B es mayor que A


const numbers = [30, 80, 20, 46, 62, 88, 10];

// ORDENAR DE FORMA ALEATORIA
let item = numbers.sort((a, b) => Math.random() - 0.5);

console.log('item', item);


// ORDENAR ASCENDENTE
let item1 = numbers.sort((a, b) => a - b);

console.log('item1', item1);


// ORDENAR DESCENDENTE
let item2 = numbers.sort((a, b) => b - a);

console.log('item2', item2);