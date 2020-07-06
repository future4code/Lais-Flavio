import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PElement = styled.p`
  font-size: 16px;
  display:flex;
`


const axiosConfig = {
  headers: {
    Authorization: "lais-flavio-turing"
  }
}

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

class Detalhes extends React.Component{
  state = {
    name: "",
    playlist: [],
  }

  componentDidMount() {
    this.playlistCriada()
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
        <div>
          <PElement>{item.name}</PElement>
        </div>
        )
    })
    return   <div>
      <ul>
      {this.state.playlist.length === 0 && <div>Carregando...</div>}
      {renderizaLista}
      </ul>
  </div>
  }
}

export default Detalhes