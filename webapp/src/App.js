import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoSection from './Components/InfoSection';
import MicrophoneSection from './Components/MicrophoneSection';
import AnnouncementsSection from './Components/AnnouncementsSection';
import FormSection from './Components/FormSection';
import MapSection from './Components/MapSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSafe: true, // only change state upon API call detect danger
    }
  }

  render() {
    let safeText = (this.state.isSafe ? "SAFE" : "UNSAFE");
    return (
      <Container fluid style={styles.overview}>
        <h1>The Sound Guardian</h1>
        <Row>
          <Col lg="4" xs="6">
            <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus={safeText} isSafe={this.state.isSafe}/>
            <MicrophoneSection />
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
