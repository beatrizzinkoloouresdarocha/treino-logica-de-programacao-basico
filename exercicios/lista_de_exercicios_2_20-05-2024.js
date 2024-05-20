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

