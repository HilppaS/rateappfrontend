import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardImg from "react-bootstrap/CardImg";
import Modal from "react-awesome-modal";
import axios from "axios";


class CardWithpic extends Component {

    constructor(props) {
        super(props);
        this.state = {visible : false}
    }
    openModal = () => {
        this.setState({visible : true});
    }
    closeModal() {
        this.setState({visible : false});
    }
    shoot() {
        alert("Great Shot!");
    }

    handleLike = e =>{
        e.preventDefault();
        const token = localStorage.getItem("Token");
        const formData = {id:this.props.content.id}
        console.log(formData)

        axios.post("/api/content/like",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                    /* "Content-Type": "multipart/form-data" */
                }
            }
        )
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };


    render() {

        return (

                <Card>
                    <CardImg variant="top" src={this.props.content.image.name} onMouseOver={() => console.log("Hovered!")}/>
                    <Card.Body className="text-center">
                    <Card.Title>{this.props.content.headline}</Card.Title>
                    <Card.Text>{this.props.content.text}</Card.Text>
                    <Button variant="warning" onClick={this.shoot}> Like</Button>
                    <Button variant="info" onClick={this.openModal}>More info</Button>  <Modal visible={this.state.visible} width="70%" height="70%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <img src={this.props.content.image.name}></img>
                        <p> {this.props.content.headline}</p>
                        <p> {this.props.content.text}</p>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                    </Modal>
                </Card.Body>
                </Card>
);
}

}
export default CardWithpic;
