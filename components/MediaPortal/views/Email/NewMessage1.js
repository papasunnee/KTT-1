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
  FormGroup
} from 'reactstrap';

export default props => (<Row>
  <Col xs="12" sm="12" md="12">
    <Card className="card-accent-primary">
      <CardHeader>
        Last Message Thread
      </CardHeader>
      <CardBody>
        <Row style={{
            padding: '30px'
          }}>
          <Form action="" method="post" className="form-horizontal" style={{
              width: '100%'
            }}>
            <FormGroup row="row">
              <Col md="1">
                <Label htmlFor="hf-password">From:</Label>
              </Col>
              <Col xs="12" md="5">
                <Input type="text" id="hf-from" name="hf-password" placeholder="YOU  &lt;user@outlet.com&gt;"/>
              </Col>
              <Col md="1">
                <Label htmlFor="hf-email">To:</Label>
              </Col>
              <Col xs="12" md="5">
                <Input type="email" id="hf-email" name="hf-email" placeholder="KTT4President &lt;support@KTT4president.com&gt;"/>
              </Col>
            </FormGroup>
            <FormGroup row="row">
              <Col md="1">
                <Label htmlFor="hf-password">Title:</Label>
              </Col>
              <Col xs="12" md="11">
                <Input type="text" id="hf-from" name="hf-password" placeholder="Enter a Title"/>
              </Col>
            </FormGroup>
            <FormGroup row="row">
              <Col md={{
                  offset: 1
                }}>
                <Input type="textarea" name="textarea-input" id="textarea-input" rows="9" placeholder="Type your message"/>
              </Col>
            </FormGroup>
          </Form>
        </Row>
        <main className="message">
          <div className="details">
            <div className="title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
            <div className="header">
              <img className="avatar" src="img/avatars/7.jpg"/>
                <div className="from"><span>Lukasz Holeczek</span>lukasz@bootstrapmaster.com</div>
                <div className="date">Today,
                  <b>3:47 PM</b>
                </div>
              </div>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
              </div>
              <form method="post" action="">
                <div className="form-group">
                  <textarea id="message" name="body" rows="12" placeholder="Click here to reply" className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">Send message</button>
                </div>
              </form>
            </div>
          </main>
        </CardBody>
      </Card>
    </Col>
  </Row>
  )
