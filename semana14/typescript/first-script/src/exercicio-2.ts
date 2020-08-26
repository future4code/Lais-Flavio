
// Exercício 2
/* A)
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2, 3, 4, 5]))


Resposta:
Saída: {maior: 5, menor: 1, media: 3}

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados= numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([1, 2, 3, 4, 5]))

*/
/* B)

function obterEstatisticas(numeros: number[] = [1, 2, 3, 4, 5]) {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

*/

/* C incompleta
function obterEstatisticas(numeros: number[] = [1, 2, 3, 4, 5]) {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeIdades = {
    numeros: Array<number>,
    obterEstatisticas: number
}

const idade : amostraDeIdades = {
    numeros:  [21, 18, 65, 44, 15, 18],
    obterEstatisticas: numeros
}


*/