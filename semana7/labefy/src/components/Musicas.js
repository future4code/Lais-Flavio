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

    const u = this.props.url.map(ur => {
      return (
        <li>
          Url: {ur}
        </li>
      )
    })
    return (
      <div>
        <ul>
         {this.props.lista.map(list => {
           return (
             <Li key= {list.id}>
               Nome: {list.name}
               <br></br>
               Artista: {list.artist}
               <br></br>
            
               <ReactAudioPlayer
                  src={u}
                  autoPlay
                  controls
                />
             </Li>
             )
         })}
        </ul>
      </div>
    )
  }
}
  export default Musicas