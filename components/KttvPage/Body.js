import {Component} from 'react'
//import ParagraphText from './ParagraphText'
//import FullImage from './FullImage/FullImage'
import {Grid, Row, Col } from 'react-bootstrap'
import ArticlesList from '../common/ArticlesList/ArticlesList'

const videos = [
  {
    title: "SKODSDS",
    imgSrc: 'url("/static/images/news-image.jpg")',
    description: ""
  },{
    title: "SKODSDS",
    imgSrc: "",
    description: ""
  },{
    title: "SKODSDS",
    imgSrc: "",
    description: ""
  },{
    title: "SKODSDS",
    imgSrc: "",
    description: ""
  },{
    title: "SKODSDS",
    imgSrc: "",
    description: ""
  },{
    title: "SKODSDS",
    imgSrc: "",
    description: ""
  },
]

const VideoItem = props => {
  return (
    <div
      style={{
        color:'white',
        minHeight:'270px',
        width: '100%',
        textAlign: 'left',
        backgroundImage: props.imgSrc || 'url("/static/images/news-image.jpg")',
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
          >{props.title || "News Title"}</p>
          <p style={{lineHeight: '13px', fontSize: '12px'}}>
            {props.description || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
          </p>
          <small><a href="#">read more</a></small>
        </div>
      </div>
    </div>
  )
}

export default class Home extends Component {
  render(){
    const videos1 = [], videos2 = [];
    for (var i = 0; i < videos.length; i++) {
      ((i+1)%2!==0) && videos1.push(videos[i]);
      ((i+1)%2===0) && videos2.push(videos[i]);
    }
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h6 className="text-bold" style={{textAlign: 'left'}}>More Videos</h6>
            <hr className="divider divider-iron"/>
            <Row>
              <Col md={6}>
                {videos1.map((video)=>(
                  <VideoItem title={video.title} imgSrc={video.imgSrc} description={video.description}/>
                ))}
              </Col>
              <Col md={6}>
                {videos2.map((video)=>(
                  <VideoItem title={video.title} imgSrc={video.imgSrc} description={video.description}/>
                ))}
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <ArticlesList title={'Articles'}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
