import React, { Component } from "react";
import CardWithpic from "../CardWithpic";
import CardWithoutpic from '../CardWithoutpic'
import "./Starterpage.css";
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";
import AddContent from "../AddContent/AddContent";
import useDataHook from "../hooks/GetDataHook";

class Starterpage extends Component {
  state = { teksti: [], render: [] };
  componentDidMount() {
    axios.get("http://localhost:8080/api/content?page=0&size=10").then(res => {
      console.log(res);
      this.setState({ teksti: res.data.content });
    });
  }

  reRender = response => {
    axios.get("http://localhost:8080/api/content?page=0&size=10").then(res => {
      console.log(res);
      this.setState({ teksti: res.data.content });
    });
  };
  render() {
    var content = this.state.teksti.map(sisalto => {
      if (sisalto.image == null) {
        return <CardWithoutpic content={sisalto} key={sisalto.id} />;
      }
      return <CardWithpic content={sisalto} key={sisalto.id} />;
    });
    console.log(this.state);
    console.log(this.props);

    return (
      <div>
        {/*  <Sidebar/> */}
        <CardColumns>{content}</CardColumns>
        {/*   <Col xs={6} md={4}>*/}
        <AddContent renderOnSubmit={this.reRender} />
      </div>
    );
  }
}
export default Starterpage;
