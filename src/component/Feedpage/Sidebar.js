import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";



class Sidebar extends Component {

    //täällä kortteja, johon voisi halutessaan lisätä dataa esim. käyttäjien, reseptien tai arviointien määrästä

    render() {
        return (
                <div className="sidebar">

                    <Card bg="info" text="white" style={{ width: '18rem'}}>
                        <Card.Body className="text-center">
                            <CardImg variant="top" src="./tyyppi.png" width={5} alt="Logo" />
                            <Card.Title>USERS</Card.Title>
                            <Card.Text><p className="useramount">500</p></Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card bg="success" text="white" style={{ width: '18rem',alignContent: 'center' }}>
                        <Card.Body className="text-center">
                            <Card.Title>RECIPES</Card.Title>
                            <Card.Text><p className="useramount">1000</p></Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>RATINGS</Card.Title>
                            <Card.Text><p className="useramount">1000</p></Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                </div>

        );
    }

}

export default Sidebar;