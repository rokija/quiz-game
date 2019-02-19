import React, { Component } from "react";
import   "./Main.css";
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

 class Main extends Component {
   render() {
     return(
        <div className="Main">
       <Container>
          <div className="blockBackground">
            <Card body className="paddingBottom">
            <Row > 
            <Col xs="auto" className="positioning">
              <CardTitle>Title here</CardTitle>
              <CardText>Text here</CardText>
              <Button>Go somewhere</Button>
              </Col>
              </Row>
            </Card>
            <Card body className="paddingBottom">
            <Row>
            <Col xs="auto" className="positioning">
              <CardTitle>Title here</CardTitle>
              <CardText>Text here</CardText>
              <Button>Go somewhere</Button>
              </Col>
              </Row>     
            </Card>
            </div>
            </Container>
            </div>
     );
   }
 }

export default Main;