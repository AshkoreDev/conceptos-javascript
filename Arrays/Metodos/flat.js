// FLAT, SE USA PARA APLANAR UN ARRAY, CUANDO EXISTE UN ARRAY DENTRO DE UN ARRAY. ELIMINA EL ARRAY ANIDADO.
// SÓLO CONSUME UN NIVEL POR DEFECTO, PERO SE LE PUEDE PASAR EL NÚMERO DE NIVELES A CONSUMIR.
// SE PUEDE USAR INFINITY PARA QUE CONSUMA TODOS LOS NIVELES.

// UN SÓLO NIVEL.
const numbers = [1, 2, 3, [4, 5]];

let item = numbers.flat();

console.log(item);


// 3 NIVELES.
const numbers1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

let item1 = numbers1.flat(3);

console.log(item1);