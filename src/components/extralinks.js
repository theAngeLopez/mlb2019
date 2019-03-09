import React from "react"

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
        <div>
          <a href={ link }>{ link }</a>
        </div>
      );
    })

    return (
      <div className="links">
        {extraLinks}
      </div>
    );
  }
}

export default ExtraLinks
