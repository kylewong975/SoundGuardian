import React, { Component } from 'react';

export default class AnnouncementsSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.announcementTitle}>Announcements</p>
        <div style={styles.announcementContent}>
        </div>
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    backgroundColor: "#FFFAFA",
    borderRadius: "5%"
  },
  announcementContent: {
    overflowY: "scroll",
    height: 650,
  },
  announcementTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
  }
}
