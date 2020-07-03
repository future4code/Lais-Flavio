import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Detalhe from './Detalhe'


const DeleteButton = styled.span`
  width: 150px;
  height: 35px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 25px;
  padding: 8px 0 0px 36px;
  color: #FFF;
  background: red;
  border: none;
  border-radius: 10px;
  outline: 0;
`

const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}

const ListaDeNomes = styled.li`
  display: flex;
  justify-content: center;
  align-items: row;
  margin: 16px;
  padding: 16px;
  `

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
class Lista extends React.Component { 
  state= {
    listaNomes: [],
    mudaTela: "detalhes",
    renderizaTela: false
  }

  componentDidMount = () => {
    this.pegaNomes()
  }

  pegaNomes = () =>{
    axios.get(baseUrl, axiosConfig) 
    .then(response => {
      this.setState({ listaNomes: response.data})
      console.log(response.data)
    }).catch(error => {
      console.log(error.message)
    })
  }

  deletaNomes = (usuarioId) => {
    axios.delete(`${baseUrl}/${usuarioId}`, axiosConfig)
     .then(response => {
       if(window.confirm("Tem certeza de que deseja deletar?")){
        this.pegaNomes()
       }
    }).catch(error => {
      console.log(error.message)
    })
  }



  render() {
    
    return (
      <div>
          <ul>
            {this.state.listaNomes.length === 0 && <div>Carregando...</div>}
            {this.state.listaNomes.map(nomesLista => {
              return <ListaDeNomes key={nomesLista.id}> {nomesLista.name}  <DeleteButton onClick={() => {this.deletaNomes(nomesLista.id)}}>Apagar</DeleteButton></ListaDeNomes>
        })}
        </ul>
    </div>
    )
  }
}

export default Lista