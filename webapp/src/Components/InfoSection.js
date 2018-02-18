import React, { Component } from 'react';
import schoolIcon from '../stanford.png';

export default class InfoSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: -1,
      schoolStatus: "",
    };
    setInterval(() => {
      for(let x = 0; x < this.props.microphones.length; x++) {
        if(this.props.microphones[x].status == 1) {
          this.setState({
            status: 1,
            schoolStatus: "UNSAFE",
          });
          break;
        }
        else if(this.props.microphones[x].status == 0) {
          this.setState({
            status: 0,
            schoolStatus: "SAFE",
          });
        }
      }
      let is2 = true;
      for(let x = 0; x < this.props.microphones.length; x++) {
        if(this.props.microphones[x].status != 2) {
          is2 = false;
          break;
        }
      }
      if(is2) { // inactive
        this.setState({
          status: 2,
          schoolStatus: "INACTIVE",
        });
      }
    }, 1000)
  }

  renderColor() {
    if(this.state.status == 0) {
      return {
        color: "#00FF00"
      };
    }
    else if(this.state.status == 1) {
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
        <p style={{...styles.compactSection, ...styles.schoolStatus, ...this.renderColor()}}><b>{this.state.schoolStatus}</b></p>
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
    fontSize: 20
  }
}
