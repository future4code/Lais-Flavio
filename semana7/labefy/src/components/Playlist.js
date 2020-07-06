import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Feed from './Feed'

const Body = styled.div`
  color: #FFF;

`

const Header = styled.div`
  padding: 36px;
  display: flex;
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
      console.log(this.state.playlist)
      console.log(this.state.name)
    }).catch(error => {
      alert("Erro ao criar playlist")
      console.log(error.message)
    })
  }



  render() {
   
    return (
      <Body>
        <Header>
          <Input type="text" placeholder="Criar playlist" value={this.state.name} onChange={this.onChangeInput}/>
          <Button onClick={this.adicionaPlaylist}>Adicionar Playlist</Button>
        </Header>
       
    </Body>
    )
  }
}


export default Playlist
