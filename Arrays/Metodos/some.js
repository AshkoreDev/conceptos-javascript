// SOME, se usa para comprobar si alguno de los elementos de un array cumple una condición.
// Detiene la iteración cuando consigue el primer elemento que cumpla la condición.


// AL MENOS UNO DE LOS ELEMENTOS ES DE TIPO STRING
const numbers = [1, 2, 'a', 3, 4];

let item = numbers.some((n, index) => {

	console.log('index', index);

	return typeof n === 'string';
});

console.log(item); /* index 0
										  index 1
										  index 2
											true
									 */