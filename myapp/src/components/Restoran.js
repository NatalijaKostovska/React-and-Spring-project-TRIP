import React from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faSave,faUndo, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
class Restoran extends React.Component{
    constructor(props){
        super(props);
        this.state= this.initialState;
        this.state.show=false;
        this.RestoranChange=this.RestoranChange.bind(this);
        this.submitRestoran = this.submitRestoran.bind(this);
    }
    initialState ={
        idRestoran:'',name:'',stars:'',opis:''
    }

    componentDidMount() {
        const idRestoran = +this.props.match.params.idRestoran;
        if(idRestoran){
            this.findResById(idRestoran);
        }
    }
    findResById = (idRestoran) => {
        axios.get("http://localhost:8080/api/trips/restaurants/"+idRestoran)
            .then(response=>{
                if(response.date!=null){
                    this.setState({
                        idRestoran: response.data.idRestoran,
                        name: response.data.name,
                        stars: response.data.stars,
                        opis:response.data.opis
                    });
                }
            }).catch((error)=>{
            console.error("Error - "+error);
        });
    };
    RestoranList = () =>{
        return this.props.history.push("/restoranlist");
    };
    resetRestoran = () => {
        this.setState(() => this.initialState);
    }
    submitRestoran = event =>{
        event.preventDefault();

        const restoran={
            name: this.state.name,
            stars: this.state.stars,
            opis: this.state.opis

        };
        axios.post("http://localhost:8080/api/trips/restaurants", restoran)
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

    RestoranChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const {name,stars,opis} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast children = {{show:this.state.show, message:"Restaurant Saved Successfully."}}/>

                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Restaurant</Card.Header>
                    <Form  onReset={this.resetRestoran} onSubmit={this.submitRestoran}  id="restoranFormId" >
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNameId">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control required
                                                  type="text" name="name"
                                                  value={name}
                                                  onChange={this.RestoranChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter restaurant name"

                                    />
                                </Form.Group>
                                <Form.Group as={Col}controlId="formDescId">
                                    <Form.Label>Restaurant number Of Stars</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="stars"
                                                  value={stars}
                                                  onChange={this.RestoranChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter restaurant stars"

                                    />
                                </Form.Group>
                                <Form.Group as={Col}controlId="formDescId">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="opis"
                                                  value={opis}
                                                  onChange={this.RestoranChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter restaurant description"

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
                            </Button>{' '}
                            <Button size="sm" variant="info" type="button" onClick={this.RestoranList.bind()}>
                            <FontAwesomeIcon icon={faList} /> Restorani List
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>

        );
    }
}
export default Restoran;