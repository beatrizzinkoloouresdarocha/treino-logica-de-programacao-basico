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

//3 Conversão de temperatura:

let temperaturaCelsius =20 ; //temperatura em Celsius
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log('A temperatura em Fahrenheit é: ' + temperaturaFahrenheit);

// 4) Verificação de número par ou ímpar:

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
let numero = 10;
console.log(`O número ${numero} é ${verificarParidade(numero)}.`);

// 5) Comparação de duas strings:

// Exemplo de comparação de igualdade == e ===
let string1 = "Olá";
let string2 = "Olá";
let string3 = "Mundo";

console.log(string1 == string2);  // true, porque os valores são iguais
console.log(string1 === string2); // true, porque os valores e os tipos são iguais
console.log(string1 == string3);  // false, porque os valores são diferentes
console.log(string1 === string3); // false, porque os valores são diferentes

// 6) Calculadora de desconto:

function CalculadoraDesconto(precoOriginal, taxaDesconto) {
    var valorDesconto = precoOriginal * (taxaDesconto / 100);
    var precoFinal = precoOriginal - valorDesconto; // Corrigi a operação de subtração
    return precoFinal;
}

var precoOriginal = 100.0; // exemplo em reais
var taxaDesconto = 20.0; // exemplo em porcentagem

var precoFinal = CalculadoraDesconto(precoOriginal, taxaDesconto);
console.log("Preço final após desconto: R$ " + precoFinal.toFixed(2));

// 7) Comparação de duas idades:

function compararIdades(idade1, idade2) {
    if (idade1 > idade2) {
        console.log(`A primeira idade (${idade1}) é maior que a segunda idade (${idade2}).`);
    } else if (idade1 < idade2) {
        console.log(`A segunda idade (${idade2}) é maior que a primeira idade (${idade1}).`);
    } else {
        console.log(`Ambas as idades são iguais (${idade1} e ${idade2}).`);
    }
}

// Exemplo de uso

compararIdades(22, 25);//A segunda idade (25) é maior que a primeira idade (22).

//8) Calculadora de IMC:

function calculoimc(){
    let peso = 100;// peso em kg
    let altura=1.70; // altura em metros


    let imc = peso / (altura * altura)
    console.log("resultado do calculo imc: " + imc.toFixed(2));
}

calculoimc()

// 9) Calcule a média de três notas:

let nota1 = 100;
let nota2 = 80;
let nota3 =60;

let mediadasnotas =(nota1 + nota2 +nota3) / 3

console.log(mediadasnotas)

// 10) Verificação de maioridade:

function verificarmaioridade(){
    let idade1= 18;
    let idade2 = 15;

    if (idade1 >= idade2) {
        console.log('maior de idade')
    }
    else {
        console.log('menor de idade')
    }
}

verificarmaioridade()

//11) Comparação de preços:

let preco1 = 80.0;
let preco2 = 50.0;

if (preco1 > preco2){
    console.log("O maior preço é:",
    preco1);
}else {
    console.log("O maior preço é:",
    preco2);
}