/*Exercício 1 

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

const resultado = minhaFuncao(8)
console.log(resultado)

Resposta:

a - Retorna um array vazio por que o j  não 
-----------------
b-
(6) [0, 1, 0, 1, 2, 3]

--------------------
c- 
(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

---------------------------------------------------------------------

*/

/* Exercício 2
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

Resposta:

a -

0
2
undefined
---------------
b - 
2 
3
0

let arrayDeNomes = [1,  2,  3,  4,  5];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, 3));
console.log(funcao(arrayDeNomes, 4));
console.log(funcao(arrayDeNomes, 1));
---------------------------------------------------------------------

*/

/*Exercício 3
Resposta: Adiciona ao arrayFinal os resultados de resultadoA somando e os resultadosB multiplicados

const array = [1, 2, 3, 4, 5]

function somaEMultiplica(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;

  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;

}

console.log(metodo(array))

---------------------------------------------------------------------

*/


/* Exercício 4

a-

 let calculoIdadeDeCachorro = (idadeHumano, idadeCachorro) => {
  let idadeACalcular = Number(prompt("Qual a idade humana do seu cão?"))
  let result = idadeACalcular *7
  if(idadeACalcular) {
      console.log("A idade do seu cão é: " + result)
   }else{
     console.log("Idade inválida")
   }
 }

 const resultado= calculoIdadeDeCachorro(1, 7)

---------------------------------------------------------------------


b - 

let informacoesPessoais = (nome, idade, endereco, estudante) => {
  if(estudante === true) {
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou estudante`)
  }else{
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e não sou estudante`)
  }return 
}

const resultado = informacoesPessoais("Goli", 23, "Rua Guarapari 190", true )

---------------------------------------------------------------------

 */

 /*Exercício 5



---------------------------------------------------------------------
 */

 /*Exercício 6
 a-

 function tamanhoArray(array) {
  for (let i = 0; i < array.length; i++) {
   
  }return array.length
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const resultado = tamanhoArray(array)
console.log("O tamanho do array é: ", resultado)
-----------

 function tamanhoArray(array) {
  for (let i = 0; i < array.length; i++) {
   
  }return array.length-1
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const resultado = tamanhoArray(array)
console.log("O tamanho do array é: ", resultado)

---------------------------------------------------------------------

b-

const parOuImpar = (par) => {
 // let numero = Number(prompt("Digite um número"))

  if(par %2 ===0) {
    console.log(`O numero ${par} é par`)
  }else {
    console.log(`O numero é ímpar`)
  }return par
}
const resultado = parOuImpar(2)
--------------
const parOuImpar = (par, impar) => {
  let numero = Number(prompt("Digite um número"))

  if(numero %2 ===0) {
    console.log(`O numero ${numero} é par`)
  }else{
    console.log(`O numero ${numero} é ímpar`)
  }return 
}

parOuImpar()

--------------------------------------------------------------------------

c - 
const parOuImpar = (array) => {
  for(element of array) {
    if(element%2 ===0) {
    console.log(element)
    }
  }
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

parOuImpar(array)

-----------------------------------------------------------------------------

d - 
const parOuImpar = (par) => {
 // let numero = Number(prompt("Digite um número"))

  if(par %2 ===0) {
    console.log(`O numero ${par} é par`)
  }else {
    console.log(`O numero é ímpar`)
  }return par
}
const resultado = parOuImpar(2)


const numeroParOuImpar = (array) => {
  for(let i = 0; i< array.length; i++) {
  parOuImpar(array[i])
  }
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

numeroParOuImpar(array)


 */

/*
const retornaSeculo = (ano) => {
  for (let i = 0; i < ano; i++) {

  }
}
const array = []
const resultado = retornaSeculo(2020)

*/

const arrayRomanos = ["I","II","III","IV","V","VI","VII","VIII",'IX',"X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"]
let arrayAnos = []

const anos = (anoDc) => {
  let anoInicial = 1000
  let anoFinal = 2020
for (let i = 0; i <= arrayRomanos.length -1; i++) {
  for(; anoInicial <= anoFinal; anoInicial +100) {
  console.log(`O ano ${anoInicial} pertence ao século ${arrayRomanos[i]}`)

  }
  
}
}

anos(1050)