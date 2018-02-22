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
class GalleryPage extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>KTT4President | Gallery</title>
        </Head>
        <PageTitle breadcrumbs={breadcrumbs} title={"Gallery"} isMediaPage/>
        <br/><br/>
        <Body />
        <br/><br/>
      </div>
    )
  }
}

export default withLayout(GalleryPage)
