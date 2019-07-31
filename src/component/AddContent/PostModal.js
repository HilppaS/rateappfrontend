import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

export default function PostModal(props) {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("Token");
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    headers.append("Content-Type", "application/json");
    console.log(headers);

    const def = { headers: headers };
    console.log(def);
    const body = { headline, text: content };
    console.log(body);
    axios
      .post(
        "http://localhost:8080/api/content",
        {
          headline: headline,
          text: content
        },
        { headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" } }
      )
      .then(res => console.log(res));
    props.onHide();
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleHeadlineChange = e => {
    setHeadline(e.target.value);
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
          Rate new shit!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicHeadline">
            <Form.Label>Headline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter headline"
              value={headline}
              onChange={handleHeadlineChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rate shit!"
              value={content}
              onChange={handleContentChange}
            />
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
