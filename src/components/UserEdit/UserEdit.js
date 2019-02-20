import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./UserEdit.css"


class UserEdit extends React.Component {
  render() {
    const { user } = this.props
    return (
      <Form className="wholeBlock">
        <h2>Change User Data</h2>
        <FormGroup row className="">
          <Label for="name" sm={2}>Name</Label>
          <Col sm={3}>
            <Input type="text" name="name" id="name" value={this.props.user.name} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="sname" sm={2}>Surname</Label>
          <Col sm={3}>
            <Input type="text" name="surname" id="surname" value={this.props.user.surname} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="mail" sm={2}>Email</Label>
          <Col sm={3}>
            <Input type="email" name="email" id="email" value={this.props.user.email} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="date" sm={2}>Date of Birth</Label>
          <Col sm={3}>
            <Input type="date" name="dateOfBirth" id="dateOfBirth" value={this.props.user.dateOfBirth} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="select" sm={2}>Level</Label>
          <Col sm={3}>
            <Input type="select" name="level" id="level" value={this.props.user.level} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Change</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  };
};

export default UserEdit