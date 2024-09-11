//LISTA 1
const lista = [1, 2, 3, 4, 5];
console.log(lista);

lista.push(6)
console.log(lista);

lista.unshift(0);
console.log(lista);

lista.pop();
console.log(lista);

lista.shift();
console.log(lista);

//LISTA 2
const obj = { id: 3 };
const lista2 = [{ id: 1 }, { id: 2 }, obj]

console.log(lista2.find(item => item.id == 2));

console.log(lista2.findIndex(item => item.id == 3));

console.log(lista2.indexOf(obj)); // REFERENCIA DE MEMORIA

console.log(lista2.some(item => item.id == 1));

console.log(lista2.every(item => item.id == 1));

console.log(lista2.includes(obj)); // REFERENCIA DE MEMORIA

//LISTA 3
const lista3 = [{ id: 1, ativo: true }, { id: 2, ativo: true }, { id: 3, ativo: false}]

console.log(lista3.filter(item => item.ativo === true));


