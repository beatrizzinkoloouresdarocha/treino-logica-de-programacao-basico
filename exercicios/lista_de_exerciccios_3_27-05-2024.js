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
