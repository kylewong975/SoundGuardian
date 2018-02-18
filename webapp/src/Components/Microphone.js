import React, { Component } from 'react';

export default class Microphone extends React.Component {
  renderColor() {
    if(this.props.status == 0) {
      return {
        color: "#00FF00"
      };
    }
    else if(this.props.status == 1) {
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
        <p style={styles.compactSection}>Name: {this.props.name}</p>
        <p style={styles.compactSection}>Location: {this.props.location}</p>
        <p style={styles.compactSection}>Condition: {this.props.condition}</p>
        <p style={styles.compactSection}>Status: <span style={this.renderColor()}><b>{this.props.status == 0 ? "Safe" : this.props.status == 1 ? "Unsafe" : "Inactive"}</b></span></p>
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
}
