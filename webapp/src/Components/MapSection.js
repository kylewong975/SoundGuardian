import React, { Component } from 'react';
import schoolMap from '../schoolLayout.png';

export default class MapSection extends React.Component {
  renderMapDots(elem, ind) {
    let status = (elem.status == 0 ? "SAFE" : elem.status == 1 ? "UNSAFE" : "INACTIVE");
    return (
      <div class="circle" id={`mic${ind+1}`} style={{backgroundColor: (elem.status == 0 ? "#00cc00" : elem.status == 1 ? "#ff0000" : "#999900")}}>
        <p class="text" style={{backgroundColor: (elem.status == 0 ? "#84e184" : elem.status == 1 ? "#f78f8f" : "#999900")}}>
          <b>{elem.name}</b><br></br>
          <b>Location:</b> {elem.location}<br></br>
          <b>Status:</b> {status}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div id="mapSection" style={styles.overview}>
        <p style={styles.mapTitle}>School Map</p>
        <div style={styles.mapImage}>
          {this.props.microphones.map(this.renderMapDots)}
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
    color: "#FFFFFF",
  },
  overview: {
    padding: 20,
    marginTop: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    marginLeft: "1em",
    backgroundColor: "#4F6D7A",
    borderRadius: "5%",
    height: 623,
  }
}
