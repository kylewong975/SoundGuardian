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
      <Container fluid style={styles.overview} id="appColor" >
      <div>
        <h1 style={styles.whiteText}>The Sound Guardian</h1>
        <p id="toggleName">Microphone Data and Announcement Log</p>
        <input id="toggle" data-placement="right" type="checkbox"/>
        <div id="app">
          <div id="main">
            <div id="infoAndFormSection">
              <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305" schoolStatus={safeText} isSafe={this.state.isSafe}/>
              <FormSection />
            </div>
            <MapSection />
          </div>
          <div id="sidebar">
            <MicrophoneSection />
            <AnnouncementsSection isSafe={this.state.isSafe} />
          </div>
        </div>
      </div>
      </Container>
    );
  }
}

let styles = {
  overview: {
    marginLeft: -15,
    width: "102%",
    height: "100vh",
    marginBottom: -200,
  },
  whiteText: {
    paddingTop: 20,
    color: "#ffffff",
  }
}
