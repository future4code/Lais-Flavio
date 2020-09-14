import {readDatabase, writeToDatabase} from './index'
import { type } from 'os'
import moment from 'moment'

type dataUsers = {
    name: string,
    cpf: string,
    birthDate: moment.Moment,
    extract: {
        sale: number,
        date: moment.Moment
        description: string
    }
  }


const createAccount = async(dataUsers: dataUsers): Promise<any> => {
    const users = readDatabase()
    users.push(dataUsers)
    writeToDatabase(users)
}

createAccount({
    name: 'Mauricio',
    cpf: '11648759263',
    birthDate: moment('12/04/1986'),
    extract: {
    sale: 0,
    date: moment('09/08/2020'),
    description: 'Viagem pra França'
    }
})