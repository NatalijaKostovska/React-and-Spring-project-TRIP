import React from 'react';
import {Jumbotron} from "react-bootstrap";


class Welcome extends React.Component{

    render() {
        return (
            <div>
                <Jumbotron className="bg-dark text-white">
                    <h1>Welcome to our page!</h1>
                    <p>
                        “Better to see something once than hear about it a thousand times”
                    </p>
                    <p>
                    </p>
                </Jumbotron>
            </div>
        );
    }

}
export default Welcome;