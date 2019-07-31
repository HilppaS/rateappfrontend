import React from 'react'
import {Card} from 'react-bootstrap'
export default function UserRecentPost(props) {
    return (
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
          <Card.Body>
            <Card.Title>{props.post.headline}</Card.Title>
                <Card.Text>
                    {props.post.content}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    );
}
