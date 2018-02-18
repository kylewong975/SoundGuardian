import React, { Component } from 'react';
import moment from 'moment';
import Announcement from './Announcement';

export default class AnnouncementsSection extends React.Component {

  constructor(props) {
    super(props);

    // messages depends on the safe or unsafe, passed by props
    this.state = {
      paragraphs: [],
      message: "",
    }
    setInterval(() => {
      this.renderItems();
    }, 1000);
  }

  renderItems() {
    this.setState({
      message: (this.props.isSafe == 0 ? "Campus is safe" : this.props.isSafe == 1 ? "Campus is UNSAFE" : "Microphones currently inactive")
    })
    let arr = this.state.paragraphs;
    arr.unshift(<Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message={this.state.message} />)
    this.setState({
      paragraphs: arr
    });
  }

  render() {
    return(
      <div style={styles.overview}>
        <p style={styles.announcementTitle}>Announcements</p>
        <div style={styles.announcementContent}>
          {this.state.paragraphs}
        </div>
      </div>
    )
  }
}

let styles = {
  overview: {
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "#FAF2A1",
    borderRadius: "5%"
  },
  announcementContent: {
    overflowY: "scroll",
    height: 250,
  },
  announcementTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
  }
}
