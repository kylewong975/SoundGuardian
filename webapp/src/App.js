import React, { Component } from 'react';
import InfoSection from './Components/InfoSection';

export default class App extends Component {
  render() {
    return (
      <div style={styles.overview}>
        <h1>The Sound Guardian</h1>
        <InfoSection schoolName="Stanford University" schoolAddress="450 Serra Mall, Stanford, CA 94305"/>
      </div>
    );
  }
}

let styles = {
  overview: {
    margin: 25,
  }
}
