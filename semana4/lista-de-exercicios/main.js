// Exercícios de interpretação de código

/*
1-
Função criada para converter o dólar para real, inicia com a função declarada passando por parametro valorEmDolar. 
A constante cotacao recebe o valor de cotação do dólar do usuario, e a função retorna a multiplicação do valorEmDolar e a cotação.
A função é chamada através da constante meuDinheiro que recebe a função com o valor do parametro e imprime no console o resultado.

2-
Função criada para tratar os tipos de investimento retornando qual rendimento terá dependendo do tipo de investimento.
Inicia-se declarando a função e passando 2 parâmetros. É criada uma variável que receberá o resultado após o investimento.
É criado uma estrutura condicional com switch/case recebendo tipoDeInvestimento como parâmetro e é verificado se é poupança, renda fixa, CDB ou Ações.
Cada tipo multiplica valor do investimento por seu valor de rendimento. Caso satisfaça uma das opções, a verificação pára.
Caso não satisfaça nenhuma delas, uma  mensagem de alerta é acionada exibindo tipo incorreto.  A função retorna a variavel valorAposInvestimento.
São declaradas 2 constantes que recebem e chamam a função com seu tipo de investimento e o valor investido e é exibido no console o rendimento.

3-
Criado 3 arrays, sendo 2 vazios. O primeiro contém os numeros que serão verificados se são pares ou ímpares. 
É criado um loop para percorrer o array e caso o módulo do numero dividido por 2 seja igual a 0, é enviado para o array1 por que é par,
caso não seja, é enviado para o array2 por ser ímpar. No console é exibido 3 mensagens: A primeira exibe o total de números no array usando .length
A segunda mensagem exibe a quantidade de numeros pares no array1 e a terceira no array2 que possui os números ímpares.

4-
É percorrido o array numeros com for of, onde caso numero do array seja menor que o numero contido na variavel numero1 que tem o valor infinito, essa variável recebe o valor de numero,
e caso numero seja maior que o numero 0 da variavel numero2, numero2 recebe o valor de número. As mensagens que seriam impressas no console seriam:
numero1 receberá o valor de -10 que é o menor numero do array. A variavel numero2 receberá 1590 que é o maior numero do array.
*/

// Exercícios de lógica de Programação

/*
1- 
for/of, for/in, for/each

const array = [1, 2, 3, 4, 5]
const arraySoma = []
for(n of array){
  arraySoma.push(n + n)
}
console.log(arraySoma) 

resultado: 2, 4, 6, 8, 10

2-
a - false
b - true
c - false
d - true
e - true

3-
const quantidadeDeNumerosPares = 3
let i = -1
while(i <= quantidadeDeNumerosPares) {
  i++
  if(i%2 ===0){
  console.log(i)
  }
}

4-
function trigonometria(a, b, c) {

  if ((a === b)&& (a ===c) && (b === c)) {
    console.log("Equilátero")
  }else if ((a ===b) && (a !== c) || (a !== b) && (a === c) || (b === c) && (b !== a)){
    console.log("Isósceles")
  } else if ((a !== b) && (a !== c) && (b !==c)) {
    console.log("Escaleno")
  }
}
const resultado = trigonometria(58, 56, 55)
console.log(resultado)

5-
const numero1 = 15
const numero2 = 30

if(numero1 > numero2) {
  console.log("O maior é: " + numero1)
}else {
  console.log("O maior é: " + numero2)
}

if(numero1 % numero2 !== 0) {
  console.log(`${numero1} não é divisível por ${numero2}`)
}else if(numero2 % numero1 !== 0) {
  console.log(`${numero2} não é divisível por ${numero1}`)
}

if((numero1 % numero2 === 0) || (numero1 / numero2 === 2 )){
  console.log(`${numero1} é divisível por ${numero2}`)
}else if((numero2 % numero1 === 0) || (numero2 / 2 === 0)) {
  console.log(`${numero2} é divisível por ${numero1}`)
}

if (numero1 < numero2) {
  const diferenca = numero2 - numero1
  console.log(`A diferença entre eles é: ${diferenca}`)
} else if(numero1 > numero2) {
  const diferenca = numero1 - numero2
  console.log(`A diferença entre eles é: ${diferenca}`)
}

*/

// Exercícios de Funções

/*
1-
const array = [55, 42, 98, 2, 4, 63, 23, 15]
function MaiorEMenor (array) {
}
const resultado = MaiorEMenor(array[0])
console.log(resultado)

falta esse

2-
const alerte = function() {
  alert("Hello Labenu")
}

const resultado = alerte()
*/

//Exercícios de Objetos

/*
1-
Objetos são extruturas para representação do mundo real e o array nos permite guardar várias informações ao mesmo tempo de forma ordenada

2-
function criaRetangulo(lado1, lado2) {

  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2*(lado1 + lado2),
    area: lado1 * lado2
  }
  return (`A largura do retangulo é: ${retangulo.largura}, a altura é: ${retangulo.altura}, o perímetro é: ${retangulo.perimetro} e a área é: ${retangulo.area}`)
}

const resultado = criaRetangulo(55, 24)
console.log(resultado)

3-
const filmeFavorito = {
  titulo: "A família do futuro",
  ano: 2007,
  diretor: "Stephen J. Anderson",
  atores: ["Lewis", "Wilbur", "Goob - o cara do chapéu-coco"]
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, 
de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor},
e estrelado por: ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]} e ${filmeFavorito.atores[2]} `)

4-
const pessoa = {
  nome: "Gabriel",
  idade: 29,
  email: "gb@gmail.com",
  endereco: "Rua dos passinhos"
}

const anonimizarPessoa =  {
    ...pessoa,
  nome: "Anônimo"

}

const resultado = anonimizarPessoa
console.log(resultado)

*/

//Exercícios de Funções de array

/*
1-
a:

const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = []

const novoArray = () => {
  
  for(pessoa of pessoas ) {
    if(pessoa.idade >= 20) {
    adultos.push(pessoa)
    console.log(adultos)
    }
  }
}
novoArray()

b:
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const menoresDeIdade = []

const novoArray = () => {
  
  for(pessoa of pessoas ) {
    if(pessoa.idade < 20) {
    menoresDeIdade.push(pessoa)
    console.log(menoresDeIdade)
    }
  }
}
novoArray()

*/



