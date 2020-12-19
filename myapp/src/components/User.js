import React from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faSave,faUndo, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
class User extends React.Component{
    constructor(props){
        super(props);
        this.state= this.initialState;
        this.state.show=false;
        this.UserChange=this.UserChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }
    initialState ={
        name:'',lastname:'',trips:''
    }
    resetUser = () => {
        this.setState(() => this.initialState);
    }
    submitUser = event =>{
        event.preventDefault();

        const customer={
            name: this.state.name,
            lastname: this.state.lastname,
            trips: this.state.trips
        };
        axios.post("http://localhost:8080/api/customer", customer)
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

    UserChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const {name,lastname,trips} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast children = {{show:this.state.show, message:"User Saved Successfully."}}/>

                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Trip</Card.Header>
                    <Form  onReset={this.resetUser} onSubmit={this.submitUser}  id="userFormId" >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNameId">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control required
                                                  type="text" name="name"
                                                  value={name}
                                                  onChange={this.UserChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter user name"

                                    />
                                </Form.Group>
                                <Form.Group as={Col}controlId="formDescId">
                                    <Form.Label>User lastname</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="lastname"
                                                  value={lastname}
                                                  onChange={this.UserChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter user last name"

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group  as={Col} controlId="formHotelId">
                                    <Form.Label>Trips</Form.Label>
                                    <Form.Control
                                                  type="text" name="trips"
                                                  value={trips}
                                                  onChange={this.UserChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter user trip"

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
export default User;