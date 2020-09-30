/* Exercício 1

a) Para criar e inicializar um objeto criado a partir de uma classe
b) 1 unica vez
c) Instanciando a classe em outra classe para criar um novo objeto passando os parametros exigidos na classe.
*/

import { JSONFileManager } from './JSONFileManager'

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf(): string {
        return this.cpf
    }
    public setCpf(cpf: string): string {
        return this.cpf = cpf
    }
    public getName(): string {
        return this.name
    }
    public setName(name: string): string {
        return this.name = name
    }
    public getAge(): number {
        return this.age
    }
    public setAge(age: number): number {
        return this.age = age
    }
  }

const user: UserAccount = new UserAccount('123456', 'lais', 24)
//console.log(user)

class Transaction {
    private date: string;
    private value: number;
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
    public getDate(): string {
        return this.date
    }
    public setDate(date: string): string {
        return this.date = date
    }
    public getValue(): number {
        return this.value
    }
    public setValue(value: number): number {
        return this.value = value
    }
    public getDescription(): string {
        return this.description
    }
    public setDescription(description: string): string {
        return this.description = description
    }
}

const userTransaction: Transaction = new Transaction('28/08/2020', 260, 'Shopping')
//console.log(userTransaction)

class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager;

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts
        this.fileManager = new JSONFileManager("data.json")
    }
    public getAccounts(): UserAccount[] {
        return this.accounts
    }
    public setAccounts(accounts: UserAccount[]): UserAccount[] {
        return this.accounts = accounts
    }
    public getFileManager(): JSONFileManager {
        return this.fileManager
    }
    public setFileManager(fileManager: JSONFileManager): JSONFileManager[] {
        return this.fileManager = fileManager
    }
}
