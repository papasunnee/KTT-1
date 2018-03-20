import { Component} from 'react'

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormText,
  FormGroup,
  Collapse,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading
} from 'reactstrap';

export default class NewMessage extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return (
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card className="card-accent-primary">
            <CardHeader>
              Outlets
            </CardHeader>
            <CardBody>
              <Row style={{padding: '30px'}}>
                <ListGroup style={{width: '100%'}}>
                  <ListGroupItem tag="button" action>Cras justo odio</ListGroupItem>
                  <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem active tag="button" action>Morbi leo risus</ListGroupItem>
                  <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
