import {Component} from 'react'
import ParagraphText from './ParagraphText'
//import FullImage from './FullImage/FullImage'
import {Grid, Row, Col } from 'react-bootstrap'
import ArticlesList from '../common/ArticlesList/ArticlesList'

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <div>
              <ParagraphText />
              <ParagraphText />
              {/*<TopText />*/}
              {/*<Grid>
                <Row>
                <FullImage />
                </Row>
              </Grid>*/}      
              {/*<BottomText />*/}
              <ParagraphText />
              <ParagraphText />
            </div>
          </Col>
          <Col md={4}>
            <ArticlesList title={'More Articles'}/>
          </Col>
        </Row>
      </Grid>      
    )
  }
}
