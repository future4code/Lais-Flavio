/*EXERCÍCIO 1

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

Resposta: O resultado impresso no console é 105 
por que o sum recebe o valor de i incrementado e incrementa novamente, ou seja, 
quando i = 1, sum recebe o valor de 1 da variavel i e incrementa +1,
quando i = 2, sum recebe o valor de 2 e incrementa ao valor atual que era 1 e fica com o valor de 3,
quando i = 3, sum recebe o valor de 3 e incrementa ao valor atual de 3, ficando com valor de 6 e assim sucessivamente, até i chegar ao valor 14 e Sum está com o valor de 91,
por ser menos de 15 o loop roda mais uma vez e soma 91 + 14 da variavel i resultando em 105.
*/

/*EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)


Resposta: 

O programa cria uma nova lista com base nos itens da lista que ao dividir pelo numero 5 ou 3 ou 4, 
o resultado seja 0 e adiciona esses itens à nova lista e imprime essa lista

a - .push adiciona um novo item ao final do array
b - (4) [10, 15, 25, 30]
      0: 10
      1: 15
      2: 25
      3: 30
      length: 4
      __proto__: Array(0)

c - numero com o valor de 3:
(6) [12, 15, 18, 21, 27, 30]
0: 12
1: 15
2: 18
3: 21
4: 27
5: 30
length: 6
__proto__: Array(0)

numero com o valor de 4:
[12]0: 12length: 1__proto__: Array(0)


*/

/*EXERCÍCIO 3
a - 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numeroMaior = 0
let numeroMenor = 1000
for (let i = 0; i < arrayOriginal.length; i++){
  let item1 = arrayOriginal[i]

  if(item1 > numeroMaior) {
    numeroMaior = item1
    
  }else if (item1< numeroMenor) {
    numeroMenor = item1
  }
}


console.log(`O maior número é ${numeroMaior} e o menor é ${numeroMenor}`)


b - 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novaLista = []

for(let item of arrayOriginal) {
  novaLista.push(item / 10)
}
console.log(novaLista)


c- 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novaLista = []

for(let item of arrayOriginal) {
  if(item % 2 === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)


d - 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let novaLista = []

// for(let i = 0; i <= arrayOriginal.length -1; i++) {
// console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)

// }

for(let i in arrayOriginal) {
 console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)  
}

*/

/*EXERCÍCIO 4



*/


