import React, { Component } from 'react';
import InfoSection from './Components/InfoSection';
import MicrophoneSection from './Components/MicrophoneSection';
import AnnouncementsSection from './Components/AnnouncementsSection';
import FormSection from './Components/FormSection';
import MapSection from './Components/MapSection';

export default class App extends Component {
  render() {
    return (
      <div style={styles.overview}>
        <h1>The Sound Guardian</h1>
        <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305"/>
        <MicrophoneSection />
        <AnnouncementsSection />
        <FormSection />
        <MapSection />
      </div>
    );
  }
}

let styles = {
  overview: {
    margin: 25,
  }
}
