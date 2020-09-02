import {Client} from './client'
import {Place} from './place'
import {Residence} from './residence'
import {Industry} from './industry'
import { Commerce } from './commerce'

const client: Client = {
  name: 'Gabriel',
  registrationNumber: 1,
  consumeEnergy: 100,
  calculateBill: () => {
      return 2
  }
}
console.log(client)

// const place: Place = new Place('123456')
// console.log(place)

/* 
Exercicio 1
a) name: 'Gabriel',
  registrationNumber: 1,
  consumeEnergy: 100,
  calculateBill: [Function: calculateBill]

  Não sei por que isso aconteceu com certeza

Exercicio 2
a) Cannot create an instance of an abstract class.
b) criando implementações nas filhas
*/

const residence: Residence = new Residence(5, '123456')
const industry: Industry = new Industry(8, '789456')
const commerce: Commerce = new Commerce(4, '456789')