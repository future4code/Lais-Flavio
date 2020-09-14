import * as jwt from "jsonwebtoken"
import express from "express"


export class Authenticator {
    private static EXPIRES_IN = "1min"
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
          { 
            id: input.id,
          },
            process.env.JWT_KEY as string,
          {
            expiresIn: Authenticator.EXPIRES_IN,
          }
        )
        return token
    }
}

interface AuthenticationData {
    id: string
}

const app = express()

app.post("/signup", async (req: Request, res: Response)=> {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Email ou senha incorretos")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        }
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const userDb = new UserDatabase()
        await userDb.createUser(id, userData.email, userData.password)

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
          id,
        });
        res.status(200).send({
            token,
          });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });      
    }
})
