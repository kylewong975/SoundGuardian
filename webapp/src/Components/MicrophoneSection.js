import React, { Component } from 'react';
import Microphone from './Microphone';
import base from '../rebase';

class MicrophoneSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      microphones: [],
      };
  }
  componentWillMount() {
    /*
     * We bind the 'chats' firebase endopint to our 'messages' state.
     * Anytime the firebase updates, it will call 'setState' on this component
     * with the new state.
     *
     * Any time we call 'setState' on our 'messages' state, it will
     * updated the Firebase '/chats' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */
    this.ref = base.syncState('microphones', {
      context: this,
      state: 'microphones',
      asArray: true
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderMicrophone(mic) {
    return (<Microphone name={mic.name}
                        location={mic.location}
                        condition={mic.condition}
                        status={mic.status} />);
  }

  render() {
    return(
      <div style={styles.overview}>
          {this.state.microphones.map(this.renderMicrophone)}
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
