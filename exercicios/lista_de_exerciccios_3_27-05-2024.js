//exercício usará ou for ou while, conforme especificado:

//1)Soma de números de 1 a 100

for( let numero=1; numero <101; numero++){
    console.log(numero)
}

//2)Impressão de números de 1 a 50

for (let numero=1; numero <51;numero++) {
    console.log(numero)
}

//3)Tabuada do 7

for (let i = 1; i <= 10; i++) {
    let resultado = 7 * i;
    console.log("7 x " + i + " = " + resultado);
}

//4)Fatorial de um número

let numero = 5; // Você pode alterar este valor ou usar prompt para obter a entrada do usuário
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i; // fatorial = fatorial * i
}

console.log("O fatorial de " + numero + " é " + fatorial);

//5)Quadrados dos números de 1 a 10

for (let numero = 1; numero <= 10; numero++) {
    let quadrado = numero * numero;
    console.log("O quadrado de " + numero + " é " + quadrado);
}

//6)Impressão de números de 10 a 1

for (let numero = 10; numero > 0; numero--) {
    console.log(numero);
}

//7)Soma dos dígitos de um número

for (let numero = 15; numero < 201; numero++) {
    let somanumero = 0; 

    let numeroString = numero.toString();

    for (let i = 0; i < numeroString.length; i++) {
        somanumero += parseInt(numeroString[i]);
    }

    console.log("Número: " + numero + ", Soma dos dígitos: " + somanumero);
}

//8)Calcular média de 5 notas

let notas = [50, 60, 70, 80, 85];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log(" média das notas: " + media);

//9)Soma dos quadrados dos números de 1 a 10

let somaQuadrados = 0;

for (let numero = 1; numero <= 10; numero++) {
    let quadrado = numero * numero;
    somaQuadrados += quadrado;
}

console.log("A soma dos quadrados dos números de 1 a 10 é: " + somaQuadrados);

//10)Produto de números de 1 a 5

let produto = 1;

for (let numero = 1; numero <= 5; numero++) {
    produto *= numero;
}

console.log("O produto dos números de 1 a 5 é: " + produto);

//11)Impressão de números de 1 a 20

for (let numero= 1; numero<21;numero++){
    console.log(numero)
}

//12)Calcular o valor total de uma série de produtos

let primeiro_produto = 50;
let segundo_produto = 60;
let terceiro_produto = 65;
let quarto_produto = 70;
let quinto_produto = 80;

let total = 0; 

let produtos = [primeiro_produto, segundo_produto, terceiro_produto, quarto_produto, quinto_produto]; // Coloca os produtos em um array

for (let i = 0; i < produtos.length; i++) {
    total += produtos[i]; 
}

console.log("O valor total dos produtos é: R$" + total);

//13)Soma dos cubos dos números de 1 a 5