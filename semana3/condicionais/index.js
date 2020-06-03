/* EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Resposta: 
Na primeira linha é criada uma variável do tipo constante que solicita um numero para o usuário
Na segunda linha é criada outra constante que armazena o número convertido de string para Number, texto para número, pela função Number
Na quarta linha é feita a verificação do número armazenado na constante numero, 
se o número dividio por 2 é igual a zero, se ele é par ou não. 
Se verdadeiro, exibe no console do navegador a msg "passou no teste" para números pares, senão cai no else e exibe a msg "nao passou no teste" para numeros impares
*/ 

/* EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

Resposta: 
a:
Na primeira linha, cria-se uma variável do tipo let que solicita uma informação ao usuário e armazena a informação digitada
Na segunda linha é criada uma variável do tipo let preco mas não é atribuído um valor a ela
Na terceira linha começa as regras das instruções, iniciando pelo operador condicional switch que recebe como parâmetro a variável fruta. 
O programa verifica a fruta digitada e compara com as opções, caso satisfaça uma das opções, retorna uma mensagem e o valor atribuído à variavel preco de acordo com a fruta escolhida

b:
Caso o valor digitado seja "Maça", o console vai imprimir a frase: O preço da fruta Maçã é R$ 2.25 pois atribui o valor de 2.25 à variável preço no caso da maça e assim sucessivamente.

c: R$ 24,55

d: O preço da fruta  Pêra  é  R$  5

*/

/* EXERCÍCIO 3

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

Resposta:

A mensagem do terminal seria: Uncaught ReferenceError: mensagem is not defined
Motivo: As constantes numero1 e numero2 foram criadas no escopo global, 
então a primeira condicao e a segunda tem acesso a elas. 
No primeiro if é declarado uma variável mensagem mas nenhum valor é atribuido a ela.
O segundo if criado dentro do bloco do primeiro if, recebe os mesmos parâmetros que o if pai,
E é atribuído as mensagens caso as validações dos números fossem satisfeitas,
Mas não é possível gerar as mensagens por que o console.log chamando essa variavel mensagem está fora do escopo.
Para funcionar, o console.log deveria estar dentro do else, pois mesmo no segundo if daria erro, 
já que o else não conseguiria acessá-lo por estar fora do escopo do bloco de instrução.

O código correto seria:

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
    console.log(mensagem)
  }
}

 */

/*EXERCÍCIO 4

a: 
let n1 = prompt("Digite um número, por favor?")
let n2 = prompt("Digite outro número, por favor?")

 if(n1 > n2) {
  console.log(n1 + " , " + n2)
 } else {
   console.log(n2 + " , " + n1)
 }

 if(n1 >= n2) {
   console.log(n1 + " , " + n2)
 } else {
   console.log(n2 + " , " + n1)
 }

 Ao testar com o números iguais, imprimiu os dois números na segunda condição

 let n1 = prompt("Digite um número, por favor?")
 let n2 = prompt("Digite outro número, por favor?")

 if(n1 > n2) {
  console.log("Eu sou o número1" + " " + n1 + " , " + n2)
 } else {
   console.log("Eu sou o número2" + " " + n2 + " , " + n1)
 }


 b: 

 let n1 = prompt("Digite um número, por favor?")
 let n2 = prompt("Digite outro número, por favor?")
 let n3 = prompt("Digite um terceiro número, por favor?")


 if((n1 > n2) && (n1 > n3 ) && (n2 < n1) && (n2 > n3) && (n3 < n1) && (n3 < n2)) {
 console.log(n1 + " , " + n2 + " , " + n3)
} else if((n1 < n2) && (n1 < n3 ) && (n2 > n1) && (n2 > n3) && (n3 > n1) && (n3 < n2)) {
  console.log(n2 + " , " + n3 + " , " + n1 )
} else if((n1 < n2) && (n1 < n3 ) && (n2 > n1) && (n2 < n3) && (n3 > n1) && (n3 > n2)) {
  console.log(n3 + " , " + n2 + " , " + n1 )
}else if((n3 > n2) && (n3 > n1 ) && (n2 < n1) && (n2 < n3) && (n1 < n3) && (n1 > n2)) {
  console.log(n3 + " , " + n1 + " , " + n2 )
} else if ((n1 > n2) && (n1 > n3 ) && (n3 > n2) && (n3 < n1) && (n2 < n3) && (n2 < n1)) {
   console.log(n1 + " , " + n3 + " , " + n2 )
} else if ((n2 > n1) && (n2 > n3 ) && (n1 < n2) && (n1 > n3) && (n3 < n1) && (n3 < n2)) {
  console.log(n2 + " , " + n1 + " , " + n3 )
}
 else {
  console.log("Digite um número válido")
}


 c: 

let n1 = prompt("Digite um número, por favor?")
let n2 = prompt("Digite outro número, por favor?")
let n3 = prompt("Digite um terceiro número, por favor?")



 if((n1 === n2) && (n1 === n3 ) || (n2 === n1) && (n2 === n3) || (n3 === n1) && (n3 === n2)) {
  alert("Digite um número diferente, por favor!")
 } else {
   console.log(n1, n2, n3)
 }


*/

 



/* EXERCÍCIO 5

A : https://docs.google.com/presentation/d/1vYSi9wCBGS8fiGXkU4Gfl5YgVCqJdRBK-5l4h6dmGYA/edit?usp=sharing 

b:

let vertebrado = true
let pelugem = true
let mamifero = "humano"
let ave = true
let terrestre = true

let pergunta1 = prompt("Possui ossos formando esqueleto?")
let pergunta2 = prompt("Possui pelos?")
let pergunta3 = prompt("É mamífero?")
let pergunta4 = prompt("pensa?")
let pergunta6 = prompt("É terrestre?")
let pergunta5 = prompt("Tem penas?")
let pergunta7 = prompt("vive uma parte da vida na água?")



if((pergunta1 === "sim") && 
(pergunta2 === "sim") && 
(pergunta3 === "sim") && 
(pergunta4 === "sim")){
  console.log("É um ser humano")
} else if((pergunta1 === "sim") && (pergunta2 === "não") && (pergunta5 === "sim")) {
  console.log("É uma ave")
} else if((pergunta1 === "sim") && (pergunta2 === "sim") && (pergunta4 === "não")){
  console.log("É um mamífero não humano")
}else if((pergunta1 === "sim") 
&& (pergunta2 === "não") 
&& (pergunta3 === "não") 
&& (pergunta6 === "sim") && (pergunta7 === "sim")) {
  console.log("é anfíbio")
}else {
  console.log("É um réptil")
}





*/

