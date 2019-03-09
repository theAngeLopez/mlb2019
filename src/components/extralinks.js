import React from "react"

import "./extralinks.css"

class ExtraLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links,
    };
  }

  render() {
    const { links } = this.state;

    const extraLinks = []

    links.forEach((link) => {
      console.log(link)
      extraLinks.push(
        <span className="link-url">
          <a href={ link }>{ link }</a>
        </span>
      );
    })

    return (
      <div className="links">
        <span className="title">Extra links: </span>{extraLinks}
      </div>
    );
  }
}

export default ExtraLinks
