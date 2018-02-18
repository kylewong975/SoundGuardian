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
      status: -1,
    }
    setInterval(() => {
      this.renderItems();
    }, 5000);

    setInterval(() => {
      for(let x = 0; x < this.props.microphones.length; x++) {
        if(this.props.microphones[x].status == 1) {
          this.setState({
            status: 1,
          });
          break;
        }
        else if(this.props.microphones[x].status == 0) {
          this.setState({
            status: 0,
          });
        }
      }
      let is2 = true;
      for(let x = 0; x < this.props.microphones.length; x++) {
        if(this.props.microphones[x].status != 2) {
          is2 = false;
          break;
        }
      }
      if(is2) { // inactive
        this.setState({
          status: 2,
        });
      }
    }, 1000)
  }

  renderItems() {
    this.setState({
      message: (this.state.status == 0 ? "Campus is safe" : this.state.status == 1 ? "Campus is UNSAFE" : "Microphones currently inactive")
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
    marginTop: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    marginLeft: "1em",
    backgroundColor: "#FAF2A1",
    borderRadius: "5%"
  },
  announcementContent: {
    overflowY: "scroll",
    height: 170,
  },
  announcementTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
  }
}
