import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row,Col  } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Trip from "./components/Trip";
import TripList from "./components/TripList";
import HotelList from "./components/HotelList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hotel from "./components/Hotel";
import Restoran from "./components/Restoran";
import RestoranList from "./components/RestoranList";
import GradList from "./components/GradList";
import Grad from "./components/Grad";
import UserList from "./components/UserList";
import User from "./components/User";


function App() {
  const marginTop ={
    marginTop:"20px"
  };
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
              <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/add" exact component={Trip}/>
                  <Route path="/list" exact component={TripList}/>
                  <Route path="/addhotel" exact component={Hotel}/>
                  <Route path="/hotellist" exact component={HotelList}/>
                  <Route path="/addRestoran" exact component={Restoran}/>
                  <Route path="/restoranlist" exact component={RestoranList}/>
                  <Route path="/addCity" exact component={Grad}/>
                  <Route path="/citiesList" exact component={GradList}/>
                  <Route path="/edit/grad/:idGrad" exact component={Grad}/>
                  <Route path="/edit/restoran/:idRestoran" exact component={Restoran}/>
                  <Route path="/edit/hotel/:idHotel" exact component={Hotel}/>
                  <Route path="/edit/trip/:idTrip" exact component={Trip}/>
                  <Route path="/users" exact component={UserList}/>
                  <Route path="/addusers" exact component={User}/>
              </Switch>

          </Col>
        </Row>

      </Container>
      <Footer/>
    </Router>

  );
}

export default App;
