import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import spinner from '../assets/icons/Spinner-1s-200px (1).svg'


const Span = styled.span`
  color: #FFF;
  margin-left: 16px;
  font-size: 16px;
  margin-top: 16px;

`
const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`

const Li = styled.li`
  color: #FFF;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid grey;

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
  padding: 4px;
  margin-right: 8px;
`
const Carregando = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

` 
const DivPlay = styled.div`
  width: 600px;
  height: 50vh;
  border: 1px solid #0512d8;
  margin: 0 auto;
  margin-top: 25px;
  overflow: auto;
`

const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}


class Musicas extends React.Component {
  state = {
    name: "",
    playlist: [],
    musicas: [],
    detalhesMusicas: "lista",
    userId: ""
  }

  componentDidMount() {
    this.renderizaPlaylist()
  }

  renderizaPlaylist = (e) => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      axiosConfig
    ).then(response => {
        this.setState({ playlist: response.data.result.list })
    })
  }

  apagaPlaylist = (playlistId) => {
    if(window.confirm("Deseja deletar playlist?")){
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig
      ).then(() => {
      alert("Playlist deletada com sucesso!")
      this.renderizaPlaylist()
      }).catch(e => {
        alert("Erro ao deletar playlist!")
      })
    }
  }

  render() {
    
    return (
      <DivPlay>
        {this.state.playlist.length === 0 && 
        <Carregando>
          <img src={spinner} alt="Carregando" /> 
        </Carregando>}
        {this.state.playlist.map(play => {
          return(
              <Li key={play.id}>
                <Span onClick={() => this.mostraDetalhes(play.id)}>
                  
                  {play.name}
                </Span>
                <Btn>
                  <Button onClick={() => this.apagaPlaylist(play.id)}>Ver músicas</Button>
                  <Button onClick={() => this.apagaPlaylist(play.id)}>Apagar Playlist</Button>
                </Btn>
              </Li>
          )
        })}
      </DivPlay>
    )
  }
}
  export default Musicas