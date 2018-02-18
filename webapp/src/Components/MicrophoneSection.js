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
          {this.props.microphones.map(this.renderMicrophone)}
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    margin: 10,
    backgroundColor: '#F0FFFF',
    borderRadius: "5%",
    overflowY: "scroll",
    height: 350,
  },
}

export default MicrophoneSection;
