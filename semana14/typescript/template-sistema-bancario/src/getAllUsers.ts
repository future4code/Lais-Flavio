import fs from 'fs'

const data: string = fs.readFileSync("./data.json").toString()

console.log(data)