import React, { Component } from 'react';
import Microphone from './Microphone';
import base from '../rebase';

class MicrophoneSection extends React.Component {

  renderMicrophone(mic) {
    return (<Microphone name={mic.name}
                        location={mic.location}
                        condition={mic.condition}
                        status={mic.status} />);
  }

  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.microphoneTitle}>Mic Information</p>
        {this.props.microphones.map(this.renderMicrophone)}
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

export default MicrophoneSection;
