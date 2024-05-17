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

// 12) Verificação de aprovação escolar:

function verificarAprovacao(media1, media2) {
    if (media1 > media2) {
        console.log("A média maior é: " + media1);
    } else if (media1 < media2) {
        console.log("A média maior é: " + media2);
    } else {
        console.log("As médias são iguais: " + media1);
    }

    // Verifica se a média é suficiente para aprovação
    if (media1 >= 60) {
        console.log("Média1 (" + media1 + ") está aprovada.");
    } else {
        console.log("Média1 (" + media1 + ") está reprovada.");
    }

    if (media2 >= 60) {
        console.log("Média2 (" + media2 + ") está aprovada.");
    } else {
        console.log("Média2 (" + media2 + ") está reprovada.");
    }
}

// Chamada da função com as médias de exemplo
let media1 = 50;
let media2 = 60;
verificarAprovacao(media1, media2);

// 13) Conversão de número para string:

function conversaoDeNumeroParaString() {
    let numeroASerConvertidoParaString = 10;
    let numeroConvertidoParaString = numeroASerConvertidoParaString.toString();

    console.log("Número convertido para string:", numeroConvertidoParaString);
}

// Chamada da função
conversaoDeNumeroParaString();

// 14) Verificação de comprimento de string:

function verificacaoDeComprimentoDeString() {
    let string = "programação";
    let comprimentoVerificado = string.length;

    console.log("Comprimento da string:", comprimentoVerificado);
}

// Chamada da função
verificacaoDeComprimentoDeString();

//15) Comparação de três números:

function comparacaoDeTresNumeros() {
    let numero1 = 50.0;
    let numero2 = 90.0;
    let numero3 = 70.0;

    if (numero1 > numero2 && numero1 > numero3) {
        console.log("O maior número é:", numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log("O maior número é:", numero2);
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log("O maior número é:", numero3);
    } else {
        console.log("Dois ou mais números são iguais.");
    }
}

comparacaoDeTresNumeros();

//16) Calculadora de área de um retângulo:

function calculaAreaEVerificaLadoMaior() {
    let altura = 1.60;
    let lado = 1.50;

    let area = altura * lado;

    console.log("Área do retângulo:", area);

    if (altura > lado) {
        console.log("A altura é maior do que o lado.");
    } else if (altura < lado) {
        console.log("O lado é maior do que a altura.");
    } else {
        console.log("A altura e o lado são iguais.");
    }
}

calculaAreaEVerificaLadoMaior();

//17) Verificação de maior número entre quatro:

// 17) Verificação de maior número entre quatro:

function comparacaoDeQuatroNumeros() {
    let numero1 = 50.0;
    let numero2 = 90.0;
    let numero3 = 70.0;
    let numero4 = 100.0;

    let maiorNumero = numero1;

    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3;
    }
    if (numero4 > maiorNumero) {
        maiorNumero = numero4;
    }

    console.log("O maior número é:", maiorNumero);
}

// Chamada da função
comparacaoDeQuatroNumeros();

//18 Concatenar strings:

let parte1 = "Aprender";
let parte2 = "a programar";
let parte3 = "é divertido!";

// Concatenando as strings
let frase = parte1 + " " + parte2 + " " + parte3;

console.log(frase);  // Saída: "Aprender a programar é divertido!"

//19)Verificação de booleano:

verdadeiro = true 
falso = false 

console.log(20==10)//retornou false (falso)
console.log(10==10)//retornou true (verdadeiro)

numero_um_tipo_number = 10 //// numero 1 em varivael do tipo numero inteiro
numero_um_tipo_string = '20'//// numero 1 em variavel do tipo caractere

console.log(numero_um_tipo_number == numero_um_tipo_string) 
console.log(numero_um_tipo_number === numero_um_tipo_string)

//20) Multiplicação de dois números:

//fazer o multiplicacao

function multiplicacaodedoisnumeros(){
    let primeiro_numero=50
    let segundo_numero=10
    let resultado_multiplicacao=primeiro_numero*segundo_numero
    console.log('resultado='+resultado_multiplicacao)
}

multiplicacaodedoisnumeros()

//21) Verificação de nota mínima:

function comparacaoDeTresNumeros() {
    let numero1 = 50.0;
    let numero2 = 60.0;
    let numero3 = 30.0;

    if (numero1 > numero2 && numero1 > numero3) {
        console.log("O maior número é:", numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log("O maior número é:", numero2);
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log("O maior número é:", numero3);
    } else {
        console.log("Dois ou mais números são iguais.");
    }
}

comparacaoDeTresNumeros();

//22)Calculadora de salário:

// Função para soma de dois valores. Funções são trechos de códigos feitos para executar algo específico.
function soma() {
    // Declarando variáveis. Variáveis são utilizadas para armazenar valores.
    let primeiro_salario = 1400;
    let segundo_salario = 1900;
    
    // Calculando a soma dos dois salários e armazenando o resultado em uma nova variável
    let resultado_soma = primeiro_salario + segundo_salario;
    
    // Escrevendo o resultado da soma no console
    console.log('Resultado = ' + resultado_soma); // para escrever na tela de console
}

// Chamando a função para executar o código dentro dela
soma(); // dessa forma que é chamada a execução de uma função nomedafuncao()

//23) Verificação de número negativo:

if (numero < 0) {
    console.log("O número " + numero + " é negativo.");
} else if (numero > 0) {
    console.log("O número " + numero + " é negativo.");
} else {
    console.log("O número é zero.");
}

//24 Subtração de dois números:

// Função para subtrair dois números
function subtrair() {
    let primeiro_numero = 50;
    let segundo_numero = 30;
    let resultado_menos = primeiro_numero - segundo_numero;
    
    console.log('Resultado = ' + resultado_menos);
}

// Chama a função para executar o código
subtrair();

//25 Verificação de múltiplo de 3:

function multiplodetres(){
    let numero1= 100;
    let numero2= 50;
    let numero3=20;
    let resultado_multiplicacao =numero1 * numero2*numero3
    console.log('Resultado ='  + resultado_multiplicacao)
}

multiplodetres()

//26) Divisão de dois números:

function divisao(){
    let numero1=100;
    let numero2=10;
    let resultado_divisao=numero1/numero2
    console.log('Resultado = '  + resultado_divisao)
}

divisao()

//27) Comparação de idade e elegibilidade para aposentadoria:

//Exemplo de comparacao de maior ou igual >= :

console.log(45 >= 10) //retorna true (verdadeiro)
console.log(10 >= 60) //retorna true (verdadeiro)
console.log(10 >= 11) //retorna false (falso)


//Exemplo de comparacao de menor ou igual <= :

console.log(45 <= 10) //retorna true (verdadeiro)
console.log(10 <= 60) //retorna false (falso)
console.log(10 <= 11) //retorna true (verdadeiro)

