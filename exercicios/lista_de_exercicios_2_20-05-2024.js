//1) Verifique se um número é positivo e menor que 100.

numero_exercicio_1=50;

resultado_exercicio_1 = numero_exercicio_1 >=0 && numero_exercicio_1<100
console.log('resultado exercicio 1: ' + resultado_exercicio_1) // retornou true ambas as condicoes sao verdadeiras

//2)Verifique se dois números são iguais ou a soma deles é maior que 100.

primeiro_numero_exercicio_2=60;
segundo_numero_exercicio_2=80;
soma_numeros_exercicio_2=primeiro_numero_exercicio_2+segundo_numero_exercicio_2
resultado_exercicio_2 = (primeiro_numero_exercicio_2==segundo_numero_exercicio_2) || (soma_numeros_exercicio_2>100)
console.log('resultado_exercicio_2: '+ resultado_exercicio_2)//retornou true porque a soma dois dois numeros é maior que 100.

//3)Verifique se um número é negativo ou igual a zero.

let numero_exercicio_3 = 70;

let resultado_exercicio_3 = numero_exercicio_3 <= 0;
console.log('resultado exercicio 3: ' + resultado_exercicio_3);

//4)Verifique se um número está entre 10 e 20, inclusive.

numero_exercicio_4 =10;

resultado_exercicio_4= numero_exercicio_4>=10 && numero_exercicio_4<=20;
console.log('resultado_exercicio_4:' +resultado_exercicio_4);

//5)Verifique se dois números são diferentes e ambos são positivos.

primeiro_numero_exercicio_5=50;
segundo_numero_exercicio_5=25;

resultado_exercicio_5=(primeiro_numero_exercicio_5!=segundo_numero_exercicio_5) && (primeiro_numero_exercicio_5>0 && segundo_numero_exercicio_5>0)
console.log('resultado_exercicio_5: '+resultado_exercicio_5);

//6)Verifique se um número é maior que 50 e menor que 100.

let numero_exercicio_6=75;

let resultado_exercicio_6 = numero_exercicio_6 > 50 && numero_exercicio_6 < 100;
console.log('resultado_exercicio_6: ' + resultado_exercicio_6); 

//7)Verifique se a diferença entre dois números é menor que 10 e maior que 0.

let primeiro_numero_exercicio_7 = 15;
let segundo_numero_exercicio_7 = 20;

let diferenca = Math.abs(primeiro_numero_exercicio_7 - segundo_numero_exercicio_7);
let resultado_exercicio_7 = diferenca > 0 && diferenca < 10;
console.log('resultado_exercicio_7: ' + resultado_exercicio_7);

//8)Verifique se um número é maior que 50.

let numero_exercicio_8=45;

let resultado_exercicio_8 = numero_exercicio_8 > 50;
console.log('resultado_exercicio_8: ' + resultado_exercicio_8);//false por que o numerto 45 não é maior que 50.

//9)Verifique se um número é maior que 0 e menor que 50.

let numero_exercicio_9=27;

let resultado_exercicio_9=numero_exercicio_9 > 0 && numero_exercicio_9< 50;
console.log('resultado_exercicio_9: '+ resultado_exercicio_9);

//10)Verifique se um número é menor que 10 ou maior que 20.

let numero_exercicio_10= 50;

let resultado_exercicio_10=numero_exercicio_10 <10 || numero_exercicio_10 > 20;
console.log('resultado_exercicio_10: ' +resultado_exercicio_10);

// 11) Verifique se dois números são iguais e ambos são maiores que 30.

let primeiro_numero_exercicio_11 = 50;
let segundo_numero_exercicio_11 = 60;

let resultado_exercicio_11 = (primeiro_numero_exercicio_11 === segundo_numero_exercicio_11) && (primeiro_numero_exercicio_11 > 30) && (segundo_numero_exercicio_11 > 30);
console.log('resultado_exercicio_11: ' + resultado_exercicio_11); // false

//12)Verifique se um número está fora do intervalo de 30 a 50.

let primeiro_numero_exercicio_12=55;

let resultado_exercicio_12=(primeiro_numero_exercicio_12 <30) || (primeiro_numero_exercicio_12 >50);
console.log('resultado_exercicio_12: '+resultado_exercicio_12);//Ele verifica se um número está fora do intervalo de 30 a 50 usando as condições apropriadas.

//13)Verifique se a soma de dois números é maior que 100.

let primeiro_numero_exercicio_13=50;
let segundo_numero_exercicio_13=85;

let soma_numeros_exercicio_13=primeiro_numero_exercicio_13 +segundo_numero_exercicio_13
let resultado_exercicio_13 = soma_numeros_exercicio_13 > 100;
console.log('resultado_exercicio_13: '+ resultado_exercicio_13);

//14)Verifique se dois números são ambos maiores que 100.

let primeiro_numero_exercicio_14=85;
let segundo_numero_exercicio_14=90;

let resultado_exercicio_14=(primeiro_numero_exercicio_14>100) && (segundo_numero_exercicio_14>100)
console.log('resultado_exercicio_14: '+resultado_exercicio_14);

//15)Verifique se um número é maior que 0 e não é igual a 10.

let numero_exercicio_15 = 15; 

let resultado_exercicio_15 = (numero_exercicio_15 > 0) && (numero_exercicio_15 !== 10);
console.log('resultado_exercicio_15: '+resultado_exercicio_15);

// 16) Verifique se um número é primo e maior que 10.

let numero_exercicio_16 = 14;

// Função para verificar se um número é primo
function ePrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true; 
    if (numero % 2 === 0 || numero % 3 === 0) return false; 
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false; 
    }
    return true;
}
let resultado_exercicio_16 = (numero_exercicio_16 > 10) && ePrimo(numero_exercicio_16);

console.log('resultado_exercicio_16: ' + resultado_exercicio_16); // false para 14

//17)Verifique se a soma de dois números é menor que 50.

let primeiro_numero_exercicio_17 = 35;
let segundo_numero_exercicio_17 = 45;

let soma_numeros_exercicio_17 = primeiro_numero_exercicio_17 + segundo_numero_exercicio_17;
let resultado_exercicio_17 = soma_numeros_exercicio_17 < 50; 
console.log('resultado_exercicio_17: ' + resultado_exercicio_17);

//18)Verifique se a diferença entre dois números é maior que 20.

let primeiro_numero_exercicio_18=50;
let segundo_numero_exercicio_18=30;

let diferenca_exercicio_18 = primeiro_numero_exercicio_18 - segundo_numero_exercicio_18;

let resultado_exercicio_18 = diferenca_exercicio_18 > 20;
console.log('resultado_exercicio_18: ' + resultado_exercicio_18);

//19)Verifique se a soma de três números é maior que 100.

let primeiro_numero_exercicio_19=110;
let segundo_numero_exercicio_19=115;
let terceiro_numero_exercicio_19=120;

let soma_numeros_exercicio_19=primeiro_numero_exercicio_19+segundo_numero_exercicio_19 +terceiro_numero_exercicio_19
let resultado_exercicio_19=soma_numeros_exercicio_19>100
console.log('resultado_exercicio_19:' + resultado_exercicio_19);

// 20) Verifique se dois números são iguais ou a soma deles é maior que 110.

let primeiro_numero_exercicio_20 = 117;
let segundo_numero_exercicio_20 = 120;

let soma_numeros_exercicio_20 = primeiro_numero_exercicio_20 + segundo_numero_exercicio_20;
let resultado_exercicio_20 = (primeiro_numero_exercicio_20 == segundo_numero_exercicio_20) || (soma_numeros_exercicio_20 > 110);

console.log('resultado_exercicio_20: ' + resultado_exercicio_20);

// 21) Verifique se um número é maior que 60 e menor que 100.

let primeiro_numero_exercicio_21 = 71;

let resultado_exercicio_21 = primeiro_numero_exercicio_21 > 60 && primeiro_numero_exercicio_21 < 100;
console.log('resultado_exercicio_21: ' + resultado_exercicio_21);

// 22) Verifique se a soma de dois números é menor que 80.

let primeiro_numero_exercicio_22 = 55;
let segundo_numero_exercicio_22 = 77;

let soma_numeros_exercicio_22 = primeiro_numero_exercicio_22 + segundo_numero_exercicio_22;
let resultado_exercicio_22 = soma_numeros_exercicio_22 < 80;

console.log('resultado_exercicio_22: ' + resultado_exercicio_22);

//23)Verifique se a média de três números é menor que 30.

let numero1 = 20;
let numero2 = 25;
let numero3 = 35;

let media = (numero1 + numero2 + numero3) / 3;
let resultado = media < 30;

console.log('resultado_exercicio_23: ' + resultado);

// 24) Verifique se um número é menor que 20 ou maior que 50.

let primeiro_numero_exercicio_24 = 15;

let resultado_exercicio_24 = primeiro_numero_exercicio_24 < 20 || primeiro_numero_exercicio_24 > 50;
console.log('resultado_exercicio_24: ' + resultado_exercicio_24);

// 25) Verifique se um número é positivo e menor que 90.

let primeiro_numero_exercicio_25 = 55;

let resultado_exercicio_25 = primeiro_numero_exercicio_25 >= 0 && primeiro_numero_exercicio_25 < 90;
console.log('resultado_exercicio_25: ' + resultado_exercicio_25);

// 26) Verifique se a soma de dois números é menor que 95.

let primeiro_numero_exercicio_26 = 50;
let segundo_numero_exercicio_26 = 70;

let soma_numeros_exercicio_26 = primeiro_numero_exercicio_26 + segundo_numero_exercicio_26;
let resultado_exercicio_26 = soma_numeros_exercicio_26 < 95;

console.log('resultado_exercicio_26: ' + resultado_exercicio_26);

// 27) Verifique se um número é negativo ou igual a zero.

let numero_exercicio_27 = 85;

let resultado_exercicio_27 = numero_exercicio_27 < 0 || numero_exercicio_27 === 0;
console.log('resultado_exercicio_27: ' + resultado_exercicio_27);

// 28) Verifique se a diferença entre dois números é igual a 10.

let primeiro_numero = 30;
let segundo_numero = 20;

let diferenca_exercicio_28 = Math.abs(primeiro_numero - segundo_numero); // Usamos Math.abs para garantir que a diferença seja positiva.
let resultado_exercicio_28 = diferenca_exercicio_28 === 10;

console.log('resultado_exercicio_28: ' + resultado_exercicio_28);

// 29) Verifique se a soma de dois números é menor que 150.

let primeiro_numero_exercicio_29 = 80;
let segundo_numero_exercicio_29 = 70;

let soma_numeros_exercicio_29 = primeiro_numero_exercicio_29 + segundo_numero_exercicio_29;
let resultado_exercicio_29 = soma_numeros_exercicio_29 < 150;

console.log('resultado_exercicio_29: ' + resultado_exercicio_29);

// 30) Verifique se a soma de dois números é menor que 57.

let primeiro_numero_exercicio_30 = 35;
let segundo_numero_exercicio_30 = 25;

let soma_numeros_exercicio_30 = primeiro_numero_exercicio_30 + segundo_numero_exercicio_30;
let resultado_exercicio_30 = soma_numeros_exercicio_30 < 57;

console.log('resultado_exercicio_30: ' + resultado_exercicio_30);

//31) Verifique se um número é maior que 200 e divisível por 5.

let numero_exercicio_31 = 205;

let resultado_exercicio_31 = numero_exercicio_31 > 200 && numero_exercicio_31 % 5 === 0;
console.log('resultado_exercicio_31: ' + resultado_exercicio_31);

// 32) Verifique se um número é ímpar e menor que 50.

let numero_exercicio_32 = 37;

let resultado_exercicio_32 = numero_exercicio_32 % 2 !== 0 && numero_exercicio_32 < 50;
console.log('resultado_exercicio_32: ' + resultado_exercicio_32);

// 33) Verifique se a multiplicação de dois números é maior que 1000.

let primeiro_numero_exercicio_33 = 40;
let segundo_numero_exercicio_33 = 30;

let multiplicacao = primeiro_numero_exercicio_33 * segundo_numero_exercicio_33;
let resultado_exercicio_33 = multiplicacao > 1000;
console.log('resultado_exercicio_33: ' + resultado_exercicio_33);

// 34) Verifique se um número é um múltiplo de 3 ou de 7.

let numero_exercicio_34 = 21;

let resultado_exercicio_34 = numero_exercicio_34 % 3 === 0 || numero_exercicio_34 % 7 === 0;
console.log('resultado_exercicio_34: ' + resultado_exercicio_34);

// 35) Verifique se a média de três números é maior que 20 e menor que 40.

let numero1_exercicio_35 = 15;
let numero2_exercicio_35 = 25;
let numero3_exercicio_35 = 30;

let media_exercicio_35 = (numero1_exercicio_35 + numero2_exercicio_35 + numero3_exercicio_35) / 3;
let resultado_exercicio_35 = media_exercicio_35 > 20 && media_exercicio_35 < 40;
console.log('resultado_exercicio_35: ' + resultado_exercicio_35);

// 36) Verifique se a soma de dois números é exatamente 100.

let primeiro_numero_exercicio_36 = 55;
let segundo_numero_exercicio_36 = 45;

let soma_numeros_exercicio_36 = primeiro_numero_exercicio_36 + segundo_numero_exercicio_36;
let resultado_exercicio_36 = soma_numeros_exercicio_36 === 100;
console.log('resultado_exercicio_36: ' + resultado_exercicio_36);

// 37) Verifique se um número é par e menor que 60.