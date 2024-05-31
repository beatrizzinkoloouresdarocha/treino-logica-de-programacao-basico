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

let somaCubos = 0;

for (let numero = 1; numero <= 5; numero++) {
    
    let cubo = numero * numero * numero;
    
    somaCubos += cubo;
}

console.log("A soma dos cubos dos números de 1 a 5 é: " + somaCubos);

//14)Calcular a média de uma série de notas

let primeira_nota = 55;
let segunda_nota = 60;
let terceira_nota = 65;
let quarta_nota = 70;
let quinta_nota = 75;
let sexta_nota = 78;
let setima_nota = 80;
let oitava_nota = 82;
let nona_nota = 90;
let decima_nota = 100;

let medianotas = [primeira_nota, segunda_nota, terceira_nota, quarta_nota, quinta_nota, sexta_nota, setima_nota, oitava_nota, nona_nota, decima_nota];

let totalnotas = 0;

for (let i = 0; i < medianotas.length; i++) {
    totalnotas += medianotas[i];
}

let medianota = totalnotas / medianotas.length;

console.log("A média das notas é: " + medianota);

//15)Imprimir números de 5 em 5 até 50

for (let numero = 5; numero <= 50; numero += 5) {
    console.log(numero);
}

//exercicio de agora :Com while:

//16)Contagem regressiva de 10 a 0

let Contagemnumero = 10; 
while (Contagemnumero >= 0) { 
    console.log(Contagemnumero);
    Contagemnumero -= 1;
}

//17)Soma dos primeiros 20 números

// Inicializa a variável para armazenar a soma
let somanumeros = 0;

// Usa um loop for para iterar de 1 a 20
for (let numero = 1; numero <= 20; numero++) {
    // Adiciona o número atual à variável soma
    somanumeros += numero;
}

// Imprime a soma dos primeiros 20 números
console.log("A soma dos primeiros 20 números é: " + somanumeros);

//18)Multiplicação acumulada de 1 a 10

// Inicializa a variável para armazenar a multiplicação acumulada
let multiplicacaoAcumulada = 1;

// Usa um loop for para iterar de 1 a 10
for (let numero = 1; numero <= 10; numero++) {
    // Multiplica o valor acumulado pelo número atual
    multiplicacaoAcumulada *= numero;
}

// Imprime a multiplicação acumulada de 1 a 10
console.log("A multiplicação acumulada de 1 a 10 é: " + multiplicacaoAcumulada);

const { write } = require('fs');
//19)Verificação de senha com 3 tentativas

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const senhaCorreta = "12345"; // Senha correta definida
let tentativas = 0; // Inicialização do contador de tentativas
const maxTentativas = 3; // Número máximo de tentativas permitido

function verificarSenha() {
  if (tentativas < maxTentativas) {
    rl.question("Digite a senha: ", function(senhaUsuario) {
      if (senhaUsuario === senhaCorreta) {
        console.log("Senha correta! Acesso permitido.");
        rl.close();
      } else {
        tentativas++;
        console.log("Senha incorreta. Tentativas restantes: " + (maxTentativas - tentativas));
        if (tentativas < maxTentativas) {
          verificarSenha();
        } else {
          console.log("Você excedeu o número máximo de tentativas. Acesso bloqueado.");
          rl.close();
        }
      }
    });
  } else {
    console.log("Você excedeu o número máximo de tentativas. Acesso bloqueado.");
    rl.close();
  }
}

verificarSenha();

//24)Impressão de números decrescentes até zero

let numero_exercicio24=20;

while (numero_exercicio24 >0){
    console.log(numero_exercicio24)
    numero_exercicio24 -= 1;
}

//25)Impressão de números de 1 a 20 em ordem decrescente

let numero_exercicio25=20;

while (numero_exercicio25 >0){
    console.log(numero_exercicio25)
    numero_exercicio25 -= 1;
}

//26Impressão de números de 1 a 20 em ordem crescente

