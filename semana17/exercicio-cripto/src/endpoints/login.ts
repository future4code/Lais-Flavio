import express, { Request, Response } from "express"
import { BaseDatabase } from "../data/BaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../service/auth"
import { HashManager } from "../service/HashManager"

const app = express()
//export const
 app.post("/login", async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        if(!req.body.email || req.body.email.indexOf('@')=== -1) {
            throw new Error("Insira todas as informações para o cadastro")
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(userData.email)

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(
            userData.password, user.password
        )
        if(!compareResult) throw new Error("Usuário ou senha inválido")

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })
        res.status(200).send({
            message: "Usuário logado com sucesso",
            token
        })
    }catch(error) {
        res.status(400).send({
            message: error.message
        })
    }finally{
        await BaseDatabase.destroyConnection()
    }
})