import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import CaptionList from "../components/captionList"
import Term from "../components/term"

import 'semantic-ui-css/semantic.min.css'

const IndexPage = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ marginRight: '5px'}}>
      <Youtube />
      <Term title={"RBI"} definition={"THIS IS WHAT AN RBI IS ABOUT"}/>
    </div>
    <div style={{ }}>
      <CaptionList />
    </div>
  </div>
);

export default IndexPage;
