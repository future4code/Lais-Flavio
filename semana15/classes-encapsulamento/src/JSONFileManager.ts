import fs from 'fs'

export class JSONFileManager {
    private fileName: string

    constructor(fileName: string){
        this.fileName = fileName
    }
    public readDataBase(): Object {
        try {
            const fileData: string = fs.readFileSync(this.fileName).toString()
            console.log(fileData)
            return JSON.parse(fileData)
        }catch(error) {
            console.log(`Erro ao ler a base de dados: ${error.message}`)
            return []
        }
    }
    public writeInJson(data: any): void {
        try {
        const dataAsString: string = JSON.stringify(data, null, 2)
        fs.writeFileSync(this.fileName, dataAsString)
        } catch(error) {
            console.log(`Erro ao escrever na base de dados: ${error.message}`)
        }
    }
}