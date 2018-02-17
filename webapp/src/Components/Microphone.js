import React, { Component } from 'react';

export default class Microphone extends React.Component {
  render() {
    return(
      <div style={styles.backgroundColor}>
        <p style={styles.compactSection}>Name: {this.props.name}</p>
        <p style={styles.compactSection}>Location: {this.props.location}</p>
        <p style={styles.compactSection}>Condition: {this.props.condition}</p>
        <p style={styles.compactSection}>Status: {this.props.status}</p>
      </div>
    )
  }
}

let styles = {
  compactSection: {
    margin: 0,
  },
  overview: {
    backgroundColor: '#000000',
  },
}
