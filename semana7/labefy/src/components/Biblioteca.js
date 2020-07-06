import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PElement = styled.p`
  font-size: 16px;
  display:flex;
  color: #FFF;
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

const H1 = styled.h1`
  color: #FFF;
`

const Float = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

class Biblioteca extends React.Component{
  state = {
    name: "",
    playlist: [],
    playlistDetalhes: {},
    artista: "",
    url: "",
    music: [],
    musicId: "",
    usuarioId: ""
  }

  componentDidMount() {
    this.playlistCriada()
  }

  excluiPlaylist = (item) => {
    if(window.confirm('Deseja apagar playlist?')) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${item}`,
        axiosConfig
      ).then(()=> {
        alert("Playlist apagada com sucesso!")
        this.playlistCriada()
      }).catch(e => {
        alert("Erro ao apagar playlist")
      })
    }
  }

  playlistCriada = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
      axiosConfig
      ).then(response => {
        console.log(response.data.result.list)
        this.setState({ playlist: response.data.result.list })
      })
  }

  addMusicas = () => {
    const body = {
      name: this.state.name,
      artista: this.state.artista,
      url: this.state.url
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.usuarioId}/tracks`, 
    body, 
    {
      headers: {
        Authorization: "lais-flavio-turing"
      }
    }
    ).then(response => {
      this.setState({ name: "", artista: "", url: "" })
      this.setState({ playlist: response.data.result.list })
      console.log(response)
      this.playlistCriada()
    }).catch(error => {
      alert("Erro ao adicionar musica")
    })
  }

  pegaMusicas = (usuarioId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${usuarioId}/tracks`, axiosConfig
    ).then(response => {
      this.setState({ usuarioId: usuarioId })
      this.setState({ music: response.data.result.tracks })
    }).catch(error => {
      console.log(error.message)
    })
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  onChangeArtista = (e) => {
    this.setState({ artista: e.target.value })
  }

  onChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  render() {
    const renderizaLista = this.state.playlist.map((item) => {
      return (
        <Float>
            <PElement>{item.name}</PElement>
            <Button onClick={() => this.excluiPlaylist(item.id)}>Apagar Playlist</Button>
        </Float>
        )
    })
    return   <div>
      <header>
           <H1>Sua biblioteca</H1>
           <h2>Adicionar Musicas</h2>
           <Input type="text" placeholder="Nome da música" value={this.state.name} onChange={this.onChangeName}/>
           <Input type="text" placeholder="Artista" value={this.state.artista} onChange={this.onChangeArtista}/>
           <Input type="text" placeholder="Url da música" value={this.state.url} onChange={this.onChangeUrl}/>
          <button onClick={this.addMusicas}>Adicionar musica</button>
          </header>
      <ul>
      {this.state.playlist.length === 0 && <div>Carregando...</div>}
      {renderizaLista}
      <div>
       {this.state.music.map(musica => {
         return (
           <li key={musica.id}>
             <span>{musica.name}</span>
             <span>{musica.artista}</span>
              <audio src={musica.url} controls ></audio>
           </li>
         )
       })}

      </div>
      </ul>
  </div>
  }
}

export default Biblioteca

                        

      