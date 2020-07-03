import React from 'react'
import styled from 'styled-components'
import axios from 'axios'



const ButtonAlteraTela = styled.button`
  width: 150px;
  height: 35px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  margin-top: 25px;
  background: #0693FF;
  color: #FFF;
  border: none;
  border-radius: 10px;
  outline: 0;
`

const FormUsers = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  color: #218AC0;
  font-weight: bold;
  border: 1px solid  #218AC0;
`

const InputForm = styled.input`
  height: 26px;
  margin-top: 8px;
  border: 1px solid  #218AC0;
  border-radius: 10px;
  outline: 0;
`

const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
};

class Cadastro extends React.Component {
  state = {
    name: '',
    email: '',
  }

  onChangeNome = event => {
    this.setState({ name: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value })
  }

  
  criaListaNomes = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body , axiosConfig
    ).then(() => {
        alert("Usuário criado com sucesso") 
        this.setState({ name: "" , email: ""})
    }).catch(error => {
      alert("Não foi possível criar seu usuário")
      console.log(error.message)
    })
  }
  render() {
    return (
      <div>
        <FormUsers>
          <label>Nome: </label>
          <InputForm
            type="text" 
            value={this.state.name}
            onChange={this.onChangeNome}
            placeholder={"Digite seu nome"}
          />
          <label>Email: </label>
          <InputForm
            type="email" 
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder={"Digite seu email"}
          />
          <ButtonAlteraTela onClick={this.criaListaNomes}>Salvar</ButtonAlteraTela>
        </FormUsers>
        </div>
    )
  }
  
}

export default Cadastro