import React from 'react';
import './App.css';
import Post from './components/Post/Post';
//import Post2 from './components/Post2/Post2';
//import Post3 from './components/Post3/Post3';




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
  ]
  }
  render() {
  
    const listaPosts = this.state.postsList.map((post) => {
      return (
        <div>
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario} 
              fotoPost={post.fotoPost} 
            />
            
            </div>
      )
    })
    return (
      <div className={'app-container'}>
        {listaPosts}
      </div>
    )
  }
}


export default App;
