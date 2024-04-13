// funções de ordem superior são funções que recebem outras funções como parametro
// ou retornam outra função, ao invés de retornar uma variável, strings ou numeros
// isso é chamado de callback
// uma função pode ter 3 paramentro inclusive um deles sendo uma função

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 3
    let anoDeNascimento = 2024 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--

    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {

    console.log('Seu ano de nascimento é: ' + anoDeNascimento)

}

calcularAnoDeNascimento(30, 6, imprimirAnoDeNascimento)