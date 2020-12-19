import React from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faSave,faUndo, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
class Hotel extends React.Component{
    constructor(props){
        super(props);
        this.state= this.initialState;
        this.state.show=false;
        this.HotelChange=this.HotelChange.bind(this);
        this.submitHotel = this.submitHotel.bind(this);
    }
    initialState ={
        idHotel:'',hotelName:'',numberOfStars:''
    }
    componentDidMount() {
        const idHotel = +this.props.match.params.idHotel;
        if(idHotel){
            this.findHotelById(idHotel);
        }
    }
    resetHotel = () => {
        this.setState(() => this.initialState);
    }
    submitHotel = event =>{
        event.preventDefault();

        const hotel={
            hotelName: this.state.hotelName,
            numberOfStars: this.state.numberOfStars

        };
        axios.post("http://localhost:8080/api/trips/hotel", hotel)
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

    HotelChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    HotelList = () =>{
        return this.props.history.push("/hotellist");
    };

    findHotelById = (idHotel) => {
        axios.get("http://localhost:8080/api/trips/hotel/"+idHotel)
            .then(response=>{
                if(response.date!=null){
                    this.setState({
                        idHotel: response.data.idHotel,
                        hotelName: response.data.hotelName,
                        numberOfStars: response.data.numberOfStars
                    });
                }
            }).catch((error)=>{
            console.error("Error - "+error);
        });
    };





    render() {
        const {hotelName,numberOfStars} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast children = {{show:this.state.show, message:"Hotel Saved Successfully."}}/>

                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Hotel</Card.Header>
                    <Form  onReset={this.resetHotel} onSubmit={this.submitHotel}  id="hotelFormId" >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNameId">
                                    <Form.Label>Hotel Name</Form.Label>
                                    <Form.Control required
                                                  type="text" name="hotelName"
                                                  value={hotelName}
                                                  onChange={this.HotelChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter hotel name"

                                    />
                                </Form.Group>
                                <Form.Group as={Col}controlId="formDescId">
                                    <Form.Label>Hotel numberOfStars</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="numberOfStars"
                                                  value={numberOfStars}
                                                  onChange={this.HotelChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter hotel stars"

                                    />
                                </Form.Group>
                            </Form.Row>


                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} />{this.state.idHotel ? "Update" : "Save"}
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}
                            <Button size="sm" variant="info" type="button" onClick={this.HotelList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Hotel List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

            </div>

        );
    }
}
export default Hotel;