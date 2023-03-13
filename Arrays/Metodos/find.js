// FIND, se usa para filtrar el primer elemento de un array que cumpla con una condición.


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

let item = budgets.find(item => item.budget < 8000);

console.log(item);