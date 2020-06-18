import React from 'react'
import './Post.css'


import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {

    if(!this.state.curtido){
      this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    console.log('Curtiu!')

  }else{
      this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas -1
     })
    }
  }

  onClickComentario = () => {
    if(!this.state.comentando){
      this.setState({
      comentando: !this.state.comentando,
      numeroComentarios: this.state.numeroComentarios + 1
    })}else{
        this.setState({
        comentando: !this.state.comentando,
        numeroComentarios: this.state.numeroComentarios -1
      })
      console.log('Descurtiu!')
    }
  }

  aoEnviarComentario = () => {//contabiliza o comentário e altera seu estado de 0 pra 1
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} //são os estados que alterarão quando o curtido se tornar true
          onClickIcone={this.onClickCurtida}//função que será chamada ao clique no ícone de coração mudando a cor dele
          valorContador={this.state.numeroCurtidas}//vai alterar o estado da curtida de 0 para 1
        />

        <IconeComContador
          icone={iconeComentario}//são os estados que alterarão quando o comentando se tornar true
          onClickIcone={this.onClickComentario}//
          valorContador={this.state.numeroComentarios}//estado que será alterado a cada comentário feito
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post