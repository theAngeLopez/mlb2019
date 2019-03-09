import React from "react"
import ExtraLinks from "../components/extralinks"
import PropTypes from 'prop-types';
import Firebase from "../services/firebase"


import { Card } from 'semantic-ui-react'

import "./term.css"

class Term extends React.Component {

  getTerm() {
    console.log(Firebase.glossary()
      .then((data) => {
        console.log('DATA', data);
        return this.setState({definition: data});
      })
      .catch((error) => {
        console.log('ERROR', error);
      })
    );
  }

  render() {
    const { title, definition } = this.props;
    const links = ["link1.com", "link2.com", "link3.com"]

    return (
      <div className="term-component">
        <Card fluid>
          <Card.Content>
            { title !== "" ? <Card.Header className="term-title">{ title }</Card.Header> : <Card.Header className="no-term-selected-title">Click a term on the right to see its definition</Card.Header> }
            <Card.Description>{ definition }</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ExtraLinks links={ links }/>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Term
