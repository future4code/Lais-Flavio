//1-
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) // a.  false por que o && só retorna true se todas as condições forem verdadeiras, mas o bool2 é false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //b.  false por que bool2 || bool1 = true e !bool3 = false, então false && true retorna false por que as duas condições não são true.

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //c.  true por que inicialmente o resultado é false, mas !resultado é o contrário de false, e todas as condições retornam true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //d.  false por que todas as condições são false

console.log("e. ", typeof resultado) //e.  boolean
*/

//2
/*
let array
console.log('I. ', array) //I.  undefined por que não foi atribuído o valor à variável array

array = null
console.log('II. ', array) //II.  null por que não foi atribuído o valor à variável array e está associado a uma variável


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) //III.  11 indica a quantidade de elementos no array

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //IV.  3  e  4 Imprime no console a posição 0 e 1 do array

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) //V.  19  e  9 imprime o valor do array = 19 e o valor da posição 6 do array

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) //VI.  3 imprime a posição 0 do array

i = array.length - 1 
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //VII.  1 
*/

//2 -
/*a. O que é `array` e como se declara em `JS`?
Estrutura para guardarmos e acessarmos mais de uma 
informação ao mesmo tempo e declaramos um array:
let nomeVariavel = [valor1, valor2, "Valor3"]

b. Qual o index inicial de um `array`? 0

c. Como se determinar o tamanho do `array`? usando a função .lenght

d. Indique todas as mensagens impressas no console.
*/

// Escrita de código

//--- 1

//A - 298.15

let k = (77 - 32)*5/9 + 273.15
console.log(k)
//B - 176
let f = (80)*9/5+32
console.log(f)
//C - 86 e 272.03
let f1 = (30)*9/5+32
let k1 = (30 - 32)*5/9 + 273.15
console.log(f1, k1)

//d

let nConverter = prompt("Insira um valor em grau celsios")
let valDigitado = Number(nConverter)

let kel = (valDigitado - 32)*5/9 + 273.15
let far = (valDigitado)*9/5 + 32

console.log("O valor digitado para Farhrenheit é de " + " " + far + " " + " e para Kelvin é "+ kel  )


/* 2 -
let nomePergunta = prompt("Qual o seu nome ?")
let sobrenomePergunta = prompt("Qual o seu sobrenome ?")
let idadePergunta = prompt("Qual é a sua idade?")
let localPergunta = prompt("Qual estado você mora?")
let gostoPergunta = prompt("Qual sua cor favorita")

console.log("Resposta: " + nomePergunta + " " + sobrenomePergunta + " " + "tem" + idadePergunta + " " anos de idade, mora no " + " " + localPergunta + " " + "e gosta da cor" + " " + gostoPergunta)

.........

let nomePergunta = prompt("Qual o seu nome ?")
console.log("Resposta:" + " " + nomePergunta)

let sobrenomePergunta = prompt("Qual o seu sobrenome ?")
console.log("Resposta:" + " " + sobrenomePergunta)

let idadePergunta = prompt("Qual é a sua idade?")
console.log("Resposta:" + " " + idadePergunta)

let localPergunta = prompt("Qual estado você mora?")
console.log("Resposta:" + " " + localPergunta)

let gostoPergunta = prompt("Qual sua cor favorita")
console.log("Resposta:" + " " + gostoPergunta)
*/


/* 3 -
 A: 140
 let qlw = 0.5
 let quantidadeQlw = prompt("Qual o valor do quilowatt em sua residencia?")
 let quantidadeConvertido = Number(quantidadeQlw)
 let valorConvertido = quantidadeConvertido * qlw

 console.log("Você pagará em sua casa o valor de: " + " " + valorConvertido + " " + "Reais")

....................

//B: 119
let qlw = 0.5
let quantidadeQlw = prompt("Qual o valor do quilowatt em sua residencia?")
let valorQlw = Number(quantidadeQlw) * qlw

let descontoQlw = prompt("Qual o valor do desconto?")
let valorDesconto = Number(descontoQlw) * valorQlw
let resultDesc = valorDesconto / 100
let aPagar = valorQlw - resultDesc
console.log(aPagar)

*/