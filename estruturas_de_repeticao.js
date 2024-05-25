//for = significa para. Por exemplo: Para cada um deles 
//while = significa enquanto. Por exemplo: enquanto você não terminar de almoçar não pode comer sobremesa

//++ significa que a variavel vai aumentar seu valor de 1 em 1. Para aumentar de 3 em 3 por exemplo, utilizar +=3
//-- significa que a variavel vai aumentar seu valor de 1 em 1. Para aumentar de 3 em 3 por exemplo, utilizar -=3

//continue = comando usado para pular para a próxima execução do início laço de repetição sem executar o restante do código do laço de repetição
//break = comando usado para terminar a execução do laço de repetição e sair dele


//FOR

// Vai imprimir os números de 0 até 10 no console.
for (let numero = 0; numero < 11; numero++) { // VARIAVEL numero que começa em 0, CONDIÇÃO DE EXECUÇÃO: VARIÁVEL número ser menor do que 11
    //inicio do laço de repetição
    console.log(numero)
    // fim do laço de repetição, ao chegar aqui volta para o início enquanto a CONDIÇÃO DE EXECUÇÃO for verdadeira
}


// Vai imprimir apenas os números pares de 0 até 10 no console
for (let numero = 0; numero < 11; numero++) { // VARIAVEL numero que começa em 0, CONDIÇÃO DE EXECUÇÃO: VARIÁVEL número ser menor do que 11
    //inicio do laço de repetição
    if (numero % 2 != 0) { //verificar se o número não for par. % é um operador utilizado para verificar o resto de divisões
        continue; // comando que serve para avançar para o próximo laço de execução sem executar o resto do código dentro do for, ao chegar aqui volta para o início do laço for
    }
    console.log(numero)
    // fim do laço de repetição, ao chegar aqui volta para o início enquanto a CONDIÇÃO DE EXECUÇÃO for verdadeira
}


// Vai imprimir os números de 0 até 10 no console, até que número multiplicado por 2 seja maior ou igual a 8
for (let numero = 0; numero < 11; numero++) { // VARIAVEL numero que começa em 0, CONDIÇÃO DE EXECUÇÃO: VARIÁVEL numero ser menor do que 11
    if (numero * 2 >= 8) { // se número multiplicado por  2 for maior ou igual a 8, vai terminar a execução do for
        break;  // sair do for
    }
    //inicio do laço de repetição
    console.log(numero)
    // fim do laço de repetição, ao chegar aqui volta para o início enquanto a CONDIÇÃO DE EXECUÇÃO for verdadeira
}


numero = 0 //no while precisa de uma variavel externa anterior ao código do while
//WHILE

//para imprimir numeros no console de 0 a 10
while (numero < 11) { //VARIAVEL EXTERNA numero. CONDIÇÃO DE EXECUÇÃO:VARIÁVEL numero ser menor do que 11
    //inicio do laço de repetição
    console.log(numero)
    numero += 1
    //fim do laçõ de repetição, ao chegar aqui volta ao início do laço de repetiçaõ e executa de novo enquanto a CONDIÇÃO DE EXECUÇÃO for verdadeira (true)
}

numero = -1
//para imprimir somente numeros pares no console que estão entred 0 e 10
while (numero < 11) { //VARIAVEL EXTERNA numero. CONDIÇÃO DE EXECUÇÃO:VARIÁVEL numero ser menor do que 11
    numero += 1
    if (numero % 2 != 0) { //verificar se o número não for par. % é um operador utilizado para verificar o resto de divisões
        continue; // comando que serve para avançar para o próximo laço de execução sem executar o resto do código dentro do for, ao chegar aqui volta para o início do laço for
    }
    console.log(numero)
}

numero = 0

// Vai imprimir os números de 0 até 10 no console, até que número multiplicado por 2 seja maior ou igual a 8
while (numero < 11) { // VARIAVEL EXTERNA numero que começa em 0, CONDIÇÃO DE EXECUÇÃO: VARIÁVEL numero ser menor do que 11
    if (numero * 2 >= 8) { // se número multiplicado por 2 for maior ou igual a 8, vai terminar a execução do while
        break;  // sair do for
    }
    //inicio do laço de repetição
    console.log(numero)
    numero += 1
    // fim do laço de repetição, ao chegar aqui volta para o início enquanto a CONDIÇÃO DE EXECUÇÃO while verdadeira
}






//Será explicado posteriormente:
// array.forEach(element => {
    
// });


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
