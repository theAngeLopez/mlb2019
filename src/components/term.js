import React from "react"
import ExtraLinks from "../components/extralinks"
import PropTypes from 'prop-types';
import Firebase from "../services/firebase"


class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      definition: props.definition,
    };
  }

  static contextTypes = {
    firebase: PropTypes.object,
  };

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
    const { title, definition } = this.state;
    const links = ["link1.com", "link2.com", "link3.com"]

    return (
      <div>
        { this.getTerm() }
        <h1 className="term-title">{ title }</h1>
        <p className="term-definition">{ definition }</p>
        <ExtraLinks links={ links }/>
      </div>
    );
  }
}

export default Term
