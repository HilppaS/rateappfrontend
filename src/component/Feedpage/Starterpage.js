import React, { Component } from "react";
import CardWithpic from "../CardWithpic";
import CardWithoutpic from '../CardWithoutpic'
import "./Starterpage.css";
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";
import AddContent from "../AddContent/AddContent";
import useDataHook from "../hooks/GetDataHook";
import {ToastContainer, toast} from 'react-toastify'

class Starterpage extends Component {
  state = { teksti: [], render: [] };
  componentDidMount() {
    axios.get("http://localhost:8080/api/content?page=0&size=100").then(res => {
      console.log(res);
      this.setState({ teksti: res.data.content });
      this.setState({ render: res.data.content });
    });
  }

  reRender = response => {
    axios.get("http://localhost:8080/api/content?page=0&size=10").then(res => {
      console.log(res);
      this.setState({ teksti: res.data.content });
      this.setState({ render: res.data.content });
    });
  };

  filterData = e => {
    const filtered = this.state.teksti.filter(t =>
      t.text.includes(e.target.value)
    );
    this.setState({ render: filtered });
  };

  notify = () => toast.success("Great Scott!");
  render() {
    var content = this.state.render.map(sisalto => {
      if (sisalto.image == null) {
        return <CardWithoutpic content={sisalto} key={sisalto.id} />;
      }
      return <CardWithpic content={sisalto} key={sisalto.id} />;
    });

    return (
      <div>
        {/*  <Sidebar/> */}
        <div style={inputDivStyle}>
          Filter:
          <input
            type="text"
            onChange={this.filterData}
            style={inputStyle}
            size="50"
          />
        </div>
        <CardColumns>{content}</CardColumns>
        {/*   <Col xs={6} md={4}>*/}
        <AddContent renderOnSubmit={this.reRender} toast={this.notify} />
        
        <ToastContainer toast={this.toast}/>
      </div>
    );
  }
}
const inputDivStyle = {
  padding: '10px',
  marginLeft: '30%',
  marginRight: '50px'
}
const inputStyle = {
  padding: '5px',
}
export default Starterpage;
