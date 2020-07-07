import React from 'react';
import styled from 'styled-components'
import Playlist from './components/Playlist';
import DetalhesPlaylist from './components/DetalhesPlaylist';



const Body = styled.div`
  background: #121212;
  height: 100vh;
`

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 24px;
  border: 1px solid #0512d8;
  color: #FFF;
  outline: 0;
  border-radius: 8px;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 60px;
  padding: 4px;
  box-shadow: 2px 2px 8px 2px #0512d8;

`


const H1 = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #0512d8;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 25px;
`
class App extends React.Component {
  state = {
   transitaTela : '',
   nameButton: "Criar Playlist"
  }

 
  onClickPlaylist =() => {
    if(this.state.transitaTela === "playlist"){
      this.setState({ transitaTela: "detalhes" })
      this.setState({nameButton: "Criar Playlist"})

    }
  else{
    this.setState({nameButton: "Ver Playlists"})
    this.setState({transitaTela: "playlist"})
  }
}
  render() {

    return (
      <Body className="App">
        <H1>Labefy</H1>
        <Button onClick={this.onClickPlaylist}>{this.state.nameButton}</Button>
        {this.state.transitaTela === "playlist" ? <Playlist /> : <DetalhesPlaylist />}
      </Body>
    );
  }
}

export default App;
