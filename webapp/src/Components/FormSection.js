import React, { Component } from 'react';

export default class FormSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <p style={styles.formTitle}>Emergency Form</p>
      </div>
    )
  }
}

let styles = {
  formTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  overview: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#FFF0F5"
  }
}
