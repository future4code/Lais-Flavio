import React from 'react'
import styled from 'styled-components'

const HeaderComponent = styled.div`
  height: 35px;
  color: #EF5350;
`
class Header extends React.Component{
  render() {
    return (
        <HeaderComponent>
          <h1>{this.props.text}</h1>
        </HeaderComponent>
    )
  }
}

export default Header