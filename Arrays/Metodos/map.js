// MAP, se usa para recorrer un array y realizar una operación con cada elemento del mismo.
// No modifica el array original, sino que crea uno nuevo con los resultados del map.


const letters = ['a', 'b', 'c'];

// CON FOR
let newArray = [];

for(let i = 0; i < letters.length; i++) {

	const element = letters[i];
	newArray.push(element + '++');
}

console.log('Original', letters);
console.log('New', newArray); // ['a++', 'b++', 'c++']


// CON MAP
const newArray2 = letters.map(item => item + '++');

console.log('Original', letters);
console.log('New 2', newArray2); // ['a++', 'b++', 'c++']



// DEVOLVER LOS AÑOS
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

let item = cars.map(car => car.year);

console.log(item); // [2006, 2000, 2000, 2012]