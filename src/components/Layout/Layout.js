import React, { Component } from "react";
import   "./Layout.css"
// import Registration from "../Registration/Registration"
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

 class Layout extends Component {
   render() {
     return(
       
       <Container>
        <Row className="headerContent">
          <Col>Header content goes there</Col>
        </Row>
       
      
      
          <div className="blockBackground">
            <Card body className="paddingBottom">
            <Row > 
            <Col xs="auto" className="positioning">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
              </Col>
              </Row>
            </Card>
            <Card body className="paddingBottom">
            <Row>
            <Col xs="auto" className="positioning">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
              </Col>
              </Row>
              
            </Card>

            <Card body className="paddingBottom">
            <Row>
            <Col xs="auto" className="positioning">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
              </Col>
              </Row>
              
            </Card>
            </div>

            <Row className="footerContent">
          <Col>Footer content goes here</Col>
        </Row>
            </Container>

     );
   }
 }

export default Layout;