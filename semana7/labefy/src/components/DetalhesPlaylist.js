import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import spinner from '../assets/icons/Spinner-1s-200px (1).svg'
import Musicas from '../components/Musicas'

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
  border: 1px solid #2de54f;
  margin: 0 auto;
  margin-top: 25px;
  overflow: auto;
`

const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}


class DetalhesPlaylist extends React.Component {
  state = {
    name: "",
    playlist: [],
    musicas: [],
    detalhesMusicas: "lista",
    playlistId: "",
    verMusics: "detalhes",
    urlArray: [
      "http://spoti4.future4.com.br/1.mp3",
      " http://spoti4.future4.com.br/2.mp3",
      "http://spoti4.future4.com.br/3.mp3",
      "http://spoti4.future4.com.br/4.mp3",
      "http://spoti4.future4.com.br/5.mp3",
      "http://spoti4.future4.com.br/6.mp3",
      "http://spoti4.future4.com.br/7.mp3",
      "http://spoti4.future4.com.br/8.mp3",
      "http://spoti4.future4.com.br/9.mp3",
      "http://spoti4.future4.com.br/10.mp3",
      "http://spoti4.future4.com.br/11.mp3",
      "http://spoti4.future4.com.br/12.mp3",
  ]
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
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, 
      axiosConfig
      ).then(() => {
      alert("Playlist deletada com sucesso!")
      this.renderizaPlaylist()
      }).catch(e => {
        alert("Erro ao deletar playlist!")
      })
    }
  }

  onClickMusicsPage = () => {
    if(this.state.verMusics === "musicas" ){
      return <Musicas />
    }
  }



  verMusicas = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, 
      axiosConfig
    ).then(response => {
      alert("Musicas renderizadas com sucesso!")
      this.setState({ verMusics: "musicas" })
      this.setState({ musicas: response.data.result.tracks })

      console.log(this.state.musicas)
    }).catch(e => {
      console.log(e.message)
      alert("Não foi possivel renderizar musicas!")
    })
   
  }

  render() {
  
    
    return (
      <DivPlay>
        {this.state.playlist.length === 0 && 
        <Carregando>
          <img src={spinner} alt="Carregando" /> 
        </Carregando>}
        {this.state.verMusics === "musicas" && <Musicas
          lista = {this.state.musicas}
          url = {this.state.urlArray}
        /> }

        {this.state.verMusics !== "musicas" &&
          this.state.playlist.map(play => {

          return(
              <Li key={play.id}>
                <Span>
                  {play.name}
                </Span>
                <Btn>
                  <Button onClick={() => this.verMusicas(play.id)}>Ver musicas</Button>
                  <Button onClick={() => this.apagaPlaylist(play.id)}>Apagar Playlist</Button>
                </Btn>
              </Li>
          )
        })
      }
      </DivPlay>
    )
  }
}
  export default DetalhesPlaylist