import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

async function main(): Promise<any> {
    try {
        const res = await axios.get(`${baseUrl}/subscribers/all`)
            console.log(res.data)
    }
    catch (error) {
        console.log(error.data)
    }
   

}

main()

/* 
A) get
B) any
*/