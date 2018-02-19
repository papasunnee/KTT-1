import {Component} from 'react'
//import ParagraphText from './ParagraphText'
//import FullImage from './FullImage/FullImage'
import {Grid, Row, Col } from 'react-bootstrap'


const VideoItem = props => {
  return (
    <div
      style={{
        color:'white',
        minHeight:'270px',
        width: '100%',
        textAlign: 'left',
        backgroundImage: 'url("/static/images/news-image.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'auto',
        marginBottom: '20px',
        marginTop: '20px'
      }}>
      <div style={{
        position: 'relative',
        /*marginLeft: '15px',
        marginRight: '15px',*/
        background: 'linear-gradient(rgba(255,0,0,0), rgba(0, 0, 0, 0.9))',
        fontFamily: "'Montserrat', sans-serif",
        minHeight: 'inherit',
        maxHeight: 'inherit',
        zIndex: '2'
      }}>
        <div style={{
          padding: '20px 12px 10px',
          position: 'absolute',
          bottom: '0'
        }}>
          <p style={{
              fontWeight: '700',
              fontSize: '30px',
              lineHeight: '18px'
            }}
          >News Title</p>
          <p style={{lineHeight: '13px', fontSize: '12px'}}>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <small><a href="#">read more</a></small>
        </div>
      </div>
    </div>
  )
}


const Article = props => {
  return (
    <div
      style={{
        color:'grey',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
        display: 'block',
        padding: '15px'
      }}
      >
      <p style={{
          fontWeight: '700',
          fontSize: '27px',
          lineHeight: '27px'
        }}
      ><a href={props.link || "#"}>{props.title ? props.title : 'Buhari does Something'}</a></p>
      <p style={{lineHeight: '14px', fontSize: '14px'}}>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. aisa asdipa asidj
      </p>
      <small><a href={props.link || "#"}>read more</a></small>
      <hr style={{marginTop: '10px'}}/>
    </div>
  )
}

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h6 className="text-bold" style={{textAlign: 'left'}}>More Videos</h6>
            <hr className="divider divider-iron"/>
            <Row>
              <Col md={6}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
              </Col>
              <Col md={6}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div style={{padding: '0px 15px 15px'}}>
              <h6 className="text-bold" style={{textAlign: 'left'}}>Articles</h6>
              <hr className="divider divider-iron"/>
            </div>
            <div>
              <Article />
              <Article title={'You First: What it Really Means'}/>
              <Article title={'Solving the Herdsmen crisis'}/>
              <Article />
              <Article title={'You First: What it Really Means'}/>
              <Article title={'Solving the Herdsmen crisis'}/>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
