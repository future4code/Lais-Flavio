import React from 'react'
import {useHistory} from 'react-router-dom'
import Imagem from './download.png'
import {RocketImg, DivLogin, DivFormLogin, FormLogin,
LabelFormLogin, DivLogoLogin, InputForm, DivButtonLogin,
ButtonLogin, ButtonLoginBackHome, DivLoginDad} from './styles'

const LoginPage = () => {
  const history = useHistory()

  const goToBackHome = () => {
    history.push('/home')
  }

  return (
    <DivLoginDad>
      <ButtonLoginBackHome onClick={goToBackHome}>Back to Home</ButtonLoginBackHome>
      <DivLogin>
        <DivLogoLogin>
          <RocketImg src={Imagem} alt="rocket"/>
          <h1>Labex</h1>
          <p>"Find the best space travel!"</p>
        </DivLogoLogin>
        <DivFormLogin>
          <FormLogin>
            <LabelFormLogin for="name">Name: </LabelFormLogin>
            <InputForm type="text" id="name" className="name" value=""/>
            <LabelFormLogin for="name">Email: </LabelFormLogin>
            <InputForm type="text" id="email" className="email" value=""/>
          </FormLogin>
          <DivButtonLogin>
            <ButtonLogin>Login</ButtonLogin>
            <ButtonLogin>Create an Account</ButtonLogin>
          </DivButtonLogin>
        </DivFormLogin>
      </DivLogin>
    </DivLoginDad>
  )
}

export default LoginPage