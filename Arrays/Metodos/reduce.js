// REDUCE, se usa para reducir un arrary a un sólo valor.
// No devuelve otro array y tampoco modifica el array original.
// Recibe dos parámetros una función y el estado inicial de un acumulador.
// Si no se le pasa un estado inicial por defecto será el primer elemento del array
// La función recibe dos parámetros, un acumulador y el elemento a iterar.


// SUMAR TODOS LOS NÚMEROS
const numbers = [0, 1, 2, 3, 4];

let item = numbers.reduce((acumulador, elemento) => {

	console.log({ acumulador, elemento });
	
	return acumulador + elemento;
});

console.log(item); /*
										{acumulador: 0, elemento: 1}
										{acumulador: 1, elemento: 2}
										{acumulador: 3, elemento: 3}
										{acumulador: 6, elemento: 4}
										10
									 */