import { Component} from 'react'

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Label,
  Input,
  Form,
  FormText,
  FormGroup,
  Collapse,
  Button
} from 'reactstrap';

export default class NewMessage extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    }
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render(){
    return (
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card className="card-accent-danger">
            <CardHeader>
              <i className="icon-speech"></i><strong>Last Conversation Thread</strong>
              <Label className="switch switch-lg switch-text switch-info float-right mb-0">
                <Input type="checkbox" className="switch-input" onClick={this.toggle}/>
                <span className="switch-label" data-on="On" data-off="Off"></span>
                <span className="switch-handle"></span>
              </Label>
            </CardHeader>
            <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <Row style={{padding: '30px'}}>
                  <div className="h5 title" style={{fontWeight: '700', padding: '1rem 0'}}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                  </div>
                  <div className="header" style={{
                    display: 'flex',
                    padding: '1rem 0',
                    margin: '1rem 0',
                    borderTop: '1px solid #c2cfd6',
                    borderBottom: '1px solid #c2cfd6',
                    width: '100%'
                  }}>
                    <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                      <span>YOU</span> &lt;lukasz@outlet.com&gt;
                    </div>
                    <div className="date" style={{marginLeft: 'auto'}}>
                      Today, <b>3:47 PM</b>
                    </div>
                  </div>
                  <div className="content" style={{padding: '1rem 0', marginBottom: '1rem', borderBottom: '3px solid #f0f3f5'}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="header" style={{
                    display: 'flex',
                    padding: '1rem 0',
                    margin: '1rem 0',
                    borderTop: '1px solid #c2cfd6',
                    borderBottom: '1px solid #c2cfd6',
                    width: '100%'
                  }}>
                    <div className="from" style={{fontSize: '12px', color: '#536c79', alignSelf: 'center'}}>
                      <span>KTT4President</span> &lt;support@KTT4president.com&gt;
                    </div>
                    <div className="date" style={{marginLeft: 'auto'}}>
                      Today, <b>3:50 PM</b>
                    </div>
                  </div>
                  <div className="content" style={{padding: '1rem 0', marginBottom: '1rem', borderBottom: '3px solid #f0f3f5'}}>
                    <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                  <Form action="" method="post" className="form-horizontal" style={{width: '100%'}}>
                    <FormGroup row>
                      <Col>
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                     placeholder="Click here to reply"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col>
                        <Button color="success" /*onClick={this.toggle}*/ style={{marginBottom: '1rem'}}>Send Message</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Row>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      </Row>
    )
  }
}
