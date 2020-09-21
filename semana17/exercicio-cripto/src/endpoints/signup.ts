import express, { Request, Response } from "express"
import { BaseDatabase } from "../data/BaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../service/auth"
import { HashManager } from "../service/HashManager"
import { IdGenerator } from "../service/IdGenerator"

const app = express()

//export const 
app.post("/signup",async(req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        }
       
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager: HashManager = new HashManager()
        const hashPassword: string = await hashManager.hash(userData.password)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(
            id,
            userData.email,
            hashPassword   
        )
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id,
            role,
        })
        res.status(200).send({
            token,
        })
    } catch(error) {
        res.status(400).send({
            message: error.message
        })
    }finally {
        await BaseDatabase.destroyConnection()
    }
})