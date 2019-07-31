import React from "react";
import {Card } from 'react-bootstrap'

export default function ImgMediaCard(data) {
console.log(data)
    return (
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
        <Card.Body>
          <Card.Text>
          Nimi, jotain, jotain
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
