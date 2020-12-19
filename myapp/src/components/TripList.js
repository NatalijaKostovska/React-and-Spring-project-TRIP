import React from 'react';
import {Card,Table,Image,ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Link} from "react-router-dom";
class TripList extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            trips : []
        };
    }
    componentDidMount() {
        this.findalltrips();
    }
    findalltrips(){
        axios.get("http://localhost:8080/api/trips")
            .then(response => response.data)
            .then((data)=>{
                this.setState({trips:data});
            });
    };

    deleteTrip = (idTrip) => {
        axios.delete("http://localhost:8080/api/trips/"+idTrip)
            .then(response => {
                if(response.data != null) {
                    // this.setState({"show":true});
                    // setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        trips: this.state.trips.filter(trip => trip.idTrip !== idTrip)
                    });
                }
                // else {
                //     this.setState({"show":false});
                // }
            });
    };

    render() {
        // const  = this.props.employees.map(employee =>
        //     <Employee key={employee._links.self.href} employee={employee}/>
        // );
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} />  Trip List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>description</th>
                            <th>image</th>
                            <th>hotel</th>
                            <th>grad</th>
                            <th>restoran</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.trips.length === 0?
                            <tr align="center">
                                <td colSpan="8">{this.state.trips.length}No trips available</td>

                            </tr>:
                            this.state.trips.map((trip)=>(
                                <tr key={trip.idTrip}>
                                    <td>{trip.name}</td>
                                    <td>{trip.description}</td>
                                    <td>
                                    <Image src={trip.imageBase64} width="25" height="25"/>
                                    </td>
                                    <td>{trip.hotel.hotelName}</td>
                                    <td>{trip.grad.gradIme}</td>
                                    <td>{trip.restoran.name}</td>

                                    <td>

                                        <ButtonGroup>
                                            <Link to={"edit/trip/"+trip.idTrip} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={this.deleteTrip.bind(this,trip.idTrip)}><FontAwesomeIcon icon={faTrash} /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        );
    }

}
export default TripList;