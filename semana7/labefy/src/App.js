import React from 'react';
import styled from 'styled-components'
import Feed from './components/Feed'
import Playlist from './components/Playlist';

const Body = styled.div`
  display: flex;
  background: #121212;
  height: 100vh;
`
const Menu = styled.div`
  display: block;
  padding: 36px;
  color: #FFF;
  background: #040404;
`
const H1 = styled.h1`
  font-size: 24px;
`

const Nav = styled.nav`
  list-style: none;
  margin-top: 32px;
`
const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`

`

class App extends React.Component {
  state = {
   transitaTela : 'feed'
  }

  mudaPag = () => {
    if (this.state.transitaTela === "feed") {
      this.setState({ transitaTela: "playlistCriada" })
    }else {
      this.setState({ transitaTela: "feed" })
    }
  }

  render() {

    return (
      <Body className="App">
        <Menu>
          <H1>Labefy</H1>
          <Nav>
            <Ul>
              <Li>Início</Li>
              <Li>Navegar</Li>
              <Li>Buscar</Li>
              <Li>Biblioteca</Li>
              <Li>Criar Playlist</Li>
              <Li>Músicas Curtidas</Li>
            </Ul>
          </Nav>
        </Menu>
        <Playlist />
        <Feed />
      </Body>
    );
  }
}

export default App;
