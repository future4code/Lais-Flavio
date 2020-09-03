import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


const main = async (): Promise<any[]> => {
    try {
        const res = await axios.get(`${baseUrl}/subscribers/all`)
            console.log(res.data)
            return res.data
    }
    catch (error) {
        console.log(error.data)
        return error.data
    }
   
}

console.log(main())


/*
A) Quando vamos fazer uma função com arrow function, atribuímos a uma const e o async vai após o sinal de atribuição.
Uma função nomeada usamos a palavra reservada function e o async vem antes de function
*/