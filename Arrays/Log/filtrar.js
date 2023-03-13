// FILTRAR VALORES ÚNICOS EN UN ARRAY.
const numbers = [2, 4, 6, 8, 2, 2, 4, 6];

let item = Array.from(new Set(numbers));;

console.log(item);


// FILTRAR NÚMEROS IMPARES Y MULTIPLICARLOS POR 2.
const numbers1 = [1, 2, 3, 4, 5, 6];

let item1 = numbers1.filter(n => n % 2 !== 0).map(n => n * 2);

console.log(item1);


// FILTRAR EL NÚMERO MAYOR EN UN ARRAY.
let item2 = Math.max(... numbers);

console.log(item2);