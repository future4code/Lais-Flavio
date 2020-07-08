import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Body = styled.div`
  color: #FFF;
  display: flex;
  margin: 120px;
`

const AddPlay = styled.div`
  max-width: 400px;
  border: 1px solid #2de54f;
  box-shadow: 2px 2px 8px 2px #2de54f;
  margin-left: 8px;
`

const AddMusica = styled.div`
  max-width: 400px;
  border: 1px solid #2de54f;
  box-shadow: 2px 2px 8px 2px #2de54f;
  margin-left: 8px;
`
const BuscaPlay = styled.div`
  max-width: 400px;
  border: 1px solid #2de54f;
  box-shadow: 2px 2px 8px 2px #2de54f;
  margin-left: 8px;
`
const ApagarPlay = styled.div`
  max-width: 300px;
  border: 1px solid #2de54f;
  box-shadow: 2px 2px 8px 2px #2de54f;
  margin-left: 8px;
`

const Button = styled.button`
  width: 150px;
  height: 30px;
  font-size: 16px;
  border: 1px solid #FFF;
  color: #FFF;
  outline: 0;
  border-radius: 8px;
  background: #121212;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  margin: 25px;
  padding: 4px;
`

const Input = styled.input`
  width: 255px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 25px;
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
    playlistName : "" ,
    nameMusic:"",
    artist:"",
    url:"",
    playlistId: "",
    musicas: []
  }

  componentDidMount() {
    this.renderizaPlaylist()
  }

  onChangeInput = (e) => {
    const novoName = e.target.value
    this.setState({name: novoName})
  }

  onChangeNomeMusica = (e) => {
    const novoName = e.target.value
    this.setState({nameMusic: novoName})
  }

  onChangeArtista = (e) => {
    const novoName = e.target.value
    this.setState({artist: novoName})
  }
  onChangeUrl = (e) => {
    const novoName = e.target.value
    this.setState({url: novoName})
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
      alert(`Playlist ${this.state.name} criada com sucesso`)
      this.setState({name: "" })
      
    }).catch(error => {
      alert("Erro ao criar playlist")
      console.log(error.message)
    })
  }

  adicionaMusic = () => {
    const body = {
      name: this.state.nameMusic,
      artist: this.state.artist,
      url: this.state.url,
    }
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistName}/tracks`, 
      body, 
      axiosConfig
    ).then(response => {
        alert(`Musica adicionada com sucesso!`)
        console.log(response)
       // this.setState({ musicas: response.data.result.tracks })
        
        this.setState({name: "", artist: "", url: ""})  

    }).catch(error => {
      alert(error.message)
    })
  }

  /*
  pegaMusicas = playlistName => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistName}/tracks`,
      {
        headers: {
          Authorization: "lais-flavio-turing"
        }
      }
    )
    .then(response => {
        this.setState({playlistName: playlistName})
        console.log(response)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
*/
  renderizaPlaylist = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      axiosConfig
    ).then(response => {
        this.setState({ playlist: response.data.result.list })

    })
  } 

  onChangePlay = event => {
      this.setState ({ playlistName:  event.target.value })
  }

  render() {
   
    return (
      <Body>

        <AddPlay>
          <Input type="text" placeholder="Criar playlist" value={this.state.name} onChange={this.onChangeInput}/>
          <Button onClick={this.adicionaPlaylist}>Adicionar Playlist</Button>
        </AddPlay>
        <AddMusica>
        <select onChange={this.onChangePlay} value={this.state.playlistName}>
          <option value={""} />
          {this.state.playlist.map(play => {
            return (
              <option key={play.id} value={play.id}>
                {""}
                {play.name}
              </option>
            )
          })}
        </select>
        <Input type="text" placeholder="Adicionar nome da Musica" value={this.state.nameMusic} onChange={this.onChangeNomeMusica}/>
        <Input type="text" placeholder="Adicionar artista" value={this.state.artist} onChange={this.onChangeArtista}/>
        <Input type="text" placeholder="Adicionar url" value={this.state.url} onChange={this.onChangeUrl}/>

        <Button onClick={() => this.adicionaMusic()}>Adicionar Musica</Button>
      </AddMusica>
      <BuscaPlay>
        <Input type="text" placeholder="Buscar playlist" value={this.state.name} onChange={this.onChangeInput}/>
        <Button onClick={this.adicionaPlaylist}>Buscar Playlist</Button>
      </BuscaPlay>
      <ApagarPlay>
        <Input type="text" placeholder="Apagar playlist" value={this.state.name} onChange={this.onChangeInput}/>
        <Button onClick={this.adicionaPlaylist}>Apagar Playlist</Button>
      </ApagarPlay>

      {this.state.musicas.map(music => {
        return <li>{music.id} {music.name} {music.artist} {music.url}</li>
      })}
    </Body>
    )
  }
}


export default Playlist
