import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumbers: "",
      title: "",
      message: "",
    }

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
      console.log(res);
    })
  }

  render() {
    return (
      <div style={styles.overview}>
        <p style={styles.formTitle}>Emergency Form</p>
        <form onSubmit={this.submitForm}>
          <Container>
              <Row>
                <Col lg="6" xs="6">
                  Phone Numbers:
                </Col>
                <Col lg="6" xs="6">
                  <input type="text" name="phoneNumbers" onChange={this.handlePhoneChange} />
                </Col>
              </Row>
            <br></br>
              <Row>
                <Col lg="6" xs="6">
                  Title:
                </Col>
                <Col lg="6" xs="6">
                  <input type="text" name="title" onChange={this.handleTitleChange} />
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
            <input type="submit" value="Send"/>
          </Container>
        </form>
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
    marginRight: 20,
    marginLeft: 20,
    borderRadius: "5%",
    backgroundColor: "#FFF0F5"
  }
}
