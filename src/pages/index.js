import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import Term from "../components/term"

const IndexPage = () => (
  <div>
    <Youtube />
    <Term title={"RBI"} definition={"THIS IS WHAT AN RBI IS ABOUT"}/>
  </div>
);

export default IndexPage;
