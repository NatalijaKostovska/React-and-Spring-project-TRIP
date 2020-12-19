import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom'

class NavigationBar extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">Travel</Link>
                 <Nav className="mr-auto">
                    <Link to={"list"} className="nav-link">Trips</Link>
                    <Link to={"add"} className="nav-link">Add Trips</Link>
                    <Link to={"addhotel"} className="nav-link">Add Hotel</Link>
                    <Link to={"hotellist"} className="nav-link">Hotel List</Link>
                    <Link to={"addRestoran"} className="nav-link">Add Restoran</Link>
                    <Link to={"restoranlist"} className="nav-link">Restoran List</Link>
                    <Link to={"addCity"} className="nav-link">Add City</Link>
                    <Link to={"citiesList"} className="nav-link">Cities List</Link>
                     <Link to={"users"} className="nav-link">User List</Link>
                     <Link to={"addusers"} className="nav-link">Add User</Link>

                 </Nav>
            </Navbar>
                );
    }

}
export default NavigationBar;