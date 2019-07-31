import React, { useState, useEffect, Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import PostModal from "./PostModal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AddContent() {
    const [modalShow, setModalShow] = React.useState(false);
    const [isLogged, setIsLogged] = useState();
    const [showButton, setShowButton] = useState();

    useEffect(() => {
      const loggedIn =
        localStorage.getItem("Token") === null ? true : false;
      setIsLogged(loggedIn);
      
    });
    
    useEffect(() => {
        isLogged ? setShowButton(
            <div />)
         : setShowButton(
                <div>
                    <Fab color="primary" aria-label="Add" style={btnStyle}>
                        <AddIcon onClick={() => setModalShow(true)} />
                    </Fab>
                    <PostModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            )
    });
  return <div>{showButton}</div>;
}
const btnStyle = {
  float: "right",
  position: "fixed",
  bottom: "40px",
  right: "40px"
};
