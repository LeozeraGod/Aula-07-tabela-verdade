//Escreva um programa que receba um numero
//E diga se ele esta no intervalo entre 100 e 200

//!ENTRADA
const numero = 199;

let estaNoIntervalo = false;
//!PROCESSAMENTO


if (numero >= 100){
    if (numero <= 200){
        estaNoIntervalo = true;
    }else {
        estaNoIntervalo = false;
    }
}else {
    estaNoIntervalo=false;
}
//!SAIDA

//Se está ou nao no intervalo entre 100 e 200

if (estaNoIntervalo){
    console.log(numero + " Esta no intervalo entre 100 e 200");

}else{
    console.log(numero + " Não está no intervalo")
}