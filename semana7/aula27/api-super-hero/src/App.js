import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import styled from 'styled-components'



const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Select = styled.select`
  width: 100px;
  height: 24px;
  margin-top: 55px;
`

const Img = styled.img`
  width: 250px;;
  height: 200px;
`

export class App extends React.Component {
  state = {
    pokeList: [],
    pokeImage: ""
  };

  componentDidMount = () => {
    this.pegaPokemons();
  };

  pegaPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );

      this.setState({ pokeList: response.data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  onChangePokeName = event => {
    const pokeName = event.target.value;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        this.setState({ pokeImage: response.data.sprites.front_default });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <Container>
        <Header 
          text = "Pokemons App"
        />
        <Select onChange={this.onChangePokeName}>
          <option value={""} />
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {" "}
                {pokemon.name}
              </option>
            );
          })}
        </Select>
        <div>
          {this.state.pokeImage && (
            <Img src={this.state.pokeImage} alt="Pokemon" />
          )}
        </div>
        <Footer 
          rodape="Divirta-se"
        />
      </Container>
    );
  }
}

export default App;
