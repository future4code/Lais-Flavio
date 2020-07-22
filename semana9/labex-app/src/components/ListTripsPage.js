import React from 'react'
import {DivLoginDad, H1, Nav, Ul, Li, HeaderHomePage, Paragraph, RocketImgHome} from './styles'
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {
  const history = useHistory()

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
    <div>ListTripsPage
      <Ul>
            <Li onClick={goToListTripsPage}>See List Trips</Li>
            <Li onClick={goToCreateTripsPage}>Create Trips</Li>
            <Li onClick={goToTripDetailsPage}>Trip Details</Li>
        </Ul>
    </div>
  )
}

export default ListTripsPage