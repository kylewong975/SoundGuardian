import React, { Component } from 'react';
import schoolMap from '../schoolLayout.png';

export default class MapSection extends React.Component {
  render() {
    return (
      <div id="mapSection" style={styles.overview}>
        <p style={styles.mapTitle}>School Map</p>
        <div style={styles.mapImage}>
          <div class="circle" id="mic1">
            <p class="text unSafeText">
              Microphone 1<br></br>
              Location: Biology Laboratory (Room 160)<br></br>
              Status: UNSAFE
            </p>
          </div>
          <div class="circle" id="mic2">
            <p class="text safeText">
              Microphone 2<br></br>
              Location: Chemistry Laboratory (Room 161)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic3">
            <p class="text safeText">
              Microphone 3<br></br>
              Location: Multi-Media Room One (Room 167)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic4">
            <p class="text safeText">
              Microphone 4<br></br>
              Location: Multi-Media Room Two (Room 168)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic5">
            <p class="text safeText">
              Microphone 5<br></br>
              Location: Art Room (Room 169)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic6">
            <p class="text safeText">
              Microphone 6<br></br>
              Location: Music Room (Room 170)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic7">
            <p class="text unSafeText">
              Microphone 7<br></br>
              Location: General Office (Room 159)<br></br>
              Status: UNSAFE
            </p>
          </div>
          <div class="circle" id="mic8">
            <p class="text safeText">
              Microphone 8<br></br>
              Location: Reading Room (Room 158)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic9">
            <p class="text safeText">
              Microphone 9<br></br>
              Location: Courtyard<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic10">
            <p class="text safeText">
              Microphone 10<br></br>
              Location: Computer Laboratory (Room 157)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic11">
            <p class="text safeText">
              Microphone 11<br></br>
              Location: Computer Science Class (Room 156)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic12">
            <p class="text safeText">
              Microphone 12<br></br>
              Location: Physics Class (Room 155)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic13">
            <p class="text safeText">
              Microphone 13<br></br>
              Location: Math Class (Room 154)<br></br>
              Status: SAFE
            </p>
          </div>
          <div class="circle" id="mic14">
            <p class="text safeText">
              Microphone 14<br></br>
              Location: English (Room 153)<br></br>
              Status: SAFE
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
    color: "#FFFFFF",
  },
  overview: {
    padding: 20,
    marginTop: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    backgroundColor: "#4F6D7A",
    borderRadius: "5%",
    height: 623,
    /*display: "flex",*/
  }
}
