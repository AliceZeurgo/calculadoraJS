/**********************************************
 * Objetivo: Calculadora
 * Data: 11/08/2023
 * Autor: Alice 
 * Versão: 1.0
 ***********************************************/

//Import da biblioteca de entrada de dados via teclado
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o primeiro número: ', function (numero1) {
    let valor1 = numero1.replace(',','.');

    entradaDeDados.question('Digite o segundo numero: ', function (numero2){
        let valor2 = numero2.replace(',','.')

        valor1 = Number(valor1)
        valor2 = Number(valor2)

        entradaDeDados.question('Escolha uma opção de calculo: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]', function (opcao){
            let operacao = opcao.toUpperCase()

            let resultado;


            if(operacao == 'SOMAR'){
                 resultado = valor1 + valor2
            }else if(operacao == 'SUBTRAIR'){
                resultado = valor1 - valor2
            }else if(operacao == 'MULTIPLICAR'){
                 resultado = valor1 * valor2
                 //validação da entrada de dados 0 no valor
            }else if(operacao == 'DIVIDIR'){
                console.log("ERRO: Não é possível realizar uma divisão por 0")
                 resultado = valor1 / valor2
            }
            //validação da variavel undefined
        if(resultado!= undefined)
            console.log(resultado)

        })
    })
})
