// INCLUDES, se usa para comprobar si existe un elemento específico dentro de un array.
// Devuelve un Booleano.
// Se usa también para Strings y para Objetos, pero se le debe pasar la referencia de dicho Objeto.


// CON ARRAY
const numbers = [50, 60, 70, 80, 90, 100];

let item = numbers.includes(80);
let item2 = numbers.includes(20);

console.log(item); // True
console.log(item2); // False


// CON STRING
const word = 'Developer';

let item3 = word.includes('o');
let item4 = word.includes('t');

console.log(item3); // True
console.log(item4); // Fals


// CON OBJETO