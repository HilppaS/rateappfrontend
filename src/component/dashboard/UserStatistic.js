import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'

export default function UserStatistic(props) {
    const test = props.data
    console.log(test.length)
    return (
      <div>
        <CardDeck>
          <Card bg="primary">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                {props.data.length} arvosteltua shittiä
              </Card.Text>
            </Card.Body>
            <Card.Footer >
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="secondary" text="white">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="success">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer
                content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
}
