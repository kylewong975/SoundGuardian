import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class FormSection extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    e.preventDefault();
    let query = "?recipient=15599772114&body=hello";
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
        <form>
          <label>
            <Container>
              <Row>
                <Col>
                  Phone Numbers:
                </Col>
                <Col>
                  <input type="text" name="phoneNumbers" />
                </Col>
              </Row>
            </Container>
          </label>
          <label>
            Title: <input type="text" name="title" />
          </label>
          <label>
            Message: <textarea></textarea>
          </label>
          <input type="Submit" value="Send" onClick={this.submitForm}/>
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
