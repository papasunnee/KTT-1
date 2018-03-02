import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Timer from './Timer'
const ChoiceContent = (props) => {
    return (
        <Container className="offset-top-50" style={{marginBottom : '30px'}}>
            <Row>
                <Col xs={6}>
                <div className="text-justify">
                <h2 className="text-bold">{props.title || "Caption Slogan text Here"}</h2>
                <p>
                    {
                    props.content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?"
                    }
                </p>
                </div>
                </Col>
                <Col xs={6} className="col-centered">
                    <p style={{marginTop : '9%', marginLeft : '100px'}}>
                        Countdown to PDP Presidental Primaries 
                        <Timer />
                    </p>
                </Col>
            </Row>
        </Container>
    )
  }
  export default ChoiceContent
  