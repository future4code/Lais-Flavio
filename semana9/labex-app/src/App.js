import React from 'react';
import ReactDom from 'react-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import ListTripsPage from './components/ListTripsPage'
import CreateTripPage from './components/CreateTripPage'
import TripDetailsPage from './components/TripDetailsPage'
import LoginPage from './components/LoginPage'
import './App.css';

function App (){
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/listTrips">
          <ListTripsPage />
        </Route>
        <Route exact path="./createTrips">
          <CreateTripPage />
        </Route>
        <Route exact path="./detailsTrip">
          <TripDetailsPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
