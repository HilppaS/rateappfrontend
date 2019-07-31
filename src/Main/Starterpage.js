import React, { Component } from "react";
import Cardtemplate from "../component/Cardtemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Starterpage.css";
import Image from "react-bootstrap/Image";
import axios from "axios";

class Starterpage extends Component {
  state = { teksti: [] };
  /* componentDidMount() {
    fetch("http://localhost:8080/api/content?page=0&size=10")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.dir(this.data);
        this.setState({ teksti: data });
      });
  } */
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/content?page=0&size=10")
        .then(res => {
            console.log(res)
            this.setState({teksti: res.data.content})
        })
  }

  render() {
     var content = this.state.teksti.map(sisalto => {
      return <Cardtemplate content={sisalto} key={sisalto.id} />;
    }); 
    console.log(this.state);

    return (
      <div>
        <h1>Feed</h1>
        <Container>
          <Row>
            <Col className="bsPrefix">Column left</Col>
                    <Col md="auto">{content}</Col>
            <Col className="right">Column right</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Starterpage;
