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

    if (links.length === 0) {
      extraLinks.push(<span>no extra links</span>)
    }
    else {
      links.forEach((link, index) => {
        extraLinks.push(
          <span className="link-url">
            <a href={ link }>Link { index + 1 }</a>
          </span>
        );
      })
    }

    return (
      <div className="links">
        <span className="title">Extra resources: </span>{extraLinks}
      </div>
    );
  }
}

export default ExtraLinks
