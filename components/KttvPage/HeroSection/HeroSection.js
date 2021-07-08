//import Video from './Video'
import Head from 'next/head'
import { Component} from 'react'
import ModalVideo from 'react-modal-video'
import { Carousel } from 'react-bootstrap'

class MainVideos extends Component{
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

  render (){
    const HeroItem = (props) => (
      <a onClick={this.openModal}>
        <div className="video-thumbnail">
            <img style={{width: '100%', height: '600px'}} alt="900x600" src={props.imgSrc}/>
            <Carousel.Caption>
              <h2 style={{marginBottom: '50px' , marginTop : '-300px', color : '#ffffff'}}>{props.title}</h2>
              <p>{props.description}</p>
            </Carousel.Caption>
        </div>
      </a>
    )
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <Carousel style={{width: "100%"}}>
          <Carousel.Item>
            <HeroItem title={"Principal Visits Lagos State"}
              description={"Lorem ipsum dolor , consectetur adipisicing elit. Dolores labore veritatis, similique sequi harum vitae facere nobis! Voluptatum excepturi, ipsam quo maxime, alias commodi possimus voluptatem omnis odio unde inventore?"}
              imgSrc={"/static/images/tbbgg.png"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <HeroItem title={"You First: What it really means"}
              description={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
              imgSrc={"/static/images/tbbgg.png"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <HeroItem title={"Principal Visits Lagos State"}
              description={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
              imgSrc={"/static/images/tbbgg.png"}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default MainVideos
