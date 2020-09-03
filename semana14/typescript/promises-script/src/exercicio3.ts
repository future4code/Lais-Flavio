import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


type User = {
    id: string,
    name: string,
    email: string
}

const main = async (): Promise<User[]> => {
    try {
        const res = await axios.get(`${baseUrl}/subscribers/all`)
        console.log(res.data)
        return res.data.map((res: any) => {
            return {
            id: res.id,
            name: res.name,
            email: res.email
            }
        })
    }
    catch (error) {
        console.log(error.data)
        return error.data
    }
}

main()


/*
A)Não. Pois estão tipados.
B) Pra termos um controle melhor do que ela está retornando. 
Ela vai interar sobre cada item para retornar.
*/