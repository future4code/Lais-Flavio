import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Imagem from './download.png'
import {RocketImg, DivFormLogin, FormLoginAply,
LabelFormLogin, DivLogoLogin, InputForm, DivButtonLogin,
ButtonLogin, ButtonLoginBackHome, DivLoginDad, DivLoginAplication, TextAreaForm} from './styles'

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }
  return {form, onChange}
}

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trips/:id/apply"

const AplicationFormPage = () => {
/*
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")
*/

  const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
  
  const handleInputChange = event => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleFormChange = () => {
  
  }

  const history = useHistory()

  const goToBackHome = () => {
    history.push('/listTrips')
  }
  return (
    <DivLoginDad>
      <ButtonLoginBackHome onClick={goToBackHome}>Back to Home</ButtonLoginBackHome>
      <DivLoginAplication>
        <DivLogoLogin>
          <RocketImg src={Imagem} alt="rocket"/>
          <h1>Labex</h1>
          <p>"Find the best space travel!"</p>
        </DivLogoLogin>
        <DivFormLogin>
          <FormLoginAply>

            <LabelFormLogin for="name">Name: </LabelFormLogin>
            <InputForm type="text" id="name" name="name" value={form.name} placeholder="Type your name" onChange={handleInputChange}/>

            <LabelFormLogin for="age">Age: </LabelFormLogin>
            <InputForm type="age" id="age" name="age" value={form.age} placeholder="Type your age" onChange={handleInputChange}/>

            <LabelFormLogin for="applicationText">ApplicationText: </LabelFormLogin>
            <TextAreaForm type="text" id="applicationText" name="applicationText" value={form.applicationText} placeholder="Type your description" cols="30" rows="5" onChange={handleInputChange}/>

            <LabelFormLogin for="profession">Profession: </LabelFormLogin>
            <InputForm type="text" id="profession" name="profession" value={form.profession} placeholder="Type your profession" onChange={handleInputChange}/>

            <LabelFormLogin for="country">Country: </LabelFormLogin>
            <InputForm type="text" id="country" name="country" value={form.country} placeholder="Type your country" onChange={handleInputChange}/>

          </FormLoginAply>
          <DivButtonLogin>
            <ButtonLogin><strong>Apply</strong></ButtonLogin>
          </DivButtonLogin>
        </DivFormLogin>
      </DivLoginAplication>
      
    </DivLoginDad>
  )
}


export default AplicationFormPage


/*const formatDate = new Date(form.date);
...
"date": formatDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: '2-digit'}),


form.date é a data que estou pegando do formulário
date é objeto que vc tá criando e enviando para o banco
a operação inteira:
const formatDate = new Date(form.date);

    const body = {
      "name": form.name,
      "planet": form.planet,
      "date": formatDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: '2-digit'}),
      "description": form.description,
      "durationInDays": form.durationInDays
    }




*/