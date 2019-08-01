import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardImg from "react-bootstrap/CardImg";
import Modal from "react-awesome-modal";
import axios from "axios";
import moment from "moment";

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
    this.state = { visible: false };
  }
  openModal = () => {
    this.setState({ visible: true });
  };
  closeModal() {
    this.setState({ visible: false });
  }

  handleLike = e => {
    e.preventDefault();
    const token = localStorage.getItem("Token");
    const formData = this.props.content.id;
      const test = { contentId: this.props.content.id };
    console.log(test);

    axios
      .post("http://localhost:8080/api/content/like", test, {
        headers: {
          Authorization: "Bearer " + token
          /* "Content-Type": "application/json" */
        }
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  render() {
    const test = this.props.content.createdAt;
    return (
      <Card>
        {moment(test, "YYYY-MM-DD HH:mm:ss").fromNow()}
        <CardImg
          variant="top"
          src={this.props.content.image.name}
          onMouseOver={() => console.log("Hovered!")}
        />
        <Card.Body className="text-center">
          <Card.Title>{this.props.content.headline}</Card.Title>
          <Card.Text>{this.props.content.text}</Card.Text>
          {/*    {this.renderRedirect()} */}
          <Button variant="dark" onClick={this.setRedirect}>
            Linkki
          </Button>
          <Button
            variant="warning"
            onClick={this.handleLike}
            value={this.props.content.isLiked}
          >
            LIKE
          </Button>
          <Modal
            visible={this.state.visible}
            width="100%"
            height="100%"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className="infoModal">
              <img src={this.props.content.image.name} />
              <p> {this.props.content.headline}</p>
              <p> {this.props.content.text}</p>
              <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>

          <Button variant="info" onClick={this.openModal}>
            More info
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default CardWithpic;
