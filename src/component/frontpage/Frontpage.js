import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default class Frontpage extends Component {
    render() {
        return (
            <div className="Jumbotron">
            <Jumbotron >
              <h1>LIKE APP!</h1>
              <p>
                Like stuff and things, fun fun fun!
              </p>
              <p>
                <Button variant="dark">Learn more</Button>
              </p>
                </Jumbotron>
          </div>
        );
    }
}
