import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import CaptionList from "../components/captionList"
import Term from "../components/term"

import 'semantic-ui-css/semantic.min.css'

class IndexPage extends React.Component {
  state = {
    currentSelectedCaption: '',
  };

  onChangeCaption = (text) => {
    console.log('TEXT?', text);
    this.setState({ currentSelectedCaption: text });
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '5px', width: '75%'}}>
          <Youtube />
          <Term title={this.state.currentSelectedCaption} definition={this.state.currentSelectedCaption}/>
        </div>
        <div style={{ width: '33%', height: '772px'}}>
          <CaptionList onClick={ this.onChangeCaption } />
        </div>
      </div>
    )
  }
}

export default IndexPage;
