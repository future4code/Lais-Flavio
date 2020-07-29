import React, {  }from 'react'
import styles from './styles'

const Menu = () => {

  return (
    <form>
      <label for="day-of-the-week">Selecione o dia da semana: </label>
      <select name="day-of-the-week" id="day-of-the-week">
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda</option>
        <option value="terca">Terça</option>
        <option value="quarta">Quarta</option>
        <option value="quinta">Quinta</option>
        <option value="sexta">Sexta</option>
        <option value="sabado">Sábado</option>
      </select>

      <label for="tarefa">Digite a tarefa: </label>
      <textarea id="tarefa" name="tarefa" rows="4" cols="50"></textarea>

      <label for="day-task">Data da tarefa: </label>
      <input type="date" id="day-task" alt="day-task" name="day-task"/>

      <label for="time-task">Hora da tarefa: </label>
      <input type="time" id="time-task" alt="time-task" name="time-task" />
    </form>
  )
}

export default Menu