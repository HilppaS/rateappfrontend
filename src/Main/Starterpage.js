import React, { Component } from "react";
import Cardtemplate from "../component/Cardtemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Starterpage.css';
import Sidebar from "./Sidebar";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { CardColumns } from "react-bootstrap";

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
            <h1>RECENT POSTS</h1>
            <CardColumns>{content}</CardColumns>
          </div>
        );
    }
}
export default Starterpage;
