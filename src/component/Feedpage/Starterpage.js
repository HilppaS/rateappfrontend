import React, { Component } from "react";
import CardWithpic from "../CardWithpic";
import './Starterpage.css';
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";


class Starterpage extends Component {
  state = { teksti:[]};
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
         {/*}    if (content.image == null){
             return <CardWithoutpic content = {sisalto} key={sisalto.id}/>
         }  */}
      return <CardWithpic content={sisalto} key={sisalto.id} />;


    }); 
    console.log(this.state);

        return (
            <div>
                {/*    <Sidebar/> */}
                <CardColumns>{content}</CardColumns>
                {/*   <Col xs={6} md={4}>*/}
            </div>
        );
    }
}
export default Starterpage;
