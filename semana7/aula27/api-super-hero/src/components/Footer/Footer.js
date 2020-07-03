import React from 'react'
import styled from 'styled-components'

const FooterComponent = styled.div`
  position:absolute;
  bottom:0;
  width:100%;
  font-weight: bold;
`

class Footer extends React.Component{
  render() {
    return (
        <FooterComponent>
          <p>{this.props.rodape}</p>
        </FooterComponent>
    )
  }
}

export default Footer