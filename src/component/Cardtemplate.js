import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class Cardtemplate extends Component {



    render() {
        return (
            <div>

                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.content.headline}</Card.Title>
                        <Card.Text>
                            {this.props.content.text}
                        </Card.Text>
                        <Button variant="info" >Linkki</Button>
                    </Card.Body>
                </Card>

            </div>
        );
    }

    buttonclick=()=>{

    }
}

export default Cardtemplate;