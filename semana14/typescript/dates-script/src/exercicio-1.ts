import moment from 'moment'

type event = {
    name: string,
    description: string,
    dateInit: moment.Moment,
    dateFinish: moment.Moment
}

const eventsAll: event[] = [
    {
        name: 'Show do Caetano',
        description: 'Caetano cantará seus clássicos',
        dateInit: moment('10/10/2020 10:00', 'DD/MM/YYYY HH:mm'),
        dateFinish: moment('10/10/2020 12:00', 'DD/MM/YYYY HH:mm')
    },
    {
        name: 'Partiu Deserto do Atacama',
        description: 'Desfrute do melhor do Atacama',
        dateInit: moment('18/12/2020 6:00', 'DD/MM/YYYY HH:mm'),
        dateFinish: moment('25/12/2020 7:00', 'DD/MM/YYYY HH:mm')
    }
]

console.log(eventsAll)