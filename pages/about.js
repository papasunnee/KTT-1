import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/AboutPage/HeroSection/HeroSection'
import TextBody from '../components/AboutPage/TextBody'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'About KTT', active: true},  
]

class AboutPage extends Component {
  render(){
    return (
      <div>
        <HeroSection />
        <PageTitle breadcrumbs={breadcrumbs}/>
        <TextBody />
      </div>
    )
  }
}

export default withLayout(AboutPage)
