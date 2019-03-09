import React from "react"

import { Header } from 'semantic-ui-react'

import Caption from '../caption';


const captionHash = {
  1: 'Starter',
  2: 'Minor Leagues',
  6: 'Bullpen',
  9: 'Major Leagues',
  11: 'Strikeout',
  14: 'Innings',
  17: 'Up/Down',
  27: 'Right Field',
  40: 'Ball',
  41: 'Strike',
  42: 'Plate Appearance',
  44: 'Home Run',
  67: 'Opener',
};


class CaptionList extends React.Component {
  state = {
    captions: [],
    currentTime: 0,
  };

  componentDidMount() {
    let currentTime = 0;
    window.setInterval(() => {
      currentTime++;
      if (captionHash[currentTime]) {
        this.setState({ captions: this.state.captions.concat(captionHash[currentTime])})
      }
    }, 1000)
  }

  render() {
    return (
      <div className="caption-list" style={{ marginTop: '10px' }}>
        <Header size="large">TITLE TBD</Header>
        <div style={{ height: '500px', overflow: 'scroll' }}>
          { this.state.captions.map((caption) => {
            return <Caption text={caption} />
          }) }
        </div>
      </div>
    );
  }
};

export default CaptionList
