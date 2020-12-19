import React from 'react';
import {Card,Table,Image,ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Link} from "react-router-dom";
class HotelList extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            hotels : []
        };
    }
    componentDidMount() {
        this.findallhotels();
    }
    findallhotels(){
        axios.get("http://localhost:8080/api/trips/hotels")
            .then(response => response.data)
            .then((data)=>{
                this.setState({hotels:data});
            });
    }
    deleteHotel = (idHotel) => {
        axios.delete("http://localhost:8080/api/trips/hotel/"+idHotel)
            .then(response => {
                if(response.data != null) {
                    // this.setState({"show":true});
                    // setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        hotels: this.state.hotels.filter(hotel => hotel.idHotel !== idHotel)
                    });
                }
                // else {
                //     this.setState({"show":false});
                // }
            });
    };

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} />  Hotel List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of stars</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.hotels.length === 0?
                            <tr align="center">
                                <td colSpan="8">{this.state.hotels.length}No hotels available</td>

                            </tr>:
                            this.state.hotels.map((hotel)=>(
                                <tr key={hotel.idHotel}>
                                    <td>{hotel.hotelName}</td>
                                    <td>{hotel.numberOfStars}</td>

                                    <td>

                                        <ButtonGroup>
                                            <Link to={"edit/hotel/"+hotel.idHotel} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={this.deleteHotel.bind(this,hotel.idHotel)}><FontAwesomeIcon icon={faTrash} /></Button>
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
export default HotelList;