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
          <Gallery />
        </Row>
      </Grid>
    )
  }
}
