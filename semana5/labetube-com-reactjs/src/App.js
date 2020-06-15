import React from 'react';
import youtube from './youtube-brands.svg'
import search from './search-solid.svg'
import menu from './bars-solid.svg'
import inicio from './home-solid.svg'
import alta from './fire-solid.svg'
import original from './book-open-solid.svg'
import historico from './history-solid.svg'
import './App.css';

function App() {
    const titulo = "Título do vídeo"


    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <img className="menu-logo" src= {menu}/>
            <img className="img-logo" src={youtube} />
            <h1 className="title-tube">LabTube</h1>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <img className="search" src={search} />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <img className="inicio" src= {inicio}/>
                    <li className="botoes-meunu-vertical ini">Início</li>
                    <img className="alta" src= {alta}/>
                    <li className="botoes-meunu-vertical alt">Em alta</li>
                    <img className="inscricao" src={youtube} />
                    <li className="botoes-meunu-vertical insc">Inscrições</li>
                    <img className="origin" src= {original}/>
                    <li className="botoes-meunu-vertical orig">Originais</li>
                    <img className="hist" src= {historico}/>
                    <li className="botoes-meunu-vertical histo">Histórico</li>
                </ul>
            </nav>
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>
      </div>
    </div>
  );
}

export default App;
