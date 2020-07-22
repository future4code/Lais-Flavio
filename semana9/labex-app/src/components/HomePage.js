import React, {useState, useEffect} from 'react'
import {  useHistory } from 'react-router-dom'
import Imagem from './download.png'
import {DivLoginDad, H1, Nav, Ul, Li, HeaderHomePage, Paragraph, RocketImgHome} from './styles'
import axios from 'axios'

const headers = {
  Authorization: 'lais-flavio-turing'
}

const HomePage = () => {
/*
  const [tripsId, setTripsId] = useState("")
  const [tripsName, setTripsName] = useState("")
  const [tripsDescription, setTripsDescription] = useState("")
  const [tripsPlanet, setTripsPlanet] = useState("")
  const [tripsDurationInDays, setTripsDurationInDays] = useState("")
  const [tripsDate, setTripsDate] = useState("")
*/

  const getAllTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trips', headers)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/home")
  }

  const goToListTripsPage = () => {
    history.push("/listTrips")
  }

  const goToCreateTripsPage = () => {
    history.push("/createTrips")
  }

  const goToTripDetailsPage = () => {
    history.push("/detailsTrip")
  }

  const goToLoginPage = () => {
    history.push("/login")
  } 

  return (
    <DivLoginDad>
      <HeaderHomePage>
      <H1>Labex <RocketImgHome src={Imagem} alt="rocket"/><br></br><Paragraph>"Find the best space travel!"</Paragraph></H1>
      <Nav>
        <Ul>
          <Li onClick={goToListTripsPage}>See List Trips</Li>
          <Li onClick={goToCreateTripsPage}>Create Trips</Li>
          <Li onClick={goToTripDetailsPage}>Trip Details</Li>
          <Li onClick={goToLoginPage}>Login</Li>
        </Ul>
      </Nav>
      </HeaderHomePage>
      <div>
      <button onClick={getAllTrips}>Teste</button>
      </div>
    </DivLoginDad>
  )
}

export default HomePage