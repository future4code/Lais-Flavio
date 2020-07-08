import React from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';

const Li = styled.li`
  color: #FFF;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid grey;
`

class Musicas extends React.Component {


  render() {
    const urls = this.props.url.map(url => {
      return <ReactAudioPlayer
      src={url}
      //autoPlay
      controls
    />
    })

    return (
      <div>
        <ul>
          
        </ul>
        <ul>
         {this.props.lista.map(list => {
           return (
             <Li key= {list.id}>
               Nome: {list.name}
               <br></br>
               Artista: {list.artist}
               <br></br>
              Play: {urls}
               
             </Li>
             )
         })}
        </ul>
      </div>
    )
  }
}
  export default Musicas