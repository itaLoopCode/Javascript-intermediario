//arr.slice(inicio, [fim])
let frutas = ['maçã','banana', 'laranja','uva',]

// let frutasExtraidas = frutas.slice(1,3)
// console.log(frutasExtraidas)

// let frutasExtraidas = frutas.splice(2, 1)
// console.log(frutasExtraidas)
// console.log(frutas)

let removerEAdicionaFrutas = frutas.splice(1,2, 'Goiaba', 'Abacaxi', 'Pêra')
console.log(frutas)
console.log(removerEAdicionaFrutas)