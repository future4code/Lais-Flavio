import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


type User = {
    id: string,
    name: string,
    email: string
}

const getUsers = async (): Promise<User[]> => {
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

getUsers()


const sendMessage = async (res: User[], message: string): Promise<void> => {
    const arrayUsers: Promise<any>[] = []
    try{
        for(let user of res) {
            arrayUsers.push(
                axios.post(`${baseUrl}/notifications/send`,{
                subscriberId: user.id,
                message: 'Acho que enviei todas'
                })
            )      
        }
        await Promise.all(arrayUsers);
        console.log("Mensagens enviadas")
    }
    catch (error) {
        console.log(error.data)
        return error.data
    }
}

sendMessage()
/*
A) Envia todas as mensagens de uma vez para cada usuário
B) Não precisar iterar sobre cada um deles

Não estou sabendo chamar essa função.
*/