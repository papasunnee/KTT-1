import {Component} from 'react'
import ModalVideo from 'react-modal-video'
import {Grid, Row, Col } from 'react-bootstrap'
import ArticlesList from '../common/ArticlesList/ArticlesList'
import VideoList from './VideoList'

export default class Body extends Component {

  render(){

    return (
      <Grid>
        <Row>
          <Col md={8}>
            <VideoList />
          </Col>
          <Col md={4}>
            <ArticlesList title={'Articles'} articles={this.props.articles}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
