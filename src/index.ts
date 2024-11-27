// Crie um programa que valida se uma pessoa pode entrar em uma festa.
// As regras para a pessoa entrar são:
// A pessoa precisa ter 18 anos ou mais
// Ou caso a pessoa tenha menos de 18 anos, deve estar acompanhado dos pais ou responsável
// Todos devem apresentar o RG para entrar

//!Entrada

const idadePessoa = 17;
const estaComResponsavel = true;
const estaComRG = false;


//!Processamento





//!Saida
if(estaComRG) {
    if(idadePessoa >= 18) {
        console.log("Entrada Liberada");
    }else {
        if(estaComResponsavel){
            console.log("Entrada Liberada");
        }else {
            console.log("Entrada Bloqueada");
        }
    }
}else {
    console.log("Entrada Bloqueada");
}

/*

if (estaComRG && (idadePessoa >= 18 || estaComResponsavel)) {
    console.log("Entrada Liberada");
}else {
    console.log("Entrada Bloqueada");
}
*/


