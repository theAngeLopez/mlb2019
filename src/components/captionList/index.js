import React from "react"

import { Header } from 'semantic-ui-react'

import Caption from '../caption';


const captionHash = {
  1: 'Starter',
  2: 'Minor Leagues',
  6: 'Bullpen',
  9: 'Major Leagues',
  11: 'Strikeout',
  14: 'Inning',
  17: 'Up Down',
  27: 'Right Field',
  40: 'Ball',
  41: 'Strike',
  42: 'Plate Appearance',
  44: 'Home Run',
  67: 'Opener',
  70: 'Start',
  90: 'Strikeout',
  102: 'Count',
  106: 'Hit',
  109: 'Second',
  115: 'Third',
  122: 'Glove',
  128: 'Double',
  134: 'Fastball Count',
  142: 'Error',
  146: 'Third Base',
  156: 'Double',
  162: 'Error',
  168: 'Home Run',
  180: 'Pitcher',
  183: 'Hit',
  188: 'At Bat',
  198: 'Inning',
  206: 'Umpire',
  218: 'Foul',
  219: 'First',
  221: 'Double',
  224: 'Home Run',
  226: 'Single',
  234: 'Mound',
  255: 'Hit',
  264: 'Left Field',
  266: 'Double',
  267: 'Second',
  271: 'Extra Base Hit',
  275: 'Hit',
  295: 'Fastball',
  299: 'Run',
};


class CaptionList extends React.Component {
  state = {
    captions: [],
    currentTime: 0,
  };

  updateScroll = () => {
    var element = document.getElementById("scroll-list");
    element.scrollTop = element.scrollHeight;
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

  componentDidUpdate() {
    this.updateScroll();
  }

  render() {
    return (
      <div className="caption-list">
        <Header size="large" style={{ marginTop: '10px' }}>TITLE TBD</Header>
        <div id="scroll-list" style={{ height: '750px', 'overflow-y': 'scroll' }}>
          { this.state.captions.map((caption) => {
            return <Caption text={caption} onClick={ this.props.onClick } />
          }) }
        </div>
      </div>
    );
  }
};

export default CaptionList
