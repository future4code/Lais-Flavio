import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    postsList: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
    },
    {
        nomeUsuario: 'Gabriel',
        fotoUsuario: 'https://picsum.photos/80/50',
        fotoPost: 'https://picsum.photos/210/150'
    },
    {
        nomeUsuario: 'Lais',
        fotoUsuario: 'https://picsum.photos/60/60',
        fotoPost: 'https://picsum.photos/230/140'
    }
  ],
    valorInputNomeUser: '',
    valorInputFotoUser: '',
    valorInputFotoPost: ''
  }


  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUser,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    }
    const newPost = [...this.state.postsList, novoPost]

    this.setState({ postsList: newPost })
    this.setState({ valorInputNomeUser: "" });
    this.setState({ valorInputFotoUser: "" });
    this.setState({ valorInputFotoPost: "" });
  }

  onChangeInputNomeUser = event => {
    this.setState({valorInputNomeUser: event.target.value})
  }
  onChangeInputFotoUser = event => {
    this.setState({valorInputFotoUser: event.target.value})
  }
  onChangeInputFotoPost = event => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {
  
    const listaPosts = this.state.postsList.map((post) => {
      return ( 
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario} 
              fotoPost={post.fotoPost} 
            />
      )
    })
    return (
      <div className={'app-container'}>
        <div>{listaPosts}</div>

        <input value={this.state.valorInputNomeUser}
        onChange={this.onChangeInputNomeUser}
        placeholder={"Nome"}
        />
        <input value={this.state.valorInputFotoUser}
        onChange={this.onChangeInputFotoUser}
        placeholder={"Foto do Usuário"}
        />
        <input value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Imagem Post"}
        />
        <button onClick={this.adicionaPost}>Adicionar Post</button>
      </div>

    )
  }
}


export default App;
