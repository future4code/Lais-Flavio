import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const signUp = async (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const role = req.body.role
    
        if(!name || !email || !password || !role) {
            throw new Error("Incorrect Informations")
        }
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
        
        const hashManager = new HashManager()
        const hash = await hashManager.hash(password)

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(id, name, email, hash, role)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id
        })

        res.status(200).send({
            message: "Create user as successfully!",
            token
        })
    

    } catch(error) {
        res.status(400).send({
            message: error.message
        })
    }
    
}