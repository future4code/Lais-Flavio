import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`
  height: 20px;
  margin: 25px;
  outline: 0;

`

export default class InfoEducacao extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <form>
          <label for="curso">5. Qual curso?</label>
          <br></br>
          <Inputs type="text" id="curso"/>
          <br></br>
          <label for="local">6. Qual a unidade de ensino?</label>
          <br></br>
          <Inputs type="text" id="local"/>
          </form>
          </form>
      </div>
    )
  }
}
