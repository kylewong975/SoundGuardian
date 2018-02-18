import React, { Component } from 'react';
import moment from 'moment';
import Announcement from './Announcement';

export default class AnnouncementsSection extends React.Component {
  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.announcementTitle}>Announcements</p>
        <div style={styles.announcementContent}>
          <Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
          <Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
          <Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
          <Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
          <Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
        </div>
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    marginRight: 20,
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
