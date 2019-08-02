import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  NavDropdown
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, username, email, password };
    props.submituser(user);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register new rater
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Header(props) {
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  
  const forceReload = () => {
    props.forceReload();
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("Token") !== null ? true : false;
    setIsLogged(loggedIn);
    return () => {};
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/signin", {
        usernameOrEmail: usernameInput,
        password: passwordInput
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("Token", res.data.accessToken);
          localStorage.setItem("Username", usernameInput);
          
        }
      })
      .then(setIsLogged(true))
      .then(props.history.push("starter"))
      .then(forceReload());

    /* .then(window.open("/main")) */

    setUsernameInput("");
    setPasswordInput("");
  };

  const handleNameChange = e => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = e => {
    setPasswordInput(e.target.value);
  };

  const submitUser = data => {
    axios
      .post("http://localhost:8080/api/auth/signup", data)
      .then(res => {
        console.log(res);
        if (res.status === 400) {
          alert("alert!");
        }
      })
      .catch(error => console.log(error));
  };

  const logOut = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username");
    setIsLogged(false);
  };

  const isLoggedin = isLogged ? (
    <div>
      <React.Fragment>{localStorage.getItem("Username")}</React.Fragment>
      <Button variant="dark" onClick={logOut} style={{ marginLeft: "10px" }}>
        Logout
      </Button>
    </div>
  ) : (
    <div>
      <Form inline="true" onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Username"
          className="mr-sm-2"
          value={usernameInput}
          onChange={handleNameChange}
        />
        <FormControl
          type="password"
          placeholder="Password"
          className="mr-sm-2"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <Button variant="outline-primary" onClick={handleSubmit}>
          Login
        </Button>
        <Button
          variant="outline-info"
          inline="true"
          style={{ marginLeft: "8px" }}
          onClick={() => setModalShow(true)}
        >
          Register
        </Button>
      </Form>
    </div>
  );

  return (
    <Navbar
      collapseOnSelect
      bg="light"
      variant="light"
      sticky="top"
      expand="md"
    >
      <Navbar.Brand href="#home">LikeApp!</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/starter" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Nav.Link href="#pricing">Stats</Nav.Link>
      </Nav>

      {isLoggedin}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        submituser={submitUser}
      />
    </Navbar>
  );
}
