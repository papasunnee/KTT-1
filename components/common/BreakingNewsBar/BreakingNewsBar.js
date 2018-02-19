import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Row, Col} from 'react-bootstrap'
//import Marquee from 'react-text-marquee'

const BreakingNewsBar = (props) => {
  const {newsMany} = props.data;

  return (
    <Grid style={{
      width: '100%',
      maxWidth: '100%',
      margin: '0',
    }}>
      <Row>
        <Col md={2}
          style={{
            backgroundColor: '#DC3545',
            paddingTop: '8px',
            fontSize: '17px',
            color: 'white',
          }}>
          RECENT TRENDS
        </Col>
        <Col md={10} id="news-bar"
          style={{
            borderBottom: '2px solid #12806B',
            borderTop: '1px solid #12806B',
            backgroundColor: '#eeeef3',
            paddingLeft: '0px',
            paddingRight: '0px'
          }}>
          <marquee direction="left" scrollamount="6" behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()">
            {newsMany.map((news)=>(
              <span>
                <a href="/article" className="hvr-pop">{news.title}</a><a> **** </a>
              </span>
            ))}
            </marquee>
        </Col>
      </Row>
    </Grid>
  )
}
//export default BreakingNewsBar

const gqlWrapper = gql `
query rootQuery{
  newsMany(limit: 10, filter: {isBreaking: true}, sort:CREATEDAT_DESC) {
    title
    state
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(BreakingNewsBar)
