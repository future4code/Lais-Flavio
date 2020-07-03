import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  color: #FFF;
`

const Playlist = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
`

const H2 = styled.h2`
  width:100vw ;
  font-size: 16px;
`

const Img = styled.img`
  width: 100px;
  height: 80px;
  margin: 16px;
`


class Feed extends React.Component {

  state = {
    img: [
      {
        id: Date.now(),
        photo: "https://picsum.photos/200/300"
      },
      {
        id: Date.now(),
        photo: "https://picsum.photos/201/300"
      },
      {
        id: Date.now(),
        photo:  "https://picsum.photos/206/300"
      },
      {
        id: Date.now(),
        photo:  "https://picsum.photos/202/300"
      }
      
    ]
  }

  render(){

    const renderizaImg = this.state.img.map((imgList) => {
      return(
        <Img key={imgList.id} src={imgList.photo}  alt="Imagens"  />
      )
    })

    return(
      <Body>
        <Playlist>
          <H2>Tocadas recentemente</H2>
          <div>{renderizaImg}</div>
          <H2>Feito para Laís</H2>
          <div>{renderizaImg}</div>
        </Playlist>
      </Body>
    )
  }
}

export default Feed