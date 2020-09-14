import { Place } from "./place";
import { Client } from "./client";

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep)
    }
}
/*
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumerEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }
    public getCpf(): string {
        return this.cpf
    }
    public calculateBill(): number {
        return this.consumerEnergy * 0.75
    }
}
*/