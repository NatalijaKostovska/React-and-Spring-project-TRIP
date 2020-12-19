import React from 'react';
import {Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faSave,faUndo, faPlusSquare, faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
class Grad extends React.Component{
    constructor(props){
        super(props);
        this.state=this.initialState;
        this.state.show=false;
        this.GradChange=this.GradChange.bind(this);
        this.submitGrad = this.submitGrad.bind(this);
    }
    initialState ={
        idGrad:'', gradIme:''
    };
    componentDidMount() {
        const idGrad = +this.props.match.params.idGrad;
            if(idGrad){
                this.findCityById(idGrad);
        }
    }
    findCityById = (idGrad) => {

        axios.get("http://localhost:8080/api/trips/cities/"+idGrad)
            .then(response=>{
                if(response.date!=null){
                     this.setState({
                        idGrad: response.data.idGrad,
                         gradIme: response.data.gradIme
                     });
                }
            }).catch((error)=>{
            console.error("Error - "+error);
        });
    };
    GradList = () =>{
        return this.props.history.push("/citiesList");
    };
    resetGrad = () => {
        this.setState(() => this.initialState);
    };
    submitGrad = event =>{
        event.preventDefault();

        const grad={
            gradIme: this.state.gradIme
        };

        axios.post("http://localhost:8080/api/trips/city", grad)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"post"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                } else {
                    this.setState({"show":false});
                }
            });
        this.setState(this.initialState);

    };

    GradChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    // updateGrad = (idGrad) => {
    //     // console.log("Update grad" + idGrad);
    //
    //     axios.put("http://localhost:8080/api/city/"+idGrad)
    //         .then(response => {
    //             if(response.data != null) {
    //
    //                 this.setState({"show":true, "method":"put"});
    //             //     this.setState({
    //             //         editTodo: {
    //             //     ...this.state.editTodo,
    //             //     }
    //             // })
    //
    //                 this.setState({ idGrad: response.data.idGrad});
    //                 // setTimeout(() => this.GradList(), 3000);
    //
    //             } else {
    //                 this.setState({"show":false});
    //             }
    //         });
    // };
    render() {
        const {gradIme} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast show = {this.state.show}  message = {this.state.method === "put" ? "City Updated Successfully." : "City Saved Successfully."} type = {"success"}/>

                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update City" : "Add New City"}
                    </Card.Header>
                    <Form onReset={this.resetGrad} onSubmit={this.state.id ? this.updateGrad : this.submitGrad} id="cityFormId">

                         <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNameId">
                                    <Form.Label>City Name</Form.Label>
                                    <Form.Control required
                                                  type="text" name="gradIme"
                                                  value={gradIme}
                                                  onChange={this.GradChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter City name"

                                    />
                                </Form.Group>
                            </Form.Row>


                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}
                            <Button size="sm" variant="info" type="button" onClick={this.GradList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Book List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

            </div>

        );
    }
}
export default Grad;