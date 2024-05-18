// && e || (E e OU) servem para verificar duas ou mais condicoes

// && = significa e. Por exemplo: eu tenho uma blusa amarela e uma calca preta
// retorna true (verdadeiro) somente quando todas as condicoes sao verdadeiras

// || = significa ou. Por exemplo: quero comprar uma calça jeans ou de moletom

//essas condicoes sao usadas para verificacoes logicas no codigo.
// essas condiceos irao retornar verdadeiro ou falso
// Exemplos:

//&& (e)

blusa_numero1_cor = 'amarela'
calca_numero1_cor = 'preta'
blusa_numero2_cor = 'verde'
calca_numero2_cor = 'rosa'
tenis_numero1_cor = 'preto'
idade_1 = 21 
idade_2 = 15

// exemplo1: verificar se blusa é amarela e calça é preta

resultado_1 = blusa_numero1_cor == 'amarela' && calca_numero1_cor == 'preta'
console.log('resultado 1: ' + resultado_1) // retornou true ambas as condicoes sao verdadeiras

resultado_2 = blusa_numero2_cor == 'amarela' && calca_numero1_cor == 'preta'
console.log('resultado 2: ' + resultado_2) // retornou false pois uma das condicoes é falsa (primeira condicao)

resultado_3 = blusa_numero1_cor == 'amarela' && calca_numero2_cor == 'preta'
console.log('resultado 3: ' + resultado_3) // retornou false pois uma das condicoes é falsa (segunda condicao)

//exemplo 2: verificar se blusa é amarela e calça é preta e tenis é branco
resultado_4 = blusa_numero1_cor == 'amarela' && calca_numero1_cor == 'preta' && tenis_numero1_cor == 'branco'
console.log('resultado 4: ' + resultado_4)

resultado_10 = idade_1 > 18 && idade_2 > 18
console.log('resultado 10: ' + resultado_10)

resultado_11 = idade_1 > 10 && idade_2 > 10
console.log('resultado 11: ' + resultado_11)


// ----------------------------------------------------------------------------------------------------------

// || (ou)

resultado_5 = blusa_numero1_cor == 'amarela' || calca_numero1_cor == 'preta'
console.log('resultado 5: ' + resultado_5) //retornou true pois ambas as condicoes sao verdadeiras

resultado_6 = blusa_numero2_cor == 'amarela' || calca_numero1_cor == 'preta'
console.log('resultado 6: ' + resultado_6) //retornou true pois pelo menos uma das condicoes é verdadeira (segunda condicao)

resultado_7 = blusa_numero1_cor == 'amarela' || calca_numero1_cor == 'preta' || tenis_numero1_cor == 'branco'
console.log('resultado 7: ' + resultado_7) //retornou true pois pelo menos uma das condicoes é verdadeira (primeira e segunda condicoes)

resultado_8 = blusa_numero1_cor == 'amarela' || calca_numero1_cor == 'rosa' || tenis_numero1_cor == 'branco'
console.log('resultado 8: ' + resultado_8) //retornou true pois pelo menos uma das condicoes é verdadeira (primeira condicao)

resultado_9 = blusa_numero1_cor == 'vermelha' || tenis_numero1_cor == 'verde'
console.log('resultado 9: ' + resultado_9) //retornou false pois todas as condicoes sao falsas

resultado_12 = idade_1 > 18 || idade_2 > 18
console.log('resultado 12: ' + resultado_12) //retornou true pois todas as condicoes sao verdadeiras

resultado_13 = idade_1 > 10 || idade_2 > 10
console.log('resultado 13: ' + resultado_13) //retornou true pois uma das condicoes é verdadeira






