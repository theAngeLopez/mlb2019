import React from "react"

import { Card } from 'semantic-ui-react'

const Caption = ({ text, onClick }) => (
  <Card
    header={ text }
    onClick={ () => onClick(text) }
  />
);

export default Caption;
