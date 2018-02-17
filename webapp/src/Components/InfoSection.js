import React, { Component } from 'react';

export default class InfoSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.compactSection}>School: {this.props.schoolName}</p>
        <p style={styles.compactSection}>Address: {this.props.schoolAddress}</p>
      </div>
    )
  }
}

let styles = {
  overview: {
    margin: 20,
    border: "1px solid black",
  },
  compactSection: {
    margin: 0,
  }
}
