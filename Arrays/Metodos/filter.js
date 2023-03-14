// FILTER, se usa para filtrar elementos de un array que cumplan con una condición.
// Los elementos que cumplan con la condición serán parte del nuevo array generado.



const words = ['spray', 'limit', 'elite', 'exuberant'];

// CON FOR
const newArray = [];

for (let i = 0; i < words.length; i++) {
	
	const element = words[i];

	if (element.length >= 6) {

		newArray.push(element);
	}
}

console.log('Original ', words);
console.log('New ', newArray);


// CON FILTER 
const newArray2 = words.filter(item => item.length >= 6);

console.log('Original ', words);
console.log('New 2 ', newArray2);



// NUMEROS MAYORES O IGUALES A 5 Y MENORES O IGUALES A 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let item = numbers.filter(item => item >= 5 && item <= 10);

console.log('Item ' + item); // [5, 6, 7, 8, 9, 10];


// FILTRAR OBJETOS
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  }
];

let item1 = orders.filter(item => item.delivered);
let item2 = orders.filter(item => item.delivered && item.total >= 100);

console.log('Item 1 ', item1);  /* 
                                  {customerName: 'Nicolas', total: 60, delivered: true}
                                  {customerName: 'Santiago', total: 180, delivered: true}
                                  {customerName: 'Valentina', total: 240, delivered: true}
                                */

console.log('Item 2 ', item2); 		/* 
                                    {customerName: 'Santiago', total: 180, delivered: true}
                                    {customerName: 'Valentina', total: 240, delivered: true}
                                  */


// BUSCADOR 
const search = (query) => {

  return orders.filter(item => {

    return item.customerName.includes(query);
  });
};


console.log('Buscar', search('Nico')); /*
																				{customerName: 'Nicolas', total: 60, delivered: true}
																			 */