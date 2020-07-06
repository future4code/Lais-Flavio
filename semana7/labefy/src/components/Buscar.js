import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Body = styled.div`
  color: #FFF;
`

const Header = styled.div`
  padding: 36px;
  display: flex;
`

const Input = styled.input`
  width: 255px;
  height: 25px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-radius: 8px;
`

const Button = styled.button`
  width: 150px;
  height: 25px;
  font-size: 16px;
  border: 1px solid #FFF;
  color: #FFF;
  outline: 0;
  border-radius: 8px;
  background: #121212;
  margin-left: 8px;
`

const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}
class Buscar extends React.Component{
  state = {
    name: "",
    playlist: []
  }

  onChangeInput = e => {
    const novoName = e.target.value
    this.setState({name: novoName})
  }

  buscaPlaylist = (name) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`, 
    axiosConfig
    ).then(response => {
      this.setState({ playlist: response.data.result.list})
      console.log(this.state.playlist)
      this.setState({name: ""})
    }).catch(error => {
      alert("Erro ao buscar playlist")
      console.log(error)
    })
  }
 

  render() {

    return  (
      <Body>
      <Header>
        <Input type="text" placeholder="Buscar Musica" value={this.state.name} onChange={this.onChangeInput}/>
        <Button onClick={this.buscaPlaylist}>Buscar Playlist</Button>
      </Header>
    </Body>
    )
  }
}

export default Buscar