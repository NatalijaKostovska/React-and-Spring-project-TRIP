import React from 'react';
import {Card, Table, Image, ButtonGroup, Button, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Link} from "react-router-dom";

class GradList extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            grad : []
        };
    }
    componentDidMount() {
        this.findallgradovi();
    }
    findallgradovi(){
        axios.get("http://localhost:8080/api/trips/cities")
            .then(response => response.data)
            .then((data)=>{
                this.setState({grad:data});
            });
    }
    deleteGrad = (idGrad) => {
        axios.delete("http://localhost:8080/api/trips/city/"+idGrad)
            .then(response => {
                if(response.data != null) {
                    // this.setState({"show":true});
                    // setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        grad: this.state.grad.filter(grad => grad.idGrad !== idGrad)
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
                <Card.Header><FontAwesomeIcon icon={faList} />  Cities List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.grad.length === 0?
                            <tr align="center">
                                <td colSpan="8">{this.state.grad.length}No Cities available</td>

                            </tr>:
                            this.state.grad.map((grad)=>(
                                <tr key={grad.idGrad}>
                                    <td>{grad.gradIme}</td>
                                    <td>

                                        <ButtonGroup>
                                            <Link to={"edit/grad/"+grad.idGrad} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={this.deleteGrad.bind(this,grad.idGrad)}><FontAwesomeIcon icon={faTrash} /></Button>
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
export default GradList;