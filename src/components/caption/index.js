import React from "react"

import { Card } from 'semantic-ui-react'

const Caption = ({ text, onClick }) => (
  <Card 
    style={{ margin: '10px', 'width': '95%' }}
    header={ text }
    onClick={ () => onClick(text) }
  />
);

export default Caption;
