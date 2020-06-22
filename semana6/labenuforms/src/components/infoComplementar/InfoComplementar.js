import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`
  height: 20px;
  margin: 25px;
  outline: 0;

`

export default class InfoComplementar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <form>
          <label for="curso">7. Por que você não terminou um curso de graduação?</label>
          <br></br>
          <Inputs type="text" id="curso"/>
          <br></br>
          <label for="complementar">8. Você fez algum curso complementar?</label>
          <br></br>
          <Inputs type="text" id="complementar"/>
          </form>
          </form>
      </div>
    )
  }
}
