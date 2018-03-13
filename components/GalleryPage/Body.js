import {Component} from 'react'
import {Grid, Row, Col } from 'react-bootstrap'

import dynamic from 'next/dynamic'
const Gallery = dynamic(
  import ('./Gallery/index'),
  {ssr: false}
)

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <h3>KT TURAKI, A RELIABLE PARTY MEMBER. HE DID NOT DECAMP WHEN PDP LOST POWER, BUT REMAINED TO REFORM THE PARTY. HE IS A GENUINE POLITICAL MAESTRO</h3><br /><br />
          <Gallery />
        </Row>
      </Grid>
    )
  }
}
