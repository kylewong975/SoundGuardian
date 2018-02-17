import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoSection from './Components/InfoSection';
import MicrophoneSection from './Components/MicrophoneSection';
import AnnouncementsSection from './Components/AnnouncementsSection';
import FormSection from './Components/FormSection';
import MapSection from './Components/MapSection';

export default class App extends Component {
  render() {
    return (
      <Container fluid style={styles.overview}>
        <Row>
          <Col>
            <h1>The Sound Guardian</h1>
            <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus="SAFE"/>
            <MicrophoneSection />
            <AnnouncementsSection />
          </Col>
          <Col>
            <FormSection />
            <MapSection />
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
