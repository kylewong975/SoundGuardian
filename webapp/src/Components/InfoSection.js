import React, { Component } from 'react';
import schoolIcon from '../stanford.png';

export default class InfoSection extends React.Component {
  renderColor() {
    if(this.props.isSafe == 0) {
      return {
        color: "#00FF00"
      };
    }
    else if(this.props.isSafe == 1) {
      return {
        color: "#FF0000"
      };
    }
    else {
      return {
        color: "#999900"
      };
    }
  }

  render() {
    return(
      <div style={styles.overview}>
        <img style={styles.schoolImage} src={schoolIcon} alt="schoolIcon" />
        <p style={{...styles.compactSection, ...styles.schoolName}}>{this.props.schoolName}</p>
        <p style={styles.compactSection}><i>{this.props.schoolAddress}</i></p>
        <p style={{...styles.compactSection, ...styles.schoolStatus, ...this.renderColor()}}><b>{this.props.schoolStatus}</b></p>
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
    height: 50,
    width: 50,
  },
  schoolName: {
    fontSize: 28,
  },
  schoolStatus: {
    fontSize: 20
  }
}
