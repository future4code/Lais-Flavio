//Exercício 1


/* A)

let minhaString: string ='abacadabra'
minhaString: number = 2

Resposta: 'number' only refers to a type, but is being used as a value here.
            Não permite alterar o valor
*/

/* B) 
let meuNumero: number = 2
-----
let meuNumero: any
meuNumero = 2
meuNumero = 'abacaxi'
*/

/* C)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const lais: pessoa = {
    nome: 'lais',
    idade: 24,
    corFavorita: 'vermelho'
}
*/

/* D)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const lais: pessoa = {
    nome: 'lais',
    idade: 24,
    corFavorita: 'vermelho'
}
const gabriel: pessoa = {
    nome: 'Gabriel',
    idade: 29,
    corFavorita: 'azul'
}
const ana: pessoa = {
    nome: 'Ana',
    idade: 16,
    corFavorita: 'amarelo'
}
const leo: pessoa = {
    nome: 'Leonardo',
    idade: 54,
    corFavorita: 'preto'
}
*/
/* E)
enum CoresArcoIris  {
    AMARELO = "AMARELO",
    VERMELHO = "VERMELHO",
    LARANJA = "LARANJA",
    VERDE = "VERDE",
    AZUL = "AZUL",
    ANIL = "ANIL",
    VIOLETA = "VIOLETA"
}


type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const lais: pessoa = {
    nome: 'lais',
    idade: 24,
    corFavorita: CoresArcoIris.VERMELHO
}
*/


