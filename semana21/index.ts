//Ex 1

const crescente = (n: number) => {
    for(let num = 0; num <= n; num++) {
        crescente(n-1)
        console.log(n)
    }
}

console.log(crescente(5))

const decrescente = (num: number) => {
    if(num >= 0) {
        console.log(num)
        decrescente(num - 1)
    }
}

console.log(decrescente(5))

// const arrayNumbers: number[] = [2, 5, 21, 45, 1, 11 ]
// let arraySort: number[] = arrayNumbers.sort((n1, n2) => n1 - n2)
// console.log(arraySort)

// Ex2

const somaInt = (nInt: number, num: number = 0) => {
    if(nInt === 0) {
        return num
    }
    return somaInt(nInt - 1, num + nInt)
}
console.log(somaInt(5))