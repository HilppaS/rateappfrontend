import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Statistics extends Component {
    render() {
        return (
            <div>
                <Card bg="info" text="white" style={{ width: '18rem' }}>
                    <Card.Body className="text-center">
                        {/*   <CardImg variant="top" src={lataus} alt="Logo" />*/}
                        <Card.Title>USERS</Card.Title>
                        <Card.Text><p className="useramount">500</p></Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="success" text="white" style={{ width: '18rem',alignContent: 'center' }}>
                    <Card.Body className="text-center">
                        <Card.Title>RECIPES</Card.Title>
                        <Card.Text><p className="useramount">1000</p></Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Body className="text-center">
                        <Card.Title>RATINGS</Card.Title>
                        <Card.Text><p className="useramount">1000</p></Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Statistics;