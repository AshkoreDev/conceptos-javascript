// MAP, se usa para recorrer un array y realizar una operación con cada elemento del mismo.
// No modifica el array original, sino que crea uno nuevo con los resultados del map.


const cars = [
	{ id: 0,
		color: 'blue',
		year: 2006
	},
	{ id: 1,
		color: 'red',
		year: 2000
	},
	{ id: 2,
		color: 'black',
		year: 2000
	},
	{ id: 3,
		color: 'green',
		year: 2012
	}
];

// DEVOLVER LOS AÑOS
let item = cars.map(car => car.year);

console.log(item); // [2006, 2000, 2000, 2012]