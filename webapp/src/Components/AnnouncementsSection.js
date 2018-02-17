import React, { Component } from 'react';

export default class AnnouncementsSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.announcementTitle}>Announcements</p>
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    backgroundColor: "#FFFAFA",
    overflowY: "scroll",
    height: 650,
    borderRadius: "5%"
  },
  announcementTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
  }
}
