import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/GalleryPage/HeroSection/HeroSection'
import Body from '../components/GalleryPage/Body'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Gallery', active: true},
]

const BanImage = (props) => {
  return (
    <div className="container-fluid" style={{width : '100%', height : '400px', backgroundImage : 'url(../static/images/gallery.jpg)'}}>
      <h2 style={{marginTop : '180px' , color : 'white' }}>A GREAT FUTURE FOR NIGERIA</h2>
    </div>
  )
}

class GalleryPage extends Component {
  render(){
    return (
      <div>
        {/*<PageTitle breadcrumbs={breadcrumbs} title={" "} isMediaPage/>*/}
        <BanImage />
        <br />
        <Body />
        <br/><br/>
      </div>
    )
  }
}

export default withLayout(GalleryPage)
