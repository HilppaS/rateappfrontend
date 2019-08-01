import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardImg from "react-bootstrap/CardImg";
import Redirect from "react-router-dom/es/Redirect";
import Modal from 'react-awesome-modal';

class CardWithpic extends Component {

  /*  state = {redirect: false}
    setRedirect = () => {
        this.setState({redirect: true})
    }
    renderRedirect = () => {
        if (this.state.redirect) {return <Redirect to='localhost:3000/api/users' />}
    }  */

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
    render() {
        console.log(this.props)
        return (

                <Card>
                    <CardImg variant="top" src={this.props.content.image.name} onMouseOver={() => console.log("Hovered!")}/>
                    <Card.Body className="text-center">
                        <Card.Title>{this.props.content.headline}</Card.Title>
                        <Card.Text>{this.props.content.text}</Card.Text>
                        {/*    {this.renderRedirect()} */}
                        <Button variant="dark" onClick={this.setRedirect} >Linkki</Button>
                        <Card.Text> posted: {this.props.content.createdAt}</Card.Text>

                        <Button variant="info" onClick={this.openModal}>More info</Button>
                        <Modal visible={this.state.visible} width="80%" height="60%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div>
                                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            </div>
                        </Modal>
                    </Card.Body>
                </Card>
        );
    }
}
export default CardWithpic;