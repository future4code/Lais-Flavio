import React from 'react';
import axios from 'axios'
import styled from 'styled-components'


const AppDiv = styled.div`
  width: 100;
  height: 200;
  margin: 30px auto;
  justify-content: center;
`
 
const AcessarList =  styled.div`
  margin-left: 660px;
  padding: 30px;
  border: none;
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
`

class App extends React.Component {
  state= {
    nome: '',
    email: '',
    listaNomes: []
  }

  componentDidMount = () => {
    this.pegaNomes()
  }

  pegaNomes = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "lais-flavio-turing"
      }
    }).then(response => {
      this.setState({ listaNomes: response.data})
      console.log(response.data)
    }).catch(error => {
      console.log(error.data)

    })
  }

  criaListaNomes = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "lais-flavio-turing"
      }
    }).then(response => {
        this.pegaNomes()
        this.setState({ nome: "" , email: ""})
      alert("Usuário criado com sucesso")
    }).catch(error => {
      console.log(error.data)
      alert("Não foi possível criar seu usuário")
    })
  }

  onChangeNome = event => {
    this.setState({ nome: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value })
  }

  render(){
    return (
      <AppDiv>
        <FormUsers>
          <label>Nome: </label>
          <InputForm 
            value={this.state.nome}
            onChange={this.onChangeNome}
            placeholder={"Digite seu nome"}
          />
          <label>Email: </label>
          <InputForm 
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder={"Digite seu email"}
          />
          <ButtonAlteraTela onClick={this.criaListaNomes}>Salvar</ButtonAlteraTela>
        </FormUsers>
        <AcessarList>
          <ButtonAlteraTela>Lista de Usuários</ButtonAlteraTela>
        </AcessarList>
        {this.state.listaNomes.map(nomesLista => {
            return <p>{nomesLista.name}</p>
        })}
      </AppDiv>
    );
  }
}

export default App;
