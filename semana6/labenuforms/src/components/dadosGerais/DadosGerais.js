import React from 'react'
import styled from 'styled-components'


const Inputs = styled.input`
  height: 20px;
  margin: 25px;
  outline: 0;

`

export default class DadosGerais extends React.Component {
  render() {
    return (
      <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <form>
          <label for="nome">1. Qual é o seu nome?</label>
          <br></br>
          <Inputs type="text" id="nome"/>
          <br></br>
          <label for="idade">2. Qual sua idade?</label>
          <br></br>
          <Inputs  type="text" id="idade"/>
          <br></br>
          <label for="email">3. Qual seu email?</label>
          <br></br>
          <Inputs  type="text" id="email"/>
          <br></br>
          <label  for="escolaridade">4. Qual a sua escolaridade?</label>
          <br></br>
          <select>
            <br></br>
              <option value="ensinoMedioIncompleto"> Ensino Médio Incompleto</option>
              <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
              <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
              <option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
          </select>
          </form>
      </div>
    )
  }
}

/*
const renderizaInicio = () => {
  switch(this.state.inicioPage) {
    case "infoEducacao":
      return <InfoEducacao />
      case "infoComplementar":
        return <InfoComplementar />
        default:
          return <DadosGerais />
  }
}*/