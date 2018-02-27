import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, Label, Input} from 'reactstrap';

export default props => (
  <Row>    
    <Col xs="12" sm="6" md="4">
      <Card className="card-accent-danger">
        <CardHeader>
          Card with accent
        </CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CardBody>
      </Card>
    </Col>
  </Row>
)
