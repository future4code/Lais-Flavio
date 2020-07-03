import React from 'react';
import styled from 'styled-components'
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';


const AppDiv = styled.div`
  width: 100;
  height: 200;
  margin: 30px auto;
  justify-content: center;
`

const ButtonAlteraTela = styled.button`
  width: 150px;
  height: 35px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  margin-left: 690px;
  margin-top: 35px;
  background: #0693FF;
  color: #FFF;
  border: none;
  border-radius: 10px;
  outline: 0;
`
class App extends React.Component {
  state= {
    mudaTela: "cadastro"
  }

  mudaPag = () => {
    if(this.state.mudaTela === "cadastro") {
      this.setState({mudaTela: "lista"})
    }else {
      this.setState({mudaTela: "cadastro"})
    }
  }

  
  render(){

    const page = this.state.mudaTela === "cadastro" ? (<Cadastro />) : (<Lista />)
    const buttonName = this.state.mudaTela === "cadastro" ? "Ir para lista" : "Ir para tela de cadastro"
    return (
      <AppDiv>
        {page}
        <ButtonAlteraTela onClick={this.mudaPag}>{buttonName}</ButtonAlteraTela>
      </AppDiv>
    );
  }
}

export default App;
