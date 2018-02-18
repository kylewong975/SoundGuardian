import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumbers: "",
      title: "",
      message: "",
      successText: "",
      failureText: "",
    }

    setInterval(() => {
      this.setState(previousState => {
        return {
          successText: "",
          failureText: ""
        };
      });
    }, 5000);

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handlePhoneChange(e) {
    this.setState({
      phoneNumbers: e.target.value
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    let query = `?recipient=1${this.state.phoneNumbers}&body=${this.state.title + ": " + this.state.message}`;
    let url = `https://messagebird.lib.id/sms/${query}`;
    fetch(url, {
      method: 'get',
      headers: {
        authorization: 'Bearer 90UZ2x1jcmmBVRnI4qgNsQd0tHW0YqeEMvDUccpqjm_PQtnYDi2v81p8bvh4M8vu'
      }
    }).then((res) => {
      // reset form as well
      this.setState({
        phoneNumbers: "",
        title: "",
        message: "",
      });

      // success
      if(res.status == 200) {
        this.setState({
          successText: "Text successfully sent!",
          failureText: ""
        });
      }
      else {
        this.setState({
          successText: "",
          failureText: "Failed to send text"
        });
      }

      console.log(res);
    })
  }

  resetForm(e) {
    e.preventDefault();
    this.setState({
      phoneNumbers: "",
      title: "",
      message: "",
    })
  }

  render() {
    return (
      <div style={styles.overview}>
        <p style={styles.formTitle}>Emergency Form</p>
        <form>
          <Container>
              <Row>
                <Col lg="6" xs="6">
                  Phone Numbers:
                </Col>
                <Col lg="6" xs="6">
                  <input type="text" name="phoneNumbers" value={this.state.phoneNumbers} onChange={this.handlePhoneChange} />
                </Col>
              </Row>
            <br></br>
              <Row>
                <Col lg="6" xs="6">
                  Title:
                </Col>
                <Col lg="6" xs="6">
                  <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                </Col>
              </Row>
            <br></br>
              <Row>
                <Col lg="6" xs="6">
                  Message:
                </Col>
                <Col lg="6" xs="6">
                  <textarea rows="5" type="text" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                </Col>
              </Row>
            <br/>
            <div style={styles.buttonArea}>
              <input type="submit" value="Send" style={styles.formButton} onClick={this.submitForm}/>
              <input type="reset" value="Reset" style={styles.formButton} onClick={this.resetForm}/>
            </div>
            <p style={styles.successText}><b>{this.state.successText}</b></p>
            <p style={styles.failureText}><b>{this.state.failureText}</b></p>
          </Container>
        </form>
      </div>
    )
  }
}

let styles = {
  buttonArea: {
    textAlign: "center"
  },
  formTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  formButton: {
    width: "40%",
    margin: 5,
  },
  successText: {
    color: "#00FF00",
    textAlign: "center"
  },
  failureText: {
    color: "#FF0000",
    textAlign: "center"
  },
  overview: {
    padding: 20,
    marginTop: 10,
    borderRadius: "5%",
    backgroundColor: "#FFF0F5"
  }
}
