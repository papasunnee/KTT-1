import { Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Row, Col} from 'react-bootstrap'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import dynamic from 'next/dynamic'

const ReactCountdownClock = dynamic(
  import ('react-countdown-clock'),
  { ssr: false }
)

const CountdownClock = (props) => {
  return(
    <ReactCountdownClock seconds={6000}
                     color="#ffffff"
                     alpha={0.9}
                     size={150}
                      weight={15}
                      style={{paddingLeft: '50px'}}
                    />
  )
}

class EventsSection extends Component {
  render(){
    const {eventMany} = this.props.data
    console.log(new Date(eventMany[0].date));
    return (
      <section className="section-fullwidth-events">
        <div >
            <Row style={{backgroundColor: '#DC3545', textAlign: 'left'}}>
              <Col md={3} style={{paddingTop: "20px", paddingLeft: "50px", textAlign: 'center'}}>
                <h2 className="text-bold" style={{fontSize: '50px', color: 'white', marginBottom: '30px'}}>Upcoming Events</h2>
                {/*<CountdownClock startTime={190000}/>*/}
              </Col>
              <Col md={9}>
                <div style={{backgroundColor: '#f1eded'}} className="inset-lg-left-20 inset-xl-left-110 fill-height">
                  <Timeline>
                    {eventMany.map((event, index)=>(
                      <TimelineEvent
                        key = {index}
                        title={event.title}
                        titleStyle={event.isActive ? {fontWeight: "bold", fontSize: '40px', color: '#DC3545'} : {fontWeight: "bold", fontSize: '20px'}}
                        createdAt={new Date(event.date).toString()}
                        icon={<i />}
                        iconColor={event.isActive? "#DC3545" : "#6fba1c"}
                      >
                      {event.description || 'Nulla vitae elit libero, a pharetra augue mollis interdum'}
                      </TimelineEvent>
                    ))}
                  </Timeline>
                </div>
              </Col>
            </Row>
        </div>
      </section>
    )
  }
}

const gqlWrapper = gql `
query rootQuery{
  eventMany (sort: DATE_ASC) {
    title
    date
    description
    isActive
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(EventsSection)
