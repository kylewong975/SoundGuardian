import React, { Component } from 'react';
import schoolIcon from '../stanford.png';

export default class InfoSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <img style={styles.schoolImage} src={schoolIcon} alt="schoolIcon" />
        <p style={{...styles.compactSection, ...styles.schoolName}}>{this.props.schoolName}</p>
        <p style={styles.compactSection}><i>{this.props.schoolAddress}</i></p>
        <p style={{...styles.compactSection, ...styles.schoolStatus}}><b>{this.props.schoolStatus}</b></p>
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    margin: 10,
    backgroundColor: '#F0FFF0',
    borderRadius: "5%",
    margin: "auto",
  },
  compactSection: {
    margin: 0,
    textAlign: "center",
  },
  schoolImage: {
    display: "block",
    margin: "auto",
  },
  schoolName: {
    fontSize: 28,
  },
  schoolStatus: {
    color: '#00FF00',
    fontSize: 20
  }
}
