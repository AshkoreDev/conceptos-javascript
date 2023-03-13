// FLAT, se usa para aplanar un array, cuando existen uno o varios arrays anidados, eliminandolos y dejando un solo nivel del array.
// Sólo consume un nivel por defecto, pero se le puede pasar el número de niveles a aplanar.
// Se puede usar INFINITY para que aplane cualquier nivel.


// UN SÓLO NIVEL
const numbers = [1, 2, 3, [4, 5]];

let item = numbers.flat();

console.log(item); // [1, 2, 3, 4, 5]


// 3 NIVELES
const numbers1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

let item1 = numbers1.flat(3);

console.log(item1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]