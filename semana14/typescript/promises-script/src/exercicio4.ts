import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


const main = async () => {
    try {
        type body = {
            title: string,
            content: string,
            date: number
        }
        async function createNew(body: body): Promise<void> {
            try {
                const res = await axios.put(`${baseUrl}/news`, body)
                console.log(res.data)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        createNew({
            title: 'Bora virar noticia',
            content: 'Esse foi o último pensamento de Valdete',
            date: Date.now()
        })
    }
    catch (error) {
        console.log(error.message)
    }
}

main()

/*
A) Eu criei uma arrow function, mas não entendi muito bem a diferença pra uma função normal para este exemplo.
*/