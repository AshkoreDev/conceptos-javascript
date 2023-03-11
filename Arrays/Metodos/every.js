// EVERY, se usa para comprobar que todos los elementos de un array cumplen una condición.
// Devuelve un Booleano.
// Detiene la iteración cuando consigue un elemento que no cumpla la condición.

const numbers = [1, 2, 3, 4];

// TODOS LOS ELEMENTOS SEAN DE TIPO NUMBER.
let item = numbers.every((number, index) => {

	console.log(index);

	return typeof number === 'number';
});

console.log(item);