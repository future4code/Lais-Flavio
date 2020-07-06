import React from 'react';
import styled from 'styled-components'
import Feed from './components/Feed'
import Playlist from './components/Playlist';
import Buscar from './components/Buscar'
import Inicio from './components/Inicio';
import Navegar from './components/Navegar';
import Biblioteca from './components/Biblioteca';
import MusicCurtidas from './components/MusicCurtidas';
import Detalhes from './components/Detalhes'




const Body = styled.div`
  display: flex;
  background: #121212;
  height: 100vh;
`
const Menu = styled.div`
  padding-right: 42px;
  width: 185px;
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
const Button = styled.button`
  width:200px;
  height: 35px;
  font-size: 16px;
  border: 1px solid #FFF;
  color: #FFF;
  outline: 0;
  background: #121212;
  margin: 0;
  position:absolute;
  bottom:0;
`

const PInicio = styled.p`
  color: #ffffff;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

class App extends React.Component {
  state = {
   transitaTela : ''
  }

  onClickPlaylist =() => {
    this.setState({ transitaTela: "playlist" })
  }
  onClickBusca =() => {
    this.setState({ transitaTela: "buscar" })
  }

  onClickBiblioteca =() => {
    this.setState({ transitaTela: "biblioteca" })
  }

  onClickFeed =() => {
    this.setState({ transitaTela: "feed" })
  }

  onClickNavegar =() => {
    this.setState({ transitaTela: "navegar" })
  }

  onClickInicio =() => {
    this.setState({ transitaTela: "inicio" })
  }

  onClickMusicCurtidas =() => {
    this.setState({ transitaTela: "musicasCurtidas" })
  }



  render() {

    const mudaTela = () =>{
      switch(this.state.transitaTela) {
        case "playlist":
          return <Playlist />
        case "buscar":
          return <Buscar />
        case "biblioteca":
          return <Biblioteca />
        case "feed":
        return <Feed />
        case "navegar":
          return <Navegar />
        case "detalhes":
        return <Detalhes />
        case "inicio":
          return <Inicio />
        case "musicasCurtidas":
          return <MusicCurtidas />
        default: 
          return <PInicio>Seja bem vindo(a) ao Labefy</PInicio>
      }
    }
    return (
      <Body className="App">
        <Menu>
          <H1>Labefy</H1>
          <Nav>
            <Ul>
              <Li onClick={this.onClickInicio}>Início</Li>
              <Li onClick={this.onClickNavegar}>Navegar</Li>
              <Li onClick={this.onClickBusca}>Buscar</Li>
              <Li onClick={this.onClickBiblioteca}>Biblioteca</Li>
              <Li onClick={this.onClickPlaylist}>Criar Playlist</Li>
              <Li onClick={this.onClickMusicCurtidas}>Músicas Curtidas</Li>
            </Ul>
  
          </Nav>
          <Button onClick={this.onClickPlaylist}>Criar Playlist</Button>
        
        </Menu>
          {mudaTela()}
      </Body>
    );
  }
}

export default App;
