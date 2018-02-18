import React, { Component } from 'react';
import moment from 'moment';
import Announcement from './Announcement';

export default class AnnouncementsSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      paragraphs: [],
    }
    setInterval(() => {
      this.renderItems();
    }, 1000);
  }

  renderItems() {
    let arr = this.state.paragraphs;
    arr.unshift(<Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />)
    //for(let x = 0; x < this.state.paragraphs.length; x++)
      //arr.push(this.state.paragraphs[x]);
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

/*
<Announcement currentTime={moment().format("MM/DD/YYYY HH:mm:ss")} message="Campus is safe" />
*/

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
