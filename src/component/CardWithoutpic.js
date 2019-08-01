import React, {Component} from 'react';
import Redirect from "react-router";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CardWithoutpic extends Component {



    render() {
        return (
            <Card>
                <Card.Body className="text-center">
                    <Card.Title>{this.props.content.headline}</Card.Title>
                    <Card.Text>{this.props.content.text}</Card.Text>
                    <Card.Text> posted: {this.props.content.createdAt}</Card.Text>
                </Card.Body>


            </Card>
        );
    }
}

export default CardWithoutpic;