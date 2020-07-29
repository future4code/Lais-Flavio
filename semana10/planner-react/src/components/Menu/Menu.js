import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Tarefas from '../Tarefas/Tarefas'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio'

const Menu = () => {

  const [ days, setDays ] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [taskhour, setTaskHour] = useState("")
  const [id, setId] = useState('')

  const onChangeSelect = (e) => {
      setDays( e.target.value)
  }
  const onChangeDescriptionTask = (e) => {
    setTaskDescription(e.target.value)
}
const onChangeDateTask = (e) => {
  setTaskDate( e.target.value)
}

const onChangeHourTask = (e) => {
  setTaskHour(e.target.value)
}

const onChangeId = e => {
  setId(e.target.value)
}


const handleFormTask = (e) => {
  e.preventDefault()
  const body = {
    id: id,
    day: days,
    text: taskDescription
  }

  axios.post(baseUrl, body)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error.message)
  })
}
/*

*/
  return (
      <form class="menu" onSubmit={handleFormTask}>
        <label for="day-of-the-week">Selecione o dia da semana: </label>
        <select  name="day-of-the-week" id="day-of-the-week" onChange={onChangeSelect} value={days}>
          <option value="" selected >Selecione o dia da semana</option>
          <option value="domingo" >Domingo</option>
          <option value="segunda">Segunda</option>
          <option value="terca">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
        </select>

        <label for="tarefa">Digite a tarefa: </label>
        <textarea id="tarefa" name="tarefa" rows="4" cols="50" 
        placeholder="Escreva sua tarefa aqui!" wrap="off" onChange={onChangeDescriptionTask} value={taskDescription}></textarea>

        <label for="day-task">Data da tarefa: </label>
        <input type="date" id="day-task" alt="day-task" name="day-task" onChange={onChangeDateTask} value={taskDate} />

        <label for="time-task">Hora da tarefa: </label>
        <input type="time" id="time-task" alt="time-task" name="time-task" onChange={onChangeHourTask} value={taskhour} />
        <button>Inserir Tarefa</button>

        <h1>Seu Planner Semanal</h1>
      </form>
  )
}

export default Menu