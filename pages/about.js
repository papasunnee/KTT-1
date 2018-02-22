import {Component} from 'react'
import Router from 'next/router'
import Head from 'next/head'

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
        <Head>
          <title>KTT4President | About KTT</title>
        </Head>
        <HeroSection />
        <PageTitle breadcrumbs={breadcrumbs}/>
        <TextBody />
      </div>
    )
  }
}

export default withLayout(AboutPage)
