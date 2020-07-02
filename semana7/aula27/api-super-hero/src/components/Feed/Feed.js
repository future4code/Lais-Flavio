import React from 'react'
import styled from 'styled-components'

const FeedComponent = styled.div`
  margin-top: 32px;
`

const Select = styled.select`
  width: 100px;
  height: 24px;
`

const Heros = styled.div`
  width: 450px;
  height: 350px;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 25px;
`

class Feed extends React.Component{
  render() {
    return (
        <FeedComponent>
          <h2>{this.props.apresentacao}</h2>
          <Select onChange={this.props.select}>
            <option></option>
            <option value={""}>{this.props.pokelist}</option>
          </Select>
          <Heros>
            <img src={this.props.img} alt="herois"/>
          </Heros>
        </FeedComponent>
    )
  }
}

export default Feed