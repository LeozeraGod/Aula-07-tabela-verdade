//2 - Escreva um programa que resolva o seguinte problema
// uma cópia de "xerox" custa R$ 0,25 por folha,
//mas acima de 100 folhas esse valor cai para R$ 0,20 por unidade.
//Dado o total de copias, informe qual o valor a ser pago.

//!Entrada
const numeroCopias = 99;

//!Processamento
let valorTotal = 0;

if (numeroCopias <= 100) {
    valorTotal = numeroCopias * 0.25;
} else {
    valorTotal = numeroCopias * 0.20;
}

//!Saída

console.log("O valor total para " + numeroCopias + " é R$ " + valorTotal + " Reais");