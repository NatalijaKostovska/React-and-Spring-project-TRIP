import React from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";


class Footer extends React.Component{

    render() {
        let fullyear = new Date().getFullYear();
        return (
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullyear} All rights reserved</div>
                    </Col>
                </Container>
            </Navbar>
            );
    }

}
export default Footer;