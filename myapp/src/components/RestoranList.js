import React from 'react';
import {Card,Table,Image,ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Link} from "react-router-dom";
class RestoranList extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            restorani : []
        };
    }
    componentDidMount() {
        this.findallrestorani();
    }
    findallrestorani(){
        axios.get("http://localhost:8080/api/trips/restaurants")
            .then(response => response.data)
            .then((data)=>{
                this.setState({restorani:data});
            });
    }
    deleteRestoran = (idRestoran) => {
        axios.delete("http://localhost:8080/api/trips/restaurants/"+idRestoran)
            .then(response => {
                if(response.data != null) {
                    // this.setState({"show":true});
                    // setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        restorani: this.state.restorani.filter(restoran => restoran.idRestoran !== idRestoran)
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
                <Card.Header><FontAwesomeIcon icon={faList} />  Restaurants List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of stars</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.restorani.length === 0?
                            <tr align="center">
                                <td colSpan="8">{this.state.restorani.length}No restaurant available</td>

                            </tr>:
                            this.state.restorani.map((restoran)=>(
                                <tr key={restoran.idRestoran}>
                                    <td>{restoran.name}</td>
                                    <td>{restoran.stars}</td>
                                    <td>{restoran.opis}</td>

                                    <td>

                                        <ButtonGroup>
                                            <Link to={"edit/restoran/"+restoran.idRestoran} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            <Button size="sm" variant="outline-danger" onClick={this.deleteRestoran.bind(this,restoran.idRestoran)}><FontAwesomeIcon icon={faTrash} /></Button>
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
export default RestoranList;