import React, {Component} from 'react';
import Cardtemplate from "../component/Cardtemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Starterpage.css';
import Sidebar from "./Sidebar";
import Image from "react-bootstrap/Image";

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
                        <Col xs={6} md={4}>
                        <Image src="https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" thumbnail />
                            <Image src="https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" thumbnail />
                            <Image src="https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" thumbnail />
                        </Col>
                        <Col md="auto">{content}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Starterpage;

