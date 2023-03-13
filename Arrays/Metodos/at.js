// AT, se usa para acceder a los elementos de un array.
// Recibe como parámetro el índice al que se quiere acceder, se le pueden pasar números negativo.
// Sirve también para acceder a los elementos de un String.


// NÚMEROS POSITIVOS
const numbers = [1, 20, 45, 60];

let number = numbers.at(2); // Acceder al elemento 3.

console.log(number);


// NÚMEROS NEGATIVOS
const words = ['Apple', 'Orange', 'Potato', 'Onion'];

let word = words.at(-1); // Acceder al último elemento.

console.log(word);


// STRINGS
console.log('JavaScript'.at(4)); // Acceder a la letra S.