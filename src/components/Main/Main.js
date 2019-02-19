import React, { Component } from "react";
import   "./Main.css"
// import Registration from "../Registration/Registration"
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

 class Main extends Component {
   render() {
     return(
        <div className="divMain">
       <Container>
           
        
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

            </div>

           
            </Container>
            </div>
     );
   }
 }

export default Main;