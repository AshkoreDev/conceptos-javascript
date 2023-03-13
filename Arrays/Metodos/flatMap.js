// FLATMAP, se usa para combinar las funcionalidades de Flat y de Map.
// Primero transforma el array y luego aplana el resultado.


// FILTRAR LOS IMPARES Y MULTIPLICARLOS POR 2.
const numbers = [1, 2, 3, 4, 5, 6];

let item = numbers.flatMap(n => n % 2 == 0 ? [] : n * 2);

console.log(item);