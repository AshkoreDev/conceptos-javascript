// SORT, 
// < 0 => A es menor que B.
// 	 0 => A y B podrían ser iguales.
// > 0 => B es mayor que A.


const numbers = [2, 4, 6, 8, 10];

// ORDENAR DE FORMA ALEATORIA.
let item = numbers.sort((a, b) => Math.random() - 0.5);
console.log('item', item);
