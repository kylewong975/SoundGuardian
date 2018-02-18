import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoSection from './Components/InfoSection';
import MicrophoneSection from './Components/MicrophoneSection';
import AnnouncementsSection from './Components/AnnouncementsSection';
import FormSection from './Components/FormSection';
import MapSection from './Components/MapSection';
import base from './rebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSafe: 0, // only change state upon API call detect danger
      // 0 is safe, 1 is danger, 2 is inactive
      microphones: [],
    }

    //setInterval(() => {
      //fetch(...)
    //}, 1000); // fetch API every second
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

  render() {
    let safeText = (this.state.isSafe == 0 ? "SAFE" : this.state.isSafe == 1 ? "UNSAFE" : "INACTIVE");
    return (
      <Container fluid style={styles.overview}>
        <h1>The Sound Guardian</h1>
        <Row>
          <Col lg="4" xs="6">
            <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus={safeText} isSafe={this.state.isSafe}/>
            <MicrophoneSection microphones={this.state.microphones} />
          </Col>
          <Col lg="4" xs="6">
            <FormSection />
            <MapSection />
          </Col>
          <Col lg="4" xs="12">
            <AnnouncementsSection isSafe={this.state.isSafe} />
          </Col>
        </Row>
      </Container>
    );
  }
}

let styles = {
  overview: {
    margin: 25,
  }
}
