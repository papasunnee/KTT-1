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
              Messages
            </CardHeader>
            <CardBody>
              <Row style={{padding: '30px'}}>
                <ListGroup style={{width: '100%'}}>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="header" style={{
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                          <span class="icon-action-redo"></span><span> KTT4President</span> &lt;support@KTT4president.com&gt;
                        </div>
                        <div className="date" style={{marginLeft: 'auto'}}>
                          Today, <b>5:03 PM</b>
                        </div>
                      </div>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div className="h5 title" style={{fontWeight: '700'}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                      </div>
                      <div className="content" style={{padding: '1rem 0'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="header" style={{
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                          <span class="icon-action-undo"></span><span> You</span> &lt;lukasz@outlet.com&gt;
                        </div>
                        <div className="date" style={{marginLeft: 'auto'}}>
                          Today, <b>3:47 PM</b>
                        </div>
                      </div>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div className="h5 title" style={{fontWeight: '400'}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                      </div>
                      <div className="content" style={{padding: '1rem 0'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="header" style={{
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                          <span class="icon-action-redo"></span><span> KTT4President</span> &lt;support@KTT4president.com&gt;
                        </div>
                        <div className="date" style={{marginLeft: 'auto'}}>
                          Yesterday, <b>5:03 PM</b>
                        </div>
                      </div>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div className="h5 title" style={{fontWeight: '400'}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                      </div>
                      <div className="content" style={{padding: '1rem 0'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="header" style={{
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                          <span class="icon-action-undo"></span><span> You</span> &lt;lukasz@outlet.com&gt;
                        </div>
                        <div className="date" style={{marginLeft: 'auto'}}>
                          Today, <b>3:47 PM</b>
                        </div>
                      </div>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div className="h5 title" style={{fontWeight: '400'}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                      </div>
                      <div className="content" style={{padding: '1rem 0'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>
                      <div className="header" style={{
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                          <span class="icon-action-undo"></span><span> You</span> &lt;lukasz@outlet.com&gt;
                        </div>
                        <div className="date" style={{marginLeft: 'auto'}}>
                          Today, <b>3:47 PM</b>
                        </div>
                      </div>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      <div className="h5 title" style={{fontWeight: '700'}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                      </div>
                      <div className="content" style={{padding: '1rem 0'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
