import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import PostModal from "./PostModal";

export default function AddContent() {
      const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <button style={buttonStyle} onClick={() => setModalShow(true)}>
        +
      </button>
      <PostModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "36px",
  margin: "4px 2px",
  borderRadius: "50%",
  float: "right",
  position: "fixed",
  bottom: "40px",
  right: "20px"
};
