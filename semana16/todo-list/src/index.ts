import knex from "knex"
import dotenv from "dotenv"
import express, {Request, Response} from "express"

const app = express()
dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host:process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
})

async function createUserTable(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE ToDoListUser (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NULL,
                nickname VARCHAR(255) UNIQUE,
                email VARCHAR(255) UNIQUE
            )
        `)
        console.log("Tabela criada com sucesso!")
    }catch(error) {
        console.log(error.message)
    }
}
// createUserTable()

async function createNewUser(newId: string, newName: string, newNickname: string, newEmail:string): 
Promise<void> {
    try {
        await connection.raw(`
        INSERT INTO ToDoListUser(id, name, nickname, email)
        VALUES (
            ${newId},
            ${newName},
            ${newNickname},
            ${newEmail}
        )
        `)
        console.log("Usuário criado com sucesso!")
    }catch(error) {
        console.log(error)
    }
}

 createNewUser("1", "Astro Dev", "astrodev", "astro@dev.com")

async function createListTaskTable(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE ToDoListTask (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id VARCHAR(255),
                FOREIGN KEY(creator_user_id) REFERENCES ToDoListUser(id)
            )
        `)
    }catch(error) {
        console.log(error.message)
    }
}
// createListTaskTable()

async function createUserResponsibleandTask(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE ToDoListResponsibleTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES ToDoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES ToDoListUser(id)
            )
        `)
    }catch(error) {
        console.log(error.message)
    }
}

// createUserResponsibleandTask()

app.get('/user', async (req: Request, res: Response)=> {
    try {

    }catch(error) {
        console.log(error.message)
    }
})