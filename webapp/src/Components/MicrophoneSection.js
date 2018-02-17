import React, { Component } from 'react';
import Microphone from './Microphone';

export default class MicrophoneSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <Microphone name="Microphone 1" location="Hallway 1" condition="Active" status="SAFE" />
        <Microphone name="Microphone 2" location="Corridor" condition="Active" status="SAFE" />
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    margin: 10,
    backgroundColor: '#F0FFFF',
    borderRadius: "20%",
  },
}
