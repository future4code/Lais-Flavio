import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Imagem from './download.png'
import {RocketImg, DivLogin, DivFormLogin, FormLogin,
LabelFormLogin, DivLogoLogin, InputForm, DivButtonLogin,
ButtonLogin, ButtonLoginBackHome, DivLoginDad, Select} from './styles'


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/login"
const baseUrlCreate = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/signup"


const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    }
    
    axios.post(`${baseUrl}`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/createTrips")
      alert("Sucess login")
    })
    .catch(error=> {
      console.log(error.message)
      alert("Failed login")
    })
  }

  const createLogin = () => {
    const body = {
      email: email,
      password: password
    }
    axios.post(`${baseUrlCreate}`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/createTrips")
      alert("Sucess create account")
    })
    .catch(error => {
      console.log(error.message)
      alert("Failed create account")
    })
  }


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
            <LabelFormLogin for="email">Email: </LabelFormLogin>
            <InputForm type="text" id="email" className="email" value={email} placeholder="Type your name" onChange={onChangeEmail} required/>
            <LabelFormLogin for="password">Password: </LabelFormLogin>
            <InputForm type="password" id="password" className="password" value={password} placeholder="Type your e-mail" onChange={onChangePassword} required/>

            <Select name="nivel" id="nivel" form="nivelForm" required>
              <option value="select nivel">* Select nível</option>
              <option value="adm">Administrador</option>
              <option value="revisor">Revisor</option>
            </Select>

          </FormLogin>
          <DivButtonLogin>
            <ButtonLogin onClick={handleLogin}><strong>Login</strong></ButtonLogin>
            <ButtonLogin onClick={createLogin}><strong>Create an Account</strong></ButtonLogin>
          </DivButtonLogin>
        </DivFormLogin>
      </DivLogin>
      
    </DivLoginDad>
  )
}

export default LoginPage