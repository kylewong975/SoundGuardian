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
      isSafe: 0, // only change state upon API call detect danger
      // 0 is safe, 1 is danger, 2 is inactive
    }

    setInterval(() => {
      //fetch(...)
    }, 1000); // fetch API every second
  }

  render() {
    let safeText = (this.state.isSafe == 0 ? "SAFE" : this.state.isSafe == 1 ? "UNSAFE" : "INACTIVE");
    return (
      <Container fluid style={styles.overview}>
        <h1>The Sound Guardian</h1>
        <input id="toggle" type="checkbox" />
        <div id="app">
          <div id="main">
            <div id="infoAndFormSection">
              <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus={safeText} isSafe={this.state.isSafe}/>
              <FormSection />
            </div>
            <MapSection />
            {/*<Row>
            /*First 2 col divs, lg="4" xs="6"
            Last col div, lg="4" xs="12"
              <Col xs="4">
                <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus={safeText} isSafe={this.state.isSafe}/>
                <FormSection />
              </Col>
              <Col xs="4">
                <MapSection />
              </Col>
            </Row>
            */}
          </div>
          <div id="sidebar">
            <MicrophoneSection />
            <AnnouncementsSection isSafe={this.state.isSafe} />
          </div>
        </div>
      </Container>
    );
  }
}

let styles = {
  overview: {
    margin: 25,
  }
}
