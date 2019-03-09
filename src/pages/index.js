import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import CaptionList from "../components/captionList"
import Term from "../components/term"
import Firebase from "../services/firebase"

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '5px'}}>
          <Youtube />
          { this.state.currentSelectedCaption && <Term title={this.state.currentSelectedCaption} definition={this.state.currentSelectedCaption}/> }
        </div>
        <div>
          <CaptionList onClick={ this.onChangeCaption } />
        </div>
      </div>
    )
  }
}

export default IndexPage;
