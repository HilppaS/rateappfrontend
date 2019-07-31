import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardImg from "react-bootstrap/CardImg";
import Redirect from "react-router-dom/es/Redirect";



class Cardtemplate extends Component {
    state = {redirect: false}
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='localhost:3000/api/users' />
        }
    }
    render() {
        return (
            <div className="CardItem">
                <Card style={{width:'25rem',padding: 10 }}>
                <CardImg variant="top" src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" onMouseOver={() => console.log("Hovered!")}/>
                    <Card.Body className="text-center">
                        <Card.Title>{this.props.content.headline}</Card.Title>
                        <p>Käyttäjänimi</p>
                        <Card.Text>
                            {this.props.content.text}
                        </Card.Text>
                        {this.renderRedirect()}
                        <Button variant="info" onClick={this.setRedirect}>Linkki</Button>

                        <p>pvm/kk/vv</p>
                    </Card.Body>
                </Card>
                <br/>

            </div>
        );
    }
}

export default Cardtemplate;