// FILTER, se usa para filtrar elementos de un array que cumplan con una condición.
// Los elementos que cumplan con la condición serán parte del nuevo array generado.


// NUMEROS MAYORES O IGUALES A 5 Y MENORES O IGUALES A 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let item = numbers.filter(item => item >= 5 && item <= 10);

console.log(item); // [5, 6, 7, 8, 9, 10];