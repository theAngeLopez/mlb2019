import React from "react"
import ExtraLinks from "../components/extralinks"

class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      definition: props.definition,
    };
  }

  render() {
    const { title, definition } = this.state;
    const links = ["link1.com", "link2.com", "link3.com"]

    return (
      <div>
        <h1 className="term-title">{ title }</h1>
        <p className="term-definition">{ definition }</p>
        <ExtraLinks links={ links }/>
      </div>
    );
  }
}

export default Term
