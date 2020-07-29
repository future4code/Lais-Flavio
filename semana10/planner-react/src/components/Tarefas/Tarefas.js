import React, {useEffect, useState} from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio'

const Tarefas = () => {
  const [allTask, setAllTask] = useState([])


  useEffect(() => {
    getTask()
  }, [])

  const getTask = () => {
    axios.get(baseUrl)
    .then(response => {
      console.log(response.data)
      setAllTask(response.data)

    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const segundaTeste = allTask.filter(task => {
    if(task.day === "segunda") {
      return true
    }else {
      return false
    }
  })
  const segTasks = segundaTeste.map(task => {
    return <div>
      <p>{task.text}</p>
      <p>{task.day}</p>
    </div>
    })

  return (
    <div class="div-tarefas">
<div class="box bg1">
			<h3>Segunda</h3>
      {segTasks}
		</div>
		<div class="box bg2">
			<h3>Terça</h3>
		</div>
		<div class="box bg3">
			<h3>Quarta</h3>
		</div>
		<div class="box bg4">
			<h3>Quinta</h3>
		</div>
		<div class="box bg1">
			<h3>Sexta</h3>
		</div>
		<div class="box bg2">
			<h3>Sábado</h3>
		</div>
		<div class="box bg3">
			<h3>Domingo</h3>
		</div>
		<div class="box bg4">
			<h3>Filtro</h3>
		</div>
    </div>
  )
}

export default Tarefas