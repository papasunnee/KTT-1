import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

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
<<<<<<< HEAD
        {/*<PageTitle breadcrumbs={breadcrumbs} title={" "} isMediaPage/>*/}
        <BanImage />
        <br />
=======
        <Head>
          <title>KTT4President | Gallery</title>
        </Head>
        <PageTitle breadcrumbs={breadcrumbs} title={"Gallery"} isMediaPage/>
        <br/><br/>
>>>>>>> 7b43608c372ce1bc85e9bfbf48e360c40bc4cdb3
        <Body />
        <br/><br/>
      </div>
    )
  }
}

export default withLayout(GalleryPage)
