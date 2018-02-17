import React, { Component } from 'react';
import schoolMap from '../schoolMap.png';

export default class MapSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <p style={styles.mapTitle}>School Map</p>
        <div style={styles.mapImage}>
        </div>
      </div>
    )
  }
}

let styles = {
  mapImage: {
    backgroundImage: "url(" + schoolMap + ")",
    backgroundSize: "cover",
  },
  mapTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#FFFFF0",
  }
}
