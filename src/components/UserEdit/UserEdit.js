import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./UserEdit.css"
export default class Example extends React.Component {
  render() {
    return (
      
        
      <Form>
<h2>Change User Data</h2>

<FormGroup row className="">
        <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={3}>
            <Input type="text" name="userName" id="userName"  />
          </Col>
        </FormGroup>

        <FormGroup row>
        <Label for="exampleEmail" sm={2}>Surname</Label>
          <Col sm={3}>
            <Input type="text" name="userSurname" id="userSurname" />
          </Col>
        </FormGroup>
       

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={3}>
            <Input type="email" name="userEmail" id="userEmail" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Date of Birth</Label>
          <Col sm={3}>
            <Input type="date" name="eserDateOfBirth" id="eserDateOfBirth" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Level</Label>
          <Col sm={3}>
            <Input type="select" name="userLevel" id="userLevel" />
          </Col>
        </FormGroup>
        
        
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Change</Button>
          </Col>
        </FormGroup>
      </Form>
     
    );
  }
}