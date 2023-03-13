// SOME, se usa para comprobar si alguno de los elementos de un array cumple una condición.
// Detiene la iteración cuando consigue el primer elemento que cumpla la condición.


const numbers = [1, 2, 'a', 3, 4];

// AL MENOS UNO DE LOS ELEMENTOS ES DE TIPO STRING.
let item = numbers.some((n, index) => {

	console.log(index);

	return typeof n === 'string';
});

console.log(item);