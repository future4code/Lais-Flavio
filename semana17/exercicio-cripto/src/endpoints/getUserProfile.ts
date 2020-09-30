import { Request, Response } from "express"
import { BaseDatabase } from "../data/BaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../service/auth"

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await UserDatabase.getUserById(authenticationData.id)

        if(!user) {
            throw new Error("Usuário não existe")
        }
        if(authenticationData.role !== "ADMIN") {
            throw new Error("Usuário não autorizado")
        }
        res.status(200).send(user)
    }catch(error) {
        res.status(error.statusCode || 400).send({
            message: error.message
        })
    }finally {
        await BaseDatabase.destroyConnection()
        }
}
