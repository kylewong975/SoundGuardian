import React, { Component } from 'react';
import Microphone from './Microphone';

export default class MicrophoneSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.microphoneTitle}>Mic Information</p>
        <Microphone name="Microphone 1" location="Hallway 1" condition="Active" status="SAFE" />
        <Microphone name="Microphone 2" location="Corridor" condition="Active" status="SAFE" />
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    marginTop: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    marginLeft: "1em",
    backgroundColor: '#FAF2A1',
    borderRadius: "5%",
    overflowY: "scroll",
    height: 350,
  },
  microphoneTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
  }
}
