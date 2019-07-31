import React, {Component} from 'react';
import Cardtemplate from "../component/Cardtemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Starterpage.css';
import Sidebar from "./Sidebar";

class Starterpage extends Component {

    state={teksti:[]};
    componentDidMount(){
        fetch("http://localhost:8080/api/content").then(function (response){
            return response.json()
        }).then((data)=>{
            console.dir(this.data)
            this.setState({teksti:data})
        });
    }

    render() {
        var content= this.state.teksti.map(sisalto => {
            return <Cardtemplate content ={sisalto} key={sisalto.id}></Cardtemplate>
        })
        console.log(this.state);

        return (
            <div>
            <h1>RECENT POSTS</h1>
                <Container>
                    <Row>
                        <Sidebar/>
                        <Col md="auto">{content}</Col>
                        <Col className="right"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Starterpage;

