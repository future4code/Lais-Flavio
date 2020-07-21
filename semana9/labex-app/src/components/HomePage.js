import React from 'react'
import {  useHistory } from 'react-router-dom'


const HomePage = () => {
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
    <div>
      <h1>Labex</h1>
      <nav>
        <ul>
          <li onClick={goToListTripsPage}>See List Trips</li>
          <li onClick={goToCreateTripsPage}>Create Trips</li>
          <li onClick={goToTripDetailsPage}>Trip Details</li>
          <li onClick={goToLoginPage}>Login</li>
        </ul>
      </nav>
    </div>
  )
}

export default HomePage