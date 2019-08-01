import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

export default function PostModal(props) {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("Token");
    console.log(file);
    const data = { headline, content }
    console.log(data)
    let formData = new FormData();
     formData.set('headline', headline)
    formData.set('text', content) 
    formData.append('file', file)
    
    console.log(formData)
    axios
      .post(
        "http://localhost:8080/api/content",
          /* {
          headline: headline,
          text: content,
          file: file
        }  */formData
        ,
        {
          headers: {
            Authorization: "Bearer " + token
            /* "Content-Type": "multipart/form-data" */
          }
        }
      )
      .then(res => console.log(res))
      .catch(error => console.log(error));
    props.onHide();
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleHeadlineChange = e => {
    setHeadline(e.target.value);
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
    console.log(file);
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
        <Form onSubmit={handleSubmit} >
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
          <Form.Group controlId="formBasicFile">
            <Form.Label>Upload file</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleFileChange}
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
