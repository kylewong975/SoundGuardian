import React, { Component } from 'react';

export default class MapSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <p style={styles.mapTitle}>Map here</p>
      </div>
    )
  }
}

let styles = {
  mapTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#FFFFF0",
  }
}
