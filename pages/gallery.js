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
class GalleryPage extends Component {
  render(){
    return (
      <div>
        <PageTitle breadcrumbs={breadcrumbs} title={"Gallery"} isMediaPage/>
        <br/><br/>
        <Body />
        <br/><br/>
      </div>
    )
  }
}

export default withLayout(GalleryPage)
