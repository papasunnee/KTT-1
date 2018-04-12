import React from 'react';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap';
import Timer from './Timer'
const ChoiceContent = (props) => {
    // console.log(props.data);
    let isZero=true;
    const { nextEvent, currentTime=''} = props.data
    if (nextEvent) {
      isZero = false;
    }
    return (
      <section className="section-60 pre-section">
        {/* <Container className="offset-top-50" style={{marginBottom : '30px'}}> */}
          {/* <Row> */}
          <div className="shell-wide">
            <div className="range range-xs-center">
              <Col xs={12} md={6}>
                <div className="text-justify">
                  <h2 className="text-bold text-center">{props.title || "Caption Slogan text Here"}</h2>
                  <p>
                    {
                      props.content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla temporibus voluptates ipsa, ducimus est, aliquid vel harum eligendi totam dignissimos suscipit obcaecati. Praesentium obcaecati ad accusamus voluptatum consequuntur, accusantium?"
                    }
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="col-centered">
                <h5 style={{marginTop : '6%', width: '100%', textAlign:'center'}}>
                {!isZero ? `Countdown to ${nextEvent.title}` : `Countdown to next major event`}
              </h5>
              <div style={{ marginTop: '15px', width: '100%'}}>
                <Timer nextEvent={nextEvent} currentTime={currentTime} isZero={isZero}/>
              </div>
            </Col>
            </div>
          </div>
        {/* </Row> */}
        {/* </Container> */}
      </section>
    )
  }

// export default ChoiceContent

export const CountdownQuery = gql`
   query ViewerCandidateQuery{
     currentTime
      nextEvent {
        title
        date
      }
   }
 `

 export default graphql(CountdownQuery, {
   props: ({ data }) => ({
     data
   })
 })(ChoiceContent)
