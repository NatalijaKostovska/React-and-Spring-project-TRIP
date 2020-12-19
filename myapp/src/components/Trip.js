import React from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faSave,faUndo, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
class Trip extends React.Component{
    constructor(props){
        super(props);
        this.state= this.initialState;
        this.state.show=false;
        this.TripChange=this.TripChange.bind(this);
        this.submitTrip = this.submitTrip.bind(this);
    }
    initialState ={
        name:'',description:'',restoran:'',hotel:'',grad:'',imageBase64:''
    }

    submitTrip = event =>{
        event.preventDefault();

        const trip={
            name: this.state.name,
            description: this.state.description,
            hotel: this.state.hotel,
            restoran: this.state.restoran,
            grad: this.state.grad,
            slika: this.state.imageBase64

        };
        axios.post("http://localhost:8080/api/trip", trip)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                } else {
                    this.setState({"show":false});
                }
            });
        this.setState(this.initialState);

    }

    TripChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const {name,description,hotel,grad,restoran,imageBase64} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast children = {{show:this.state.show, message:"Trip Saved Successfully."}}/>

                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Trip</Card.Header>
                    <Form  onReset={this.resetTrip} onSubmit={this.submitTrip}  id="tripFormId" >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNameId">
                                    <Form.Label>Trip Name</Form.Label>
                                    <Form.Control required
                                                  type="text" name="name"
                                                  value={name}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip name"

                                    />
                                </Form.Group>
                                <Form.Group as={Col}controlId="formDescId">
                                    <Form.Label>Trip Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="description"
                                                  value={description}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip description"

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group  as={Col} controlId="formHotelId">
                                    <Form.Label>Hotel</Form.Label>
                                    <Form.Control required
                                                  type="text" name="hotel"
                                                  value={hotel}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip hotel"

                                    />
                                </Form.Group>
                                <Form.Group  as={Col} controlId="formRestoranId">
                                    <Form.Label>Restoran</Form.Label>
                                    <Form.Control required
                                                  type="text" name="restoran"
                                                  value={restoran}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip Restoran"

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group  as={Col} controlId="formCityId" >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required 
                                                  type="text" name="grad"
                                                  value={grad}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip city"

                                    />
                                </Form.Group>


                                <Form.Group  as={Col} controlId="formImageId">
                                    <Form.Label>Trip image</Form.Label>
                                    <Form.Control  autoComplete="off"
                                                  type="text" name="imageBase64"
                                                  value={imageBase64}
                                                  onChange={this.TripChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter trip image"

                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} /> Submit
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

            </div>

            );
    }
}
export default Trip;