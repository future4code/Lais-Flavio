import React from 'react';
import styled from "styled-components"
import './App.css';
import DadosGerais from '../src/components/dadosGerais/DadosGerais'
import InfoEducacao from '../src/components/infoEducation/InfoEducacao'
import InfoComplementar from '../src/components/infoComplementar/InfoComplementar'
import Finalizacao from '../src/components/finalizacao/FinalizacaoForm'

const AppContainer = styled.div`
  width: 500px;
  height: 500px;
  font-family: sans-serif;
  text-align: center;
  border: 3px solid grey;
  color: #202121;
`
const AppPage = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 100px;
`
const Btn = styled.button`
  height: 25px;
  margin-top: 25px;
  background: #779899;
  color: white;
  outline: 0;
  border: 0;
`

class App extends React.Component {
  state = {
    inicio: 0,
  }

  mudaEtapa = () => {
    this.setState({inicio: this.state.inicio +1})
  }
 
  render() {
    const renderizaTela = () => {
      switch(this.state.inicio) {
        case 1:
          return <DadosGerais />
        case 2: 
          return <InfoEducacao />
        case 3:
            return <InfoComplementar />
         case 4:;
           return <Finalizacao />
          default:
            return <h1>PREENCHA O FORMULÁRIO COM ATENÇÃO: </h1>
      }
    }
    return (
      <AppPage>
        <AppContainer>{renderizaTela()}
        <Btn onClick={this.mudaEtapa}>Próxima Etapa</Btn>
        </AppContainer>
       
      </AppPage>
    );
  }
}

export default App