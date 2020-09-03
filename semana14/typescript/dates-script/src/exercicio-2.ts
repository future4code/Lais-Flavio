import moment from 'moment'
moment.locale('pt-br')

type event = {
    name: string,
    description: string,
    dateInit: moment.Moment 
    dateFinish: moment.Moment 
}

const eventsAll: event[] = [
    {
        name: 'Show do Caetano',
        description: 'Caetano cantará seus clássicos',
        dateInit: moment('10/10/2020 10:00'),
        dateFinish: moment('10/10/2020 12:00')
    },
    {
        name: 'Partiu Deserto do Atacama',
        description: 'Desfrute do melhor do Atacama',
        dateInit: moment('2/12/2021 6:00'),
        dateFinish: moment('2/12/2021 7:00')
    }
]


function showEvents(eventsAll: event[]): void {
    const infoEvents = eventsAll.map((event: event) => {
        console.log (`
        Nome: ${event.name}
        Horário de início: ${event.dateInit.format('dddd, DD [de] MMMM [de] YYYY HH:mm ')}
        Horário de fim: ${event.dateFinish.format('dddd, DD [de] MMMM [de] YYYY HH:mm ')}
        Descrição: ${event.description}
        `
        )
    })
} 

console.log(showEvents(eventsAll))


//B) Usando o utcOffset ou somando + 4 que é a diferença de horário pro Brasil