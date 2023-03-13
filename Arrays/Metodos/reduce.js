// REDUCE, se usa para reducir un arrary a un sólo valor.
// No devuelve otro array y tampoco modifica el array original.
// Recibe dos parámetros una función y el estado inicial de un acumulador.
// Si no se le pasa un estado inicial por defecto será el primer elemento del array
// La función recibe dos parámetros, el elemento a iterar y un acumulador.


const numbers = [0, 1, 2, 3, 4];

let item = numbers.reduce((elemento, acumulador) => {

	console.log({ elemento, acumulador });
	
	return acumulador + elemento;
});

console.log(item);