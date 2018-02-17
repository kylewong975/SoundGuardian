import React, { Component } from 'react';
import Microphone from './Microphone';

export default class MicrophoneSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <Microphone name="Microphone 1" location="Hallway 1" condition="Active" status="Safe" />
      </div>
    )
  }
}

let styles = {
  overview: {
    margin: 20,
    border: "1px solid blac",
  },
}
