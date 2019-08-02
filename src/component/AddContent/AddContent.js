import React, { useState, useEffect, Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import PostModal from "./PostModal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AddContent(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [isLogged, setIsLogged] = useState();
  const [propsi, setProps] = useState(props);

  useEffect(() => {
    const loggedIn = localStorage.getItem("Token") === null ? true : false;
    setIsLogged(loggedIn);
  }, props);

  const showButton =
    isLogged || window.location.pathname === "/" ? (
      <div />
    ) : (
      <div>
        <Fab color="primary" aria-label="Add" style={btnStyle}>
          <AddIcon onClick={() => setModalShow(true)} />
        </Fab>
        <PostModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          renderOnSubmit={props.renderOnSubmit}
        />
      </div>
    );

  console.log(showButton);
  return <div>{showButton}</div>;
}
const btnStyle = {
  float: "right",
  position: "fixed",
  bottom: "40px",
  right: "40px"
};
