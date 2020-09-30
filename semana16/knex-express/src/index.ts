import knex from 'knex'
import dotenv from "dotenv"
import express from "express"
import { AddressInfo } from 'net'

dotenv.config()

const app = express()
app.use(express.json())
const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server`)
    }
})



const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
})

const getActorById = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
      `)
    
      return result[0][0]
    }catch (error){
        console.log(error)
    }

}

console.log(getActorById("002"))



const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"`)
    return result
}

console.log(searchActor("Tony"))

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };

  console.log(countActors("male"))

  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

