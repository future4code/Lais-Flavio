import knex from "knex"
import dotenv from "dotenv"
import express from "express"
import { AddressInfo } from "net"
import { v4 } from "uuid"
import { UserDatabase } from "./data/userDatabase"
import { IdGenerator } from "./service/idGenerator"


dotenv.config()

const app = express()
app.use(express.json())

const id = v4()
console.log("Generated Id: ", id)

const userTableName = "User"

const server = app.listen(process.env.PORT || 3003, ()=> {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    }
})

const createUser = async (id: string, email: string, password: string) => {
    await connection
    .insert({
        id,
        email,
        password,
    })
    .into(userTableName)
}

const UserTable = async(id: string, email: string, password: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            CREATE TABLE User (
                id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `)
        return result[0][0]
    }catch(error) {
        console.log(error)
    }
}
console.log(UserTable("101", "user@gmail.com", "abacaxi"))


const userCreate = new UserDatabase()
userCreate.createUser(`${id}`, 'lais@gmail.com', '111222')

console.log('id: ', id)