import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default class Frontpage extends Component {
    render() {
        return (
            <div className="Jumbotron">
            <Jumbotron >
              <h1>Rate app!</h1>
              <p>
                Rate stuff and things, fun fun fun!
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
                </Jumbotron>
          </div>
        );
    }
}
