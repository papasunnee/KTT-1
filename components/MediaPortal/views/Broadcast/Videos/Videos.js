import {Component} from 'react'
import Head from 'next/head'
/*import {graphql} from 'react-apollo'
import gql from 'graphql-tag'*/
import { Row, Col} from 'reactstrap'
import ModalVideo from 'react-modal-video'
//import Video from './Video'

const videos = [
  {
    title: "Kogi government to sign MoU on fuel-ethanol",
    imgSrc: 'url("/static/images/smallvideobg.png")',
    description: ""
  },{
    title: "Buhari rejects Peace Corps bill",
    imgSrc: 'url("/static/images/smallvideobg.png")',
    description: ""
  },{
    title: "Testimonials: 2 million jobs created",
    imgSrc: 'url("/static/images/smallvideobg.png")',
    description: ""
  },{
    title: "Example Video Title",
    imgSrc: 'url("/static/images/smallvideobg.png")',
    description: ""
  }
]

const VideoItem = props => {
  return (
    <Col md="6">
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
                lineHeight: '30px'
              }}
            >{props.title || "News Title"}</p>
            <p style={{lineHeight: '13px', fontSize: '12px'}}>
              {props.description || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a litle bit longer."}
            </p>
            <small><a href="#!" onClick={props.openModal}>Play Video</a></small>
          </div>
        </div>
      </div>
    </Col>
  )
}

class Videos extends Component{
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render(){
    /*const {newsMany} = props.data || [];
    const articles = props.articles || [];
    //combining articles from the411ng and ktt backend
    let allItems = [...newsMany,...articles];

    allItems.sort(function(a, b) {
      a = new Date(a.publishedDate || a.createdAt);
      b = new Date(b.publishedDate || b.createdAt);
      return a>b ? -1 : a<b ? 1 : 0;
    });
    //select the first 10 items most recent items only
    //console.log(allItems);
    allItems = allItems.slice(0, 9);*/

    return (
      <Row>
        <Head>
          <link rel="stylesheet" href="/static/css/modal-video.css"/>
        </Head>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        {videos.map((video)=>(
          <VideoItem title={video.title} imgSrc={video.imgSrc} description={video.description} openModal={this.openModal}/>
        ))}
        {/*videos1.map((video)=>(
          <VideoItem title={video.title} imgSrc={video.imgSrc} description={video.description}/>
        ))*/}
      </Row>
    )
  }
}

//export default Articles

/*const gqlWrapper = gql `
query rootQuery{
  newsMany(limit: 4, sort:CREATEDAT_DESC) {
    title
    state
    createdAt
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(Articles)*/

export default Videos
