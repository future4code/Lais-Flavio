import React from 'react'
import {useHistory} from 'react-router-dom'
import Imagem from './voo.jpg'
import {RocketImg, DivLogin, DivFormLogin, FormLogin, LabelFormLogin} from './styles'

const LoginPage = () => {
  const history = useHistory()

  const goToBackHome = () => {
    history.push('/home')
  }

  return (
    <DivLogin>
      <div>
        <RocketImg src={Imagem} alt="rocket"/>
        <h1>Labex</h1>
        <p>"Encontre as melhores viagens espaciais!"</p>
      </div>
      <DivFormLogin>
        <FormLogin>
          <LabelFormLogin for="name">Name: </LabelFormLogin>
          <input type="text" id="name" className="name" value=""/>
          <LabelFormLogin for="name">Email: </LabelFormLogin>
          <input type="text" id="email" className="email" value=""/>
          <radioButton></radioButton>
        </FormLogin>
        <input type="submit" value="Login" />
        <button>Criar conta</button>
        <button onClick={goToBackHome}>Back to Home</button>
      </DivFormLogin>
    </DivLogin>
  )
}

export default LoginPage