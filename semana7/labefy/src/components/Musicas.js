import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  color: #FFF;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid grey;
`

class Musicas extends React.Component {

  render() {
    
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
               /*
               Url: <audio controls>
                 <source={list.url} type="">
               </audio>
*/
             </Li>
             )
         })}
        </ul>
      </div>
    )
  }
}
  export default Musicas