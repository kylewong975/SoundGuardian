import React, { Component } from 'react';
import moment from 'moment';

export default class Announcement extends React.Component {
  render() {
    return(
      <p style={styles.compactSection}>[<b><i>{this.props.currentTime}</i></b>]: {this.props.message}</p>
    )
  }
}

let styles = {
  compactSection: {
    margin: 0,
  }
}
