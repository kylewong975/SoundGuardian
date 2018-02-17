import React, { Component } from 'react';

export default class Microphone extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.compactSection}>Name: {this.props.name}</p>
        <p style={styles.compactSection}>Location: {this.props.location}</p>
        <p style={styles.compactSection}>Condition: {this.props.condition}</p>
        <p style={styles.compactSection}>Status: <span style={styles.statusColor}><b>{this.props.status}</b></span></p>
      </div>
    )
  }
}

let styles = {
  compactSection: {
    margin: 0,
  },
  overview: {
    padding: 10,
    margin: 10,
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    borderRadius: "5%",
  },
  statusColor: {
    color: "#00FF00",
  }
}
