import React, { Component } from "react";
import Redirect from "react-router";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment"

class CardWithoutpic extends Component {
  render() {
      const test = this.props.content.createdAt;
      console.log(test)
      /* const date = moment(test, "YYYY-MM-DD HH:mm:ss").subtract(3, 'hour');
      console.log(date) */
    return (
      <div>
        {/* <span>{moment().fromNow()}</span> */}
        <Card>
          {moment(test, "YYYY-MM-DD HH:mm:ss").fromNow()}
          {moment(test).subtract(3, "hour").fromNow()}
          <Card.Body className="text-center">
            <Card.Title>{this.props.content.headline}</Card.Title>
            <Card.Text>{this.props.content.text}</Card.Text>
            <Card.Text />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardWithoutpic;
