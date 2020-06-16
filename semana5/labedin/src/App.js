import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Imagem from './components/ImagemButton/eu.jpg'
import ImagemEnf from './components/ImagemButton/enf.png'
import ImagemIdosos from './components/ImagemButton/idosos.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './components/ImagemButton/email.png'
import Interesses from './components/Interesses/Interesses';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Imagem} 
          nome="Laís Flavio da Silva" 
          descricao="Oi, eu sou Laís. Sou aluna da Labenu. Estou mudando de área profissional e aceitei o desafio de ser desenvolvedora web fullstack em 6 meses."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemEnf}
          nome="Marista São José" 
          descricao="Atuei nos cuidados infantis como técnica de Enfermagem!" 
        />
        
        <CardGrande 
          imagem={ImagemIdosos}
          nome="Cuidados" 
          descricao="Atuei como cuidadora de idosos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
      <h2>Interesses</h2>
      <Interesses 
        empresaInteresse1 = "Google"
        empresaInteresse2 = "Facebook"
        empresaInteresse3 = "Amazon"
        descricao="Gostaria de fazer parte do time de desenvolvedores das empresas citadas"
      />
      </div>

      <div className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno 
        imagem={ImagemEmail}
        email= "lala@gmail.com"
        endereco ="Rua da Discórdia, 255"
        />
      </div>
    </div>
  );
}

export default App;
