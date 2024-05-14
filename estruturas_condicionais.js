// if (se)
// else if (senão)
// else (último senão)

primeiro_numero = 1
segundo_numero = 2
terceiro_numero = 3
quarto_numero = 1


// pode ter apenas o if no caso de querer verificar apenas uma condicao;
// pode ter apenas o if e o else no caso de querer verificar apenas 2 condicoes;
// pode ter o if, quantos else if quiser e um else no final para 3 ou mais condicoes;

if (primeiro_numero > segundo_numero) {
    console.log(primeiro_numero + ' é maior do que ' + segundo_numero)
}
else {
    console.log(primeiro_numero + ' não é maior do que ' + segundo_numero)
}



if (primeiro_numero > segundo_numero) {
    console.log(primeiro_numero + ' é maior do que ' + segundo_numero)
}
else if (primeiro_numero < segundo_numero) {
    console.log(primeiro_numero + ' é menor do que ' + segundo_numero)
}
else {
    console.log('Não é nenhuma das condicoes acima')
}


if (primeiro_numero > quarto_numero) {
    console.log(primeiro_numero + ' é maior do que ' + quarto_numero)
}
else {
    console.log(primeiro_numero + ' não é maior do que ' + quarto_numero)
}


if (primeiro_numero > quarto_numero) {
    console.log(primeiro_numero + ' é maior do que ' + quarto_numero)
}
else if (primeiro_numero < quarto_numero) {
    console.log(primeiro_numero + ' é menor do que ' + quarto_numero)
}
else {
    console.log('Não é nenhuma das condicoes acima')
}


if (primeiro_numero > quarto_numero) {
    console.log(primeiro_numero + ' é maior do que ' + quarto_numero)
}
else if (primeiro_numero < quarto_numero) {
    console.log(primeiro_numero + ' é menor do que ' + quarto_numero)
}
else if (primeiro_numero == quarto_numero) {
    console.log(primeiro_numero + ' é igual a ' + quarto_numero)
}
else {
    console.log('Não é nenhuma das condicoes acima')
}




