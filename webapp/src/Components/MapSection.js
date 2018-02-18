import React, { Component } from 'react';
import schoolMap from '../schoolLayout.png';

export default class MapSection extends React.Component {
  render() {
    return (
      <div id="mapSection" style={styles.overview}>
        <p style={styles.mapTitle}>School Map</p>
        <div style={styles.mapImage}>
          <img src="schoolLayout.png" />
          <div class="circle" id="mic1">
            <p class="text">
              Microphone 1<br></br>
              Location: Biology Laboratory (Room 160)<br></br>
              Status: UNSAFE
            </p>
          </div>
          <div class="circle" id="mic2">
            <p class="text">
              Microphone 2<br></br>
              Location: Chemistry Laboratory (Room 161)<br></br>
              Status: UNSAFE
            </p>
          </div>
        </div>
      </div>
    )
  }
}

let styles = {
  mapImage: {
    backgroundImage: "url(" + schoolMap + ")",
    backgroundSize: "cover",
    height: 450,
    width: 750,
    /*"align-items": "center",*/
  },
  mapTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    padding: 20,
    marginTop: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    backgroundColor: "#FFFFF0",
    borderRadius: "5%",
    /*display: "flex",*/
  }
}
