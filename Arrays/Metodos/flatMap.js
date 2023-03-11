// FLATMAP, SE USA PARA COMBINAR LA FUNCIONALIDADES DE FLAT Y DE MAP.
// PRIMERO TRANSFORMA EL ARRAY Y LUEGO APLANA EL RESULTADO.


// FILTRAR LOS IMPARES Y MULTIPLICARLOS POR 2.
const numbers = [1, 2, 3, 4, 5, 6];

let item = numbers.flatMap(n => n % 2 == 0 ? [] : n * 2);

console.log(item);