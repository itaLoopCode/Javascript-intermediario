// 'use strict'
// console.log(window);
// console.log(window === this)

// this.name = 'Italo'

// function saudar(){
//     console.log('this no contexto da função ', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     name:'Italo',
//     saudar: function(){
//         console.log('This no contexto do método', this)
//         console.log('this.name no contexto do método', this.name)
//     }
// }
// usuario.saudar()

let comida = {
    name: '|Brócolis',
    temperatura: 0,
}

comida.cozinhar = function (comidaParaCozinhar,
    temperaturaDeCozimento) {
        console.log('This no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(comida, 100)


console.log(comida)