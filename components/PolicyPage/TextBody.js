import {Component} from 'react'
import ParagraphText from './ParagraphText'
import FullImage from './FullImage/FullImage'
import {Grid, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
  render(){
    return (
      <div>
        <ParagraphText />
        <ParagraphText />
        {/*<TopText />*/}
        <FullImage />
        {/*<BottomText />*/}
        <ParagraphText />
        <ParagraphText />
      </div>
    )
  }
}
