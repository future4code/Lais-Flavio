import React from 'react';
import GlobalStyle from './components/styles/global'
import Menu from './components/Menu/Menu'
import Tarefas from './components/Tarefas/Tarefas'

function App() {
  return (
    <div className="App">
      <Menu />
      <Tarefas />
      <GlobalStyle />
    </div>
  );
}

export default App;
