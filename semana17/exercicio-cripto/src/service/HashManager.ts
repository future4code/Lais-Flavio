import * as bcrypt from 'bcryptjs'


export class HashManager {
    public async hash(
        s: string
    ): Promise<string>{
        const rounds: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(rounds)
        const result: string = await bcrypt.hash(s, salt)
        console.log(result)
        return result
    }
    public async compare(
        s: string,
        hash: string
    ): Promise<boolean>{
        return await bcrypt.compare(s, hash)
    }
}