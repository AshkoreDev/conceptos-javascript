// FINDINDEX, se usa para encontrar el índece del primer elemento de un array que cumpla con una condición.
// Si no encuentra ninguna coincidencia devolverá -1.


const budgets = [
	{
		city: 'California',
		budget: 5500
	},
	{
		city: 'New York',
		budget: 8000
	},
	{
		city: 'Orlando',
		budget: 2000
	}
];

let item = budgets.findIndex(item => item.budget < 8000);

console.log(item);