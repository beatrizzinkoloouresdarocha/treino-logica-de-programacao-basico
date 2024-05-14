//1) Calcule a soma de dois números:

// Funcao para soma de dois valores, funcoes sao trechos de codigos feitos para executar algo
function soma() {
    // declarando variaveis, variaveis sao utulizadas para armazenar valores
    let primeiro_numero = 100
    let segundo_numero = 50
    let resultado_soma = primeiro_numero + segundo_numero
    console.log('Resultado = ' + resultado_soma) //para escrever na tela de console
}

soma() //dessa forma que é chamada a execução de uma função nomedafuncao()


// 2) Verifique a idade para dirigir:

function verificarIdadeParaDirigir() {
    let idade = 15; // Você pode substituir por qualquer idade ou solicitar ao usuário
    let idadeMinimaParaDirigir = 18;
    
    if (idade >= idadeMinimaParaDirigir) {
        console.log('Você pode dirigir.');
    } else {
        console.log('Você ainda não pode dirigir.');
    }
}

verificarIdadeParaDirigir();

//3) Conversão de temperatura:


