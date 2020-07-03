import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Body = styled.div`
  color: #FFF;

`

const Header = styled.div`
  padding: 36px;
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

const Input = styled.input`
  width: 255px;
  height: 25px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-radius: 8px;
`


const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}

class Playlist extends React.Component {
  state = {
    name: "",
    playlist: [],
  }

  componentDidMount() {
    this.playlistCriada()
  }

  onChangeInput = (e) => {
    const novoName = e.target.value
    this.setState({name: novoName})
  }

  adicionaPlaylist = () => {
    const body = {
      name: this.state.name
    }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
      body, 
      axiosConfig 
    ).then(() => {
      alert(`Playlist criada com sucesso`)
      this.setState({name: "" })
    }).catch(error => {
      alert("Erro ao criar playlist")
      console.log(error.message)
    })
  }

  playlistCriada = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
      axiosConfig
      ).then(response => {
        console.log(response.data.result.list)
        this.setState({ playlist: response.data.result.list })
      })
  }

  render() {
    const renderizaLista = this.state.playlist.map((item) => {
      return (
        <p>{item.name}</p>
        )
    })
    return (
      <Body>
        <Header>
          <Input type="text" placeholder="Criar playlist" value={this.state.name} onChange={this.onChangeInput}/>
          <Button onClick={this.adicionaPlaylist}>Adicionar Playlist</Button>        
        </Header>
        <div>
          <ul>
          {this.state.playlist.length === 0 && <div>Carregando...</div>}
          {renderizaLista}
          </ul>
        </div>
    </Body>
    )
  }
}


export default Playlist
