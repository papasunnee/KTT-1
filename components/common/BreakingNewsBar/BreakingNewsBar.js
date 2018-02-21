import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Row, Col} from 'react-bootstrap'
//import Marquee from 'react-text-marquee'

const BreakingNewsBar = (props) => {
  const newsMany = props.data.newsMany || [];

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
          BREAKING NEWS
        </Col>
        <Col md={10} id="news-bar"
          style={{
            borderBottom: '2px solid #09123A',
            borderTop: '1px solid #09123A',
            backgroundColor: '#eeeef3',
            paddingLeft: '0px',
            paddingRight: '0px',
            color : '#DC3545'
          }}>
          <marquee direction="left" scrollamount="6" behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()">
            {newsMany.map((news, index)=>(
              <span key={index}>
                <a href="/article" className="hvr-pop" style={{color:'red'}}>{news.title}</a><a style={{color:'red'}}> **** </a>
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
